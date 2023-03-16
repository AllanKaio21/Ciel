const {EmbedBuilder} = require("discord.js");
const config = require('../config/config.json');
const fs = require('fs');
const cooldown = require('./cooldown.js');
const timer = 5000;
const shortcuts = require("../commands/short/shortcuts.js")

module.exports.run = async (client) => {
    const prefix2 = [];
    setInterval(function(){  
      getPrefix();
    }, 1000);
    const prefixId = (indice, id) => {
      //Get prefix and save prefix
      fs.readFile('./config/guild/prefix.json', 'utf-8', (err2, data2) => {
        if (err2) {
          throw err2;
        }else{
          const obj2 = JSON.parse(data2);
          prefix2[id] = obj2.prefix[indice];
          return;
        }
      });
    }

    const getPrefix = () =>{
      fs.readFile('./config/guild/guild.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }else{
          const obj = JSON.parse(data);
          // if id != obj.id
          for(let i in obj.id){
            prefixId(i,obj.id[i]);
          } 
        }
      });
    }
    client.on('messageCreate', message => {  
      if (message.author.bot) return;
      if (message.channel.type === 'DM') return;
      if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())){
        if(prefix2[message.guild.id]===undefined)return;
        if(!message.content.toLowerCase().startsWith(prefix2[message.guild.id].toLowerCase())) return;
      }
      if(!cooldown.is(message.guild.id)){
        cooldown.add(message.guild.id);
        setTimeout(() => {
          cooldown.remove(message.guild.id);
        },timer);
        let timeR=timer/1000;
        const intervalo = setInterval(()=>{
          timeR--;
          if(!timeR>0){
            clearInterval(intervalo);
          }
          cooldown.setTime(timeR, message.guild.id);
        },1000);   
      }else{
        let tm = cooldown.getTime(message.guild.id);
        if(tm === undefined){
          tm = timer/1000;
        }
        return message.reply(`Espere **${tm}s** para usar outro comando!`);
      }
      if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
      const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
      const command = args.shift().toLowerCase();

      try {
        const commandFile = require(`../commands/${shortcuts.getFile(command)}.js`)
        commandFile.run(client, message, args);
      } catch (err) {
        const embed = new EmbedBuilder()
          .setColor('#eb1616')
          .setTitle('Não reconheço este comando!')
          .setThumbnail('https://3.bp.blogspot.com/-Ht6GDhPLkXM/WrfC848CXUI/AAAAAAAASeU/ElCzKraOlREPSOQcuTJ71wS4qICb0smOwCLcBGAs/s640/Kyoko.gif')
          .setDescription(`Use o ${config.prefix}help para ver os comandos!`)

        message.channel.send({ embeds: [embed] })
  }
  });
};