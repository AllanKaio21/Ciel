const {EmbedBuilder} = require("discord.js");
const config = require('../config/config.json')

module.exports.run = async (client, message, args) => {
      if(args[0]===undefined) return message.channel.send(`Use ${config.prefix}playlist [link da playlist]`);
      if(!message.member.voice.channel){
        const embed = new EmbedBuilder()
          .setTitle(`Entre em um canal de voz!!`)
          .setThumbnail('https://3.bp.blogspot.com/-Ht6GDhPLkXM/WrfC848CXUI/AAAAAAAASeU/ElCzKraOlREPSOQcuTJ71wS4qICb0smOwCLcBGAs/s640/Kyoko.gif')
          .setColor("#eb1616")
          .setDescription(`Ué quer que eu toque para quem?`)
          return message.channel.send({embeds: [embed]});
      }else if(!(args[0].substring(-5, 32) ==='https://www.youtube.com/playlist')){
        const embed = new EmbedBuilder()
          .setTitle(`Não é uma playlist!`)
          .setColor("#eb1616")
          .setDescription(`Preciso de um link da playlist!`)
        return message.channel.send({embeds: [embed]});
      }
    const queue = client.distube.getQueue(message)

    client.distube.play(message.member.voice.channel, args.toString(), {
      member: message.member,
      textChannel: message.channel,
      message
    })
};