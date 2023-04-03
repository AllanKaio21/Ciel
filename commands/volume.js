const {EmbedBuilder} = require("discord.js");
const discord = require('discord.js');

module.exports = {
  name: 'volume',
  description: 'Controlar nível de volume do bot!',
  type: discord.ApplicationCommandType.ChatInput,
  options: [
    {
      type: 4,
      name: 'nível',
      description: 'Digite um valor entre 0-100.',
      required: true, 
    }
  ],

  run: async (client, interaction) => {
    const args = interaction.options.getInteger('nível');
    const queue = client.distube.getQueue(interaction)
    if(!queue){
      const embed = new EmbedBuilder()
        .setTitle(`Não Tem Nada Rolando!`)
        .setColor("#eb1616")
        .setDescription(`Não estou tocando nada para isso...`)

      return await interaction.reply({embeds: [embed]});
    }

    const vol = args
    if(vol > 100 || vol < 0) return await interaction.reply("Volume precisa ser entre 0 e 100!");
    queue.setVolume(vol)
    let volume = '|';
    const embed = new EmbedBuilder()
      .setTitle(`Volume!`)
      .setColor("#eb1616")
      .setDescription(`Volume Alterado!`)
      .addFields(
          { name: `Volume:`,inline: true, value: `${volume.repeat(vol)} ${vol}%`, inline: false },
      )
      .setTimestamp()
      .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });
      
    await interaction.reply({embeds: [embed]});
  }
}