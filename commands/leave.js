const discord = require('discord.js');
const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'leave',
    description: 'Retirar bot da call!',
    type: discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {

        if(!interaction.member.permissions.has('KICK_MEMBERS')) return interaction.channel.send('Não vou sair!');
        client.distube.voices.leave(interaction)
        const embed = new EmbedBuilder()
            .setTitle(`Pronto vazei!`)
            .setColor("#eb1616")
            .setDescription(`Espero poder tocar mais depois!`)

        interaction.channel.send({embeds: [embed]});
    }
}