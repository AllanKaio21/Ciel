const { DisTube } = require('distube')
const Discord = require('discord.js')
const client = new Discord.Client({
  intents: [65167]
})
const { SpotifyPlugin } = require('@distube/spotify')
const { SoundCloudPlugin } = require('@distube/soundcloud')
const { YtDlpPlugin } = require('@distube/yt-dlp')

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
        clientId: "324c10912b974d7dbb2fbe679c943067",
        clientSecret: "48743e1cf926403f8484bd6855203c5f",
        topTracksCountry: "VN",
      },
    }),
    new SoundCloudPlugin(),
    new YtDlpPlugin()
  ]
})

// Import files
const ready = require("./events/ready.js");
const message = require('./events/message.js');
const direct = require('./events/direct.js')
const player = require('./events/player.js');

// Init Bot
ready.run(client);

// Commands 
message.run(client);
direct.run(client);

// Music
player.run(client);

// Initialize
client.login("TOKEN");
