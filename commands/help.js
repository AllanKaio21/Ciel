const discord = require('discord.js');
const { EmbedBuilder } = require("discord.js");
const config = require('../config/config.json');
const fs = require("fs");

module.exports = {
  name: 'help',
  description: 'Comandos disponiveis!',
  type: discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    fs.readdir(`./commands`, (error, files) => { 
      let FieldsArray = []
      files.forEach(file => {     
        if(!file?.endsWith('.js')) return;
        file = require(`../commands/${file}`);
        if(!file?.name) return;
        if(!file?.description) return;
  
        FieldsArray.push({ name: `${config.prefix}${file?.name}`,inline: true, value: `${file?.description}`, inline: false })
      });
      sendCommands(FieldsArray)
    });

    async function sendCommands(FieldsArray) {
      let embed = new EmbedBuilder()
      .setColor('#eb1616')
      .setTitle('Help')
      .setDescription('Comandos!')
      .setThumbnail('https://www.imagensanimadas.com/data/media/712/numero-imagem-animada-0195.gif')
      .addFields(FieldsArray)
      .setTimestamp()
      .setFooter({ text: 'Espero ter ajudado!', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

      return await interaction.reply({ embeds: [embed] });
    }
  }
}