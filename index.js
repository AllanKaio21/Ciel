const { DisTube } = require('distube')
const Discord = require('discord.js')
const { TOKEN, spyId, spySecret} = require('./config/config.json')
const client = new Discord.Client({
  intents: [ 65217 ]
});
const { SpotifyPlugin } = require('@distube/spotify')
const { SoundCloudPlugin } = require('@distube/soundcloud')
const { YtDlpPlugin } = require('@distube/yt-dlp')

client.slashCommands = new Discord.Collection()

require('./handler')(client)

client.distube = new DisTube(client, {
  leaveOnStop: false,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
  plugins: [
    new SpotifyPlugin({
      parallel: true,
      emitEventsAfterFetching: false,
      api: {
        clientId: spyId,
        clientSecret: spySecret,
        topTracksCountry: "VN",
      },
    }),
    new SoundCloudPlugin(),
    new YtDlpPlugin()
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