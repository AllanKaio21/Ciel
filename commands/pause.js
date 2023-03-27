const discord = require('discord.js');
const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'pause',
    description: 'Pausar música!',
    type: discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
        const queue = client.distube.getQueue(interaction)
        if(!queue){
            const embed = new EmbedBuilder()
            .setTitle(`Que musica?`)
            .setDescription('Ta perdido... use o help!')
            .setColor("#eb1616")
            .setDescription(`Acho que não tem musica...`)

            return await interaction.reply({embeds: [embed]});
        }
        if (queue.paused) {
            queue.resume()
            const embed = new EmbedBuilder()
                .setColor('#eb1616')
                .setTitle('Resume!')
                .setDescription('Voltando a tocar!')
                .setTimestamp()
                .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

            return await interaction.reply({ embeds: [embed] });
        }
        queue.pause()
        const embed = new EmbedBuilder()
            .setColor('#eb1616')
            .setTitle('Parei!')
            .setDescription('Deixa eu descansar minha garganta plss!')
            .setTimestamp()
            .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

        await interaction.reply({ embeds: [embed] });
    }
}