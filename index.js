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
  plugins: [
    new SpotifyPlugin({
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

// "@discordjs/opus": "^0.8.0",
//     "@distube/soundcloud": "^1.3.0",
//     "@distube/spotify": "^1.5.1",
//     "@distube/yt-dlp": "^1.1.3",
//     "@distube/ytsr": "^2.0.0",
//     "discord.js": "^14.7.1",
//     "distube": "^4.0.4",
//     "ffmpeg-static": "^5.2.0",
//     "opusscript": "^0.0.8",
//     "spotify-get": "^1.1.10"