const Discord = require('discord.js');
const discord = require('discord.js');

module.exports = {
  name: 'say',
  description: 'Peça para o bot falar algo!',
  type: discord.ApplicationCommandType.ChatInput,
  options: [
    {
      type: 3,
      name: 'texto',
      description: 'digite sua mensagem.',
      required: true, 
    }
  ],
  run: async (client, interaction) => {
    const args = interaction.options.getString('texto');
    const sayinteraction = args;
    await interaction.reply(sayinteraction);
  }
}