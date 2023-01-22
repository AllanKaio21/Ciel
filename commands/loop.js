const {EmbedBuilder} = require("discord.js")

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
    const embed = new EmbedBuilder()
        .setTitle(`Loop!`)
        .setDescription("Essa é boaaa!!!")
        .setColor("#eb1616")

    message.channel.send({embeds: [embed]});

    mode = queue.setRepeatMode(1)
};