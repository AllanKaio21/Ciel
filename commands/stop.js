const {EmbedBuilder} = require("discord.js");
const discord = require('discord.js');

module.exports = {
    name: 'stop',
    description: 'Parar reprodução!',
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

        let embed = new EmbedBuilder()
            .setTitle(`Ta Parei!`)
            .setColor("#eb1616")
            .setDescription(`Poxa parar porque?`)
            .setTimestamp()
            .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

        await interaction.reply({ embeds: [embed] });

        queue.stop()
        client.distube.voices.leave(interaction);
    }
}