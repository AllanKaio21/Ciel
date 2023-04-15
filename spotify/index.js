const Spotify = require('spotify-get');
const config = require('../config/config.json')
const client = new Spotify({
    consumer: {
        key: config.spyId,
        secret: config.spySecret
    }
});

module.exports = {
    async search(query, type) {
        let params = {
            q: query,
            type: type,
            limit: 1
        }
        const data = await client.search(params);

        return type=='album'?data?.albums.items[0].external_urls.spotify:data?.tracks.items[0].album.external_urls.spotify;
    }
}