const {EmbedBuilder} = require("discord.js");
const config = require('../config/config.json');

module.exports.run = async (client, message, args) => {
        if(args[0]===undefined) return message.channel.send(`Use ${config.prefix}play [Nome Musica]`);
        if(!message.member.voice.channel){
            const embed = new EmbedBuilder()
            .setTitle(`Entre em um canal de voz!!`)
            .setThumbnail('https://3.bp.blogspot.com/-Ht6GDhPLkXM/WrfC848CXUI/AAAAAAAASeU/ElCzKraOlREPSOQcuTJ71wS4qICb0smOwCLcBGAs/s640/Kyoko.gif')
            .setColor("#eb1616")
            .setDescription(`Ué quer que eu toque para quem?`)
            return message.channel.send({embeds: [embed]});
        }
        if(args[0].substring(-5, 32) ==='https://www.youtube.com/playlist'){
            let embed = new EmbedBuilder()
            .setTitle(`Este comando não aceita playlist!`)
            .setColor("#eb1616")
            .setDescription(`Use ${config.prefix}playlist [playlist]`)
            return message.channel.send({embeds: [embed]});
        }
        client.distube.play(message.member.voice.channel, args.toString(), {
            member: message.member,
            textChannel: message.channel,
            message
        })
        
    };