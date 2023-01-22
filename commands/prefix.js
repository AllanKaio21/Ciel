const { EmbedBuilder, KICK_MEMBERS } = require("discord.js");
const fs = require('fs');

module.exports.run = async (client, message, args) => {
    if(args[0]===undefined){
        return message.channel.send('Escolha um prefix! Ex.: prefix +');
    }
    if(!message.member.permissions.has('KICK_MEMBERS')){
      let embed = new EmbedBuilder()
        .setColor('#eb1616')
        .setTitle('Impossivel!')
        .setThumbnail('https://c.tenor.com/QDq1cZI2VtsAAAAd/itachi-sasuke.gif')
        .setDescription(`Você é fraco... lhe falta permisão!`)

        return message.channel.send({ embeds: [embed] })
    };
  const savePrefix = (prefixGuild, indice) => {
    //Get prefix and save prefix
    fs.readFile('./config/guild/prefix.json', 'utf-8', (err2, data2) => {
      if (err2) {
        throw err2;
      }else{
        const obj2 = JSON.parse(data2);
        obj2.prefix[indice]=prefixGuild;
        const objW2 = JSON.stringify(obj2);
        fs.writeFile('./config/guild/prefix.json', objW2, 'utf-8',() => {});
        let embed = new EmbedBuilder()
          .setColor('#eb1616')
          .setAuthor(`${message.guild.name}`, `https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png`)
          .setTitle('Alteração de Prefix da Guilda!')
          .setDescription(`O prefixo mudou para ${obj2.prefix[indice]}`)

          message.channel.send({ embeds: [embed] })
          message.delete().catch(O_o => {});
      }
    });
  }
  const prefix3 = args[0];
  //Get id and save id
  const prefixSave = () =>{
    fs.readFile('./config/guild/guild.json', 'utf-8', (err, data) => {
      if (err) {
          throw err;
      }else{
        const obj = JSON.parse(data);
        //if id!=obj.id
        for(let i in obj.id){
          if(obj.id[i]===message.guild.id){
            savePrefix(prefix3,i);
            return;
          }
        }
        obj.id.push(message.guild.id);
        const objW = JSON.stringify(obj);
        fs.writeFile('./config/guild/guild.json', objW, 'utf-8',() => {});
        //Get prefix and save prefix
        fs.readFile('./config/guild/prefix.json', 'utf-8', (err2, data2) => {
          if (err2) {
              throw err2;
          }else{
            const obj2 = JSON.parse(data2);
            obj2.prefix.push(prefix3);
            const objW2 = JSON.stringify(obj2);
            fs.writeFile('./config/guild/prefix.json', objW2, 'utf-8',() => {});
            let embed = new EmbedBuilder()
              .setColor('#eb1616')
              .setTitle('Alteração de Prefix da Guilda!')
              .setDescription(`O prefixo mudou para ${prefix3}`)

              message.channel.send({ embeds: [embed] })
              message.delete().catch(O_o => {});
          }
        });
      }
    });
  }
  prefixSave();
};