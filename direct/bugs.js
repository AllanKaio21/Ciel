const { EmbedBuilder, KICK_MEMBERS } = require("discord.js");
const fs = require('fs');

module.exports.run = async (client, message ,args) => {
  console.log(message.author)
  if(message.author.username!='Kral'&&message.author.discriminator!=5506){
    let embed = new EmbedBuilder()
    .setColor('#eb1616')
    .setTitle('Impossivel!')
    .setThumbnail('https://c.tenor.com/QDq1cZI2VtsAAAAd/itachi-sasuke.gif')
    .setDescription(`Você é fraco... lhe falta permisão!`)

    return message.channel.send({ embeds: [embed] })
  };
  fs.readFile('./config/guild/bugs.json', 'utf-8', (err, data) => {
      if (err) {
        throw err;
      }else{
        const obj = JSON.parse(data);
        if(obj.bugs.length<1){
          return message.channel.send('Não tem bugs reportados!');
        }
        for (let i in obj.bugs)    
        {
          let embed = new EmbedBuilder()
            .setColor('#eb1616')
            .setTitle(`Bug`)
            .setDescription(`${obj.bugs[i]}`)

            message.channel.send({ embeds: [embed] })
        } 
    }
  });
}