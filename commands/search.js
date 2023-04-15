const discord = require('discord.js');
const { EmbedBuilder } = require("discord.js");
const { search } = require('../spotify/index.js');
const { emoji } = require('../config/config.json');

module.exports = {
    name: 'search',
    description: 'Pesquise por albums e faixas de músicas no spotify.',
    type: discord.ApplicationCommandType.ChatInput,
    options: [
        {
            type: 3,
            name: 'type',
            description: 'Escolha o que deseja pesquisar.',
            required: true,
            choices: [
                { name: 'Faixa', value: "track" },
                { name: 'Álbum', value: "album" },
            ]
        },
        {
            type: 3,
            name: 'query',
            description: 'Digite o nome de uma música ou album.',
            required: true
        }
    ],

    run: async (client, interaction) => {
        const type = interaction.options.getString('type');
        const query = interaction.options.getString('query');
        
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
            await client.distube.play(interaction.member.voice.channel, await search(query, type), {
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