const { EmbedBuilder } = require("discord.js");
const discord = require('discord.js');

module.exports = {
  name: 'invite',
  description: 'Me convide para seu servidor!',
  type: discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    const embed = new EmbedBuilder()
        .setColor('#eb1616')
        .setTitle('Olá, Tudo bem?')
        .setDescription('Vamos ser amigos!')
        .setImage('https://i.pinimg.com/564x/a0/75/00/a075004f0d26d076d869eadb600aef97.jpg')
        .addFields(
        { name: `Invite me!`, inline: true, value: '[Link](https://discord.com/oauth2/authorize?client_id=1090405627425198140&permissions=8&scope=applications.commands%20bot)', inline: false },
        )
        .setTimestamp()
        .setFooter({ text: 'Convida ai!', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

    return await interaction.reply({embeds: [embed]});
  }
}