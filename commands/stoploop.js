const {EmbedBuilder} = require("discord.js");
const discord = require('discord.js');

module.exports = {
    name: 'stoploop',
    description: 'Parar loop de uma música!',
    type: discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
        const queue = client.distube.getQueue(interaction)
        if(!queue){
            let embed = new EmbedBuilder()
            .setTitle(`Que musica?`)
            .setDescription('Ta perdido... use o help!')
            .setColor("#eb1616")
            .setDescription(`Acho que não tem musica...`)

            return interaction.channel.send({embeds: [embed]});
        }
        const embed = new EmbedBuilder()
            .setTitle(`Loop finalizado!`)
            .setColor("#eb1616")
            .setDescription(`Eu também ja estava enjoado...`)

        await interaction.reply({embeds: [embed]});

        mode = queue.setRepeatMode(0)
    }
}