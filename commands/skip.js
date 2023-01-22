const {EmbedBuilder} = require("discord.js");
module.exports.run = async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    let channel = message.member.voice.channel;
    
        if(!channel){
            const embed = new EmbedBuilder()
            .setTitle(`Entra em um canal de voz ai!`)
            .setColor("#eb1616")
            .setDescription(`Assim não da neh!`)

            return message.channel.send({embeds: [embed]});
        }
        if(!queue){
            const embed = new EmbedBuilder()
            .setTitle(`Pular o que?`)
            .setColor("#eb1616")
            .setDescription(`Não tem musica para pular ue!`)

            return message.channel.send({embeds: [embed]});
        }

        try {
            const song = await queue.skip()
            const embed = new EmbedBuilder()
                .setColor('#eb1616')
                .setTitle('Proximaaa!')
                .setDescription('Pulando...')
                .setTimestamp()
                .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

            message.channel.send({ embeds: [embed] });
        } catch (e) {
            const embed = new EmbedBuilder()
                .setColor('#eb1616')
                .setTitle('ue??')
                .setDescription(`Não tem proximaaa...`)
                .setTimestamp()
                .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

            message.channel.send({ embeds: [embed] });

            queue.stop()
        }
  };