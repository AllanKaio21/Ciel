const { EmbedBuilder } = require("discord.js");
const config = require('../config/config.json');

module.exports.run = async (client, message, args) => {
  let embed = new EmbedBuilder()
    .setColor('#eb1616')
    .setTitle('Website!')
    .setDescription('Uma visita?')
    .setImage('')
    .addFields(
      { name: `Website:`,inline: true, value: '[https://botciel.web.app/](https://botciel.web.app/)', inline: false },
    )
    .setTimestamp()
    .setFooter({ text: '🎈🎉', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });
    return message.channel.send({ embeds: [embed] });
};