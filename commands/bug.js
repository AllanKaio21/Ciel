const { EmbedBuilder, KICK_MEMBERS } = require("discord.js");
const fs = require('fs');

module.exports.run = async (client, message ,args) => {
  if(!message.member.permissions.has('KICK_MEMBERS')){
    let embed = new EmbedBuilder()
    .setColor('#eb1616')
    .setTitle('Impossivel!')
    .setThumbnail('https://c.tenor.com/QDq1cZI2VtsAAAAd/itachi-sasuke.gif')
    .setDescription(`Você é fraco... lhe falta permisão!`)

    return message.channel.send({ embeds: [embed] })
  };
  if(args.length<4){
    return message.channel.send('Mensagem precisa ter pelo menos quatro palavras!');
  }
  var data = new Date();
  var dia = String(data.getDate()).padStart(2, '0');
  var mes = String(data.getMonth() + 1).padStart(2, '0');
  var ano = data.getFullYear();
  dataAtual = '\n**Data:** ' + dia + '/' + mes + '/' + ano + '\n';
  autor = `**Author:** ${message.member.user.username}#${message.member.user.discriminator}\n`;
  text = `**Bug:** ${args.join(` `)} ${dataAtual}`;
  fs.readFile('./config/guild/bugs.json', 'utf-8', (err, data) => {
      if (err) {
          throw err;
      }else{
        const obj = JSON.parse(data);
        obj.bugs.push(autor+text);
        const objW = JSON.stringify(obj);
        fs.writeFile('./config/guild/bugs.json', objW, 'utf-8',() => {});
        let embed = new EmbedBuilder()
          .setColor('#eb1616')
          .setTitle('Bug relatado com sucesso!')
          .setThumbnail('https://calculojuridico.com.br/assets/images/2021_04_14_contratacao_escritorios.gif')
          .setDescription(`Um bug? affs mais trabalho...`)

          return message.channel.send({ embeds: [embed] })
      }
  });
}