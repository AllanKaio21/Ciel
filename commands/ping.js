const discord = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Verifique sua latência!',
  type: discord.ApplicationCommandType.ChatInput,
  run: async (client, interaction, args) => {
    const m = await interaction.channel.send('ping?');
  
    m.edit(`🏓 **| Pong!**\nLatência do Server: **${m.createdTimestamp -
        interaction.createdTimestamp}ms.**\nLatência da API: **${Math.round(
        client.ws.ping
      )}ms**`
    );
  }
}