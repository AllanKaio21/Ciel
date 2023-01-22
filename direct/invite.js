const { EmbedBuilder } = require("discord.js");
const config = require('../config/config.json');

module.exports.run = async (client, message, args) => {
  let embed = new EmbedBuilder()
    .setColor('#eb1616')
    .setTitle('Olá, Tudo bem?')
    .setDescription('Vamos ser amigos!')
    .setImage('https://i.pinimg.com/564x/a0/75/00/a075004f0d26d076d869eadb600aef97.jpg')
    .addFields(
      { name: `Invite me!`,inline: true, value: '[Link](https://discord.com/oauth2/authorize?client_id=883028516881465377&scope=bot&permissions=8)', inline: false },
    )
    .setTimestamp()
    .setFooter({ text: '🎈🎉', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });
    return message.channel.send({ embeds: [embed] });
};