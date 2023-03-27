const discord = require('discord.js');
const {EmbedBuilder} = require("discord.js")

module.exports = {
    name: 'loop',
    description: 'Repetir música tocada!',
    type: discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
        const queue = client.distube.getQueue(interaction)
        if(!queue){
            let embed = new EmbedBuilder()
            .setTitle(`Que musica?`)
            .setDescription('Ta perdido... use o help!')
            .setColor("#eb1616")
            .setDescription(`Acho que não tem musica...`)

            return await interaction.reply({embeds: [embed]});
        }
        const embed = new EmbedBuilder()
            .setTitle(`Loop!`)
            .setDescription("Essa é boaaa!!!")
            .setColor("#eb1616")

        await interaction.reply({embeds: [embed]});

        mode = queue.setRepeatMode(1)
    }
}