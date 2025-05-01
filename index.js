const { DisTube } = require('distube')
const Discord = require('discord.js')
const { TOKEN, spyId, spySecret} = require('./config/config.json')
const client = new Discord.Client({
  intents: [ 53608445 ]
});
const { SpotifyPlugin } = require('@distube/spotify')
const { SoundCloudPlugin } = require('@distube/soundcloud')
const { YouTubePlugin } = require('@distube/youtube')

client.slashCommands = new Discord.Collection()

require('./handler')(client)

client.distube = new DisTube(client, {
  plugins: [
    new SpotifyPlugin({
      api: {
        clientId: spyId,
        clientSecret: spySecret,
        topTracksCountry: "VN",
      },
    }),
    new SoundCloudPlugin(),
    new YouTubePlugin()
  ]
})

// Import files
const ready = require("./events/ready.js");
const message = require('./events/interation.js');
const player = require('./events/player.js');
const deploy = require('./events/deploy-commands.js')

// Init Bot
ready.run(client);

// Commands 
message.run(client);
deploy.run(client);

// Music
player.run(client);

// Initialize
client.login(TOKEN);

client.on('messageCreate', async (message) => {
  if (message.content.startsWith('!tag')) {
      const args = message.content.split(' ');
      
      // Verifica se o comando tem argumentos suficientes
      if (args.length < 3) {
          return message.reply('Uso correto: `!tag @usuário NomeDoCargo`');
      }

      // Identifica o usuário e o nome do cargo
      const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
      const roleName = args.slice(2).join(' '); // Nome do cargo após o @usuário

      if (!user) {
          return message.reply('Por favor, mencione um usuário válido ou forneça o ID.');
      }

      const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === roleName.toLowerCase());
      if (!role) {
          return message.reply(`Cargo "${roleName}" não encontrado!`);
      }

      try {
          await user.roles.add(role);
          message.reply(`Cargo "${role.name}" adicionado a ${user.user.tag} com sucesso!`);
      } catch (error) {
          console.error(error);
          message.reply('Ocorreu um erro ao tentar adicionar o cargo.');
      }
  }
});
