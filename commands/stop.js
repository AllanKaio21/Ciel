const {EmbedBuilder} = require("discord.js");

module.exports.run = async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if(!queue){
            let embed = new EmbedBuilder()
            .setTitle(`Que musica?`)
            .setDescription('Ta perdido... use o help!')
            .setColor("#eb1616")
            .setDescription(`Acho que não tem musica...`)
    
            return message.channel.send({embeds: [embed]});
        }

        let embed = new EmbedBuilder()
                .setTitle(`Ta Parei!`)
                .setColor("#eb1616")
                .setDescription(`Poxa parar porque?`)
                .setTimestamp()
                .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });
    
            message.channel.send({ embeds: [embed] });

        queue.stop()
        client.distube.voices.leave(message);
};