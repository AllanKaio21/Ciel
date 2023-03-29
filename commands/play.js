const discord = require('discord.js');
const { EmbedBuilder } = require("discord.js");
const { emoji } = require('../config/config.json')

module.exports = {
    name: 'play',
    description: 'Tocar musicas e playlist!',
    type: discord.ApplicationCommandType.ChatInput,
    options: [
        {
            type: 3,
            name: 'música',
            description: 'Digite o nome de uma música ou link.',
            required: true
        }
    ],

    run: async (client, interaction) => {
        const args = interaction.options.getString('música');
        
        if(!interaction.member.voice.channel){
            const embed = new EmbedBuilder()
                .setTitle(`Entre em um canal de voz!!`)
                .setThumbnail('https://3.bp.blogspot.com/-Ht6GDhPLkXM/WrfC848CXUI/AAAAAAAASeU/ElCzKraOlREPSOQcuTJ71wS4qICb0smOwCLcBGAs/s640/Kyoko.gif')
                .setColor("#eb1616")
                .setDescription(`Ué quer que eu toque para quem?`)

            return await interaction.reply({embeds: [embed]});
        }
        let m;
        try {
            m = await interaction.reply('🔎 Pesquisando...');
            await client.distube.play(interaction.member.voice.channel, args.toString(), {
                member: interaction.member,
                textChannel: interaction.channel,
                interaction
            });
            m.edit('Ta ai! 😎');
        } catch (err) {
            m.edit(`${emoji.error} Não tenho permissão para entrar neste canal de voz!`);
        }
    }
}