const { EmbedBuilder } = require("discord.js");
const config = require('../config/config.json');

module.exports.run = async (client, message, args) => {
  if(args.length === 0){
    let embed = new EmbedBuilder()
    .setTitle(`Informe o nome do canal! => Ex.: ${config.prefix}twitch [canal]`)
    .setColor("#eb1616")
    message.channel.send({ embeds: [embed] })
    message.delete().catch(O_o => {});
  }else{
    let embed = new EmbedBuilder()
    .setTitle(`Twitch de ${args}`)
    .setURL(`https://www.twitch.tv/${args}`)
    .setColor("#eb1616")
    .setThumbnail('https://c.tenor.com/Z8oq_VNHZHQAAAAC/twitch-marachime.gif')
    .setDescription(`Aqui esta o resultado!`)
    message.channel.send({ embeds: [embed] })
    message.channel.send(`https://www.twitch.tv/${args}`)
    message.delete().catch(O_o => {});
  }
}