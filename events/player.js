const {EmbedBuilder} = require("discord.js");
const config = require("../config/config.json")
module.exports.run = async (client) => {
  client.emotes = config.emoji
client.distube
  .on('playSong', (queue, song) => {
    const embed = new EmbedBuilder()
      .setColor('#eb1616')
      .setTitle('Tocando Música!')
      .setDescription('🎶🎵')
      .setThumbnail(song.thumbnail)
      .addFields(
        { name: `Música:`,inline: true, value: `${song.name}`, inline: false },
        { name: `Autor:`,inline: true, value: `${song.uploader.name}`,inline: false },
        { name: `Duração:`,inline: true, value: `${song.formattedDuration}`,inline: false  },
      )
      .setTimestamp()
      .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

    queue.textChannel.send({ embeds: [embed] });
  })
  .on('addSong', (queue, song) => {
    const embed = new EmbedBuilder()
      .setColor('#eb1616')
      .setTitle('Ebaa mais uma adicionada!')
      .setDescription('Está na fila 😉')
      .addFields(
        { name: `Música:`,inline: true, value: `${song.name}`, inline: false },
        { name: `Autor:`,inline: true, value: `${song.uploader.name}`,inline: false },
        { name: `Duração:`,inline: true, value: `${song.formattedDuration}`,inline: false  },
      )
      .setTimestamp()
      .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

    queue.textChannel.send({ embeds: [embed] });
  })
  .on('addList', (queue, playlist) => {
    const embed = new EmbedBuilder()
      .setColor('#eb1616')
      .setTitle('Playlist!')
      .setURL(playlist.url)
      .setDescription('Está na fila 😉')
      .setThumbnail(playlist.thumbnail)
      .addFields(
        { name: `Nome da Playlist:`,inline: true, value: `${playlist.name}`, inline: false },
        { name: `Quantidade:`,inline: true, value: `${playlist.songs.length}`,inline: false  },
      )
      .setTimestamp()
      .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

    queue.textChannel.send({ embeds: [embed] });
  })
  .on('error', (channel, e) => {
    if (channel) channel.send(`${client.emotes.error} | Deu um BO feio aqui... Me lasquei!`)
    else console.error(e)
  })
  .on('empty', channel => {
    const embed = new EmbedBuilder()
      .setColor('#eb1616')
      .setTitle('Saindo!')
      .setDescription('Fui abandonado... Então adeus 😓')
      .setTimestamp()
      .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

    channel.send({ embeds: [embed] });
  })
  .on('searchNoResult', (message, query) =>
    message.channel.send(`${client.emotes.error} | Não achei isso não...`)
  )
  .on('finish', queue => {
    const embed = new EmbedBuilder()
      .setColor('#eb1616')
      .setTitle('Acabouu!')
      .setDescription('Espero tocar mais depois...')
      .setTimestamp()
      .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

    queue.textChannel.send({ embeds: [embed] });
  })
}