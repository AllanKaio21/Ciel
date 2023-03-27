const discord = require('discord.js');
const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'leave',
    description: 'Retirar bot da call!',
    type: discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {

        if(!interaction.member.permissions.has('KICK_MEMBERS')) return await interaction.reply('Não vou sair!');
        client.distube.voices.leave(interaction)
        const embed = new EmbedBuilder()
            .setTitle(`Pronto vazei!`)
            .setColor("#eb1616")
            .setDescription(`Espero poder tocar mais depois!`)

        await interaction.reply({embeds: [embed]});
    }
}