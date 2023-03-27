const { ActivityType } = require('discord.js');
const config = require('../config/config.json');

module.exports.run = async (client) => {
  const time = 5000;
  client.on("ready", () => {
    let types = [
      ActivityType.Listening,
      ActivityType.Competing,
      ActivityType.Playing,
      ActivityType.Listening
    ]
    let activitie = [
      `${config.prefix}help !`,
      `Rocket League`,
      `Pedra em ${client.guilds.cache.size} servidores!`,
      `uma musica! 🎵🎶`
    ],
    i = 0;
    setInterval(() => {
      client.user.setPresence({
        activities: [{ name: `${activitie[i]}`, type: types[i++] }],
        status: 'dnd'
      });
      if(i > activitie.length-1) i = 0;
    }, time*60);
    console.log(`Estou Online em ${client.guilds.cache.size} Servidores!`);
  });
};