const {EmbedBuilder} = require("discord.js")

module.exports.run = async (client, message, args) => {
    if(!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send('Não vou sair!');
    client.distube.voices.leave(message)
    const embed = new EmbedBuilder()
        .setTitle(`Pronto vazei!`)
        .setColor("#eb1616")
        .setDescription(`Espero poder tocar mais depois!`)

        message.channel.send({embeds: [embed]});
};