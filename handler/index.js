const fs = require("fs");

module.exports = async (client) => {

  const SlashsArray = []

  fs.readdir(`./commands/`, (error, files) => { 
    files.forEach(files => {     
      if(!files?.endsWith('.js')) return;
      files = require(`../commands/${files}`);
      if(!files?.name) return;
      client.slashCommands.set(files?.name, files);
      SlashsArray.push(files)
    });
  });
  // Inicialiar comandos das guildas com o bot
  client.on("ready", async () => {
    client.guilds.cache.forEach(guild => guild.commands.set(SlashsArray))
  });
  // Carregar comandos para nova guilda
  client.on("guildCreate", async (guild) => {
    console.log(`Entrei na guilda: ${guild.name}`);
    guild.commands.set(SlashsArray);
  });
};

