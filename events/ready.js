const config = require('../config/config.json');

module.exports.run = async (client) => {
  const time = 5000;
  client.on("ready", () => {
    client.user.setStatus('available')
    let types = [
      `LISTENING`,
      `STREAMING`,
      `PLAYING`,
      `STREAMING`,
      `LISTENING`
    ]
    let activities = [
      `${config.prefix}help !`,
      `Valorant na Twitch!`,
      `Pedra em ${client.guilds.cache.size} servidores!`,
      `Rocket League na Twitch!`,
      `uma musica! 🎵🎶`
    ],
    i = 0;
    setInterval(() => {client.user.setActivity(`${activities[i++]}`, {
      type: `${types[i-1]}`,
      url: 'https://www.twitch.tv/monstercat'
    });if(i > activities.length-1) i = 0}, time*60);
    console.log("Estou Online!");
  });
};