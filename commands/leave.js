const discord = require('discord.js');
const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'leave',
    description: 'Pedir para bot sair de uma call!',
    type: discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
        try {
            
            client.distube.voices.leave(interaction)
            const embed = new EmbedBuilder()
                .setTitle(`Pronto vazei!`)
                .setColor("#eb1616")
                .setDescription(`Espero poder tocar mais depois!`)

            await interaction.reply({embeds: [embed]});

        } catch (error) {

            console.log(error);

        }
    }
}