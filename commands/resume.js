const {EmbedBuilder} = require("discord.js");
const discord = require('discord.js');

module.exports = {
    name: 'resume',
    description: 'Retomar a música!',
    type: discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
        const queue = client.distube.getQueue(interaction)
        if(!queue){
            const embed = new EmbedBuilder()
            .setTitle(`Que musica?`)
            .setDescription('Ta perdido... use o help!')
            .setColor("#eb1616")
            .setDescription(`Acho que não tem musica...`)

            await interaction.reply({embeds: [embed]});

        }else if (queue.paused) {
            queue.resume()
            const embed = new EmbedBuilder()
                .setColor('#eb1616')
                .setTitle('Resume!')
                .setDescription('Voltando a tocar!')
                .setTimestamp()
                .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

            await interaction.reply({ embeds: [embed] });

        } else {
            const embed = new EmbedBuilder()
                .setColor('#eb1616')
                .setTitle('Nada em pausa!')
                .setDescription('ta moscando...')
                .setTimestamp()
                .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

            await interaction.reply({ embeds: [embed] });

        }
    }
}