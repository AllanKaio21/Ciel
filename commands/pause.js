const {EmbedBuilder} = require("discord.js");

module.exports.run = async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if(!queue){
        const embed = new EmbedBuilder()
        .setTitle(`Que musica?`)
        .setDescription('Ta perdido... use o help!')
        .setColor("#eb1616")
        .setDescription(`Acho que não tem musica...`)

        return message.channel.send({embeds: [embed]});
    }
    if (queue.paused) {
        queue.resume()
        const embed = new EmbedBuilder()
            .setColor('#eb1616')
            .setTitle('Resume!')
            .setDescription('Voltando a tocar!')
            .setTimestamp()
            .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

        message.channel.send({ embeds: [embed] });
    }
    queue.pause()
    const embed = new EmbedBuilder()
        .setColor('#eb1616')
        .setTitle('Parei!')
        .setDescription('Deixa eu descansar minha garganta plss!')
        .setTimestamp()
        .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

    message.channel.send({ embeds: [embed] });
};