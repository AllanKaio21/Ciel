const {EmbedBuilder} = require("discord.js")

module.exports.run = async (client, message, args) => {
  const queue = client.distube.getQueue(message)
  if(!queue){
    const embed = new EmbedBuilder()
      .setTitle(`Não Tem Nada Rolando!`)
      .setColor("#eb1616")
      .setDescription(`Não estou tocando nada para isso...`)

      return message.channel.send({embeds: [embed]});
  }

  if(isNaN(args[0])) return message.reply("Isto não é uma valor valido!");
  const vol = parseInt(args[0])
  if(args[0] > 100||args[0] < 0) return message.reply("Volume precisa ser entre 0 e 100!");
  queue.setVolume(vol)
    let volume = '|';
    const embed = new EmbedBuilder()
      .setTitle(`Volume!`)
      .setColor("#eb1616")
      .setDescription(`Volume Alterado!`)
      .addFields(
          { name: `Volume:`,inline: true, value: `${volume.repeat(args[0])} ${args[0]}%`, inline: false },
      )
      .setTimestamp()
      .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });
      
    message.channel.send({embeds: [embed]});
};