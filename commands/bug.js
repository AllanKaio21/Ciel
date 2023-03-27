const discord = require("discord.js");
const { EmbedBuilder, KICK_MEMBERS } = require("discord.js");
const fs = require('fs');

module.exports = {
  name: 'bug',
  description: 'Reportar um bug do bot!',
  type: discord.ApplicationCommandType.ChatInput,
  options: [
    {
      type: 3,
      name: 'relatar',
      description: 'digite o bug encontrado.',
      required: true, 
    }
  ],

  run: async (client, interaction) => {
    const args = interaction.options.getString('relatar');

    if(!interaction.member.permissions.has('KICK_MEMBERS')){
      let embed = new EmbedBuilder()
      .setColor('#eb1616')
      .setTitle('Impossivel!')
      .setThumbnail('https://c.tenor.com/QDq1cZI2VtsAAAAd/itachi-sasuke.gif')
      .setDescription(`Você é fraco... lhe falta permisão!`)

      return await interaction.reply({ embeds: [embed] })
    };
    if(args.length < 10){
      return await interaction.reply('Mensagem precisa ter pelo menos dez caracters!');
    }
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    dataAtual = '\n**Data:** ' + dia + '/' + mes + '/' + ano + '\n';
    autor = `**Author:** ${interaction.member.user.username}#${interaction.member.user.discriminator}\n`;
    text = `**Bug:** ${args} ${dataAtual}`;
    fs.readFile('./config/guild/bugs.json', 'utf-8', async (err, data) => {
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

            return await interaction.reply({ embeds: [embed] })
        }
    });
  }
}