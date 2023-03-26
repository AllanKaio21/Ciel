const { REST, Routes } = require('discord.js');
const { clientId, TOKEN } = require('../config/config.json');
const fs = require('node:fs');
const path = require('node:path');
const guildId = "690916695014899734";
const commands = [];
// Grab all the command files from the commands directory you created earlier
const commandsPath = path.join(__dirname, '../commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

module.exports.run = (client) => {

	// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
	for (const file of commandFiles) {
		const command = require(`../commands/${file}`);
		commands.push(JSON.stringify(command.data));
	}

	// Construct and prepare an instance of the REST module
	const rest = new REST({ version: '10' }).setToken(TOKEN);

	// and deploy your commands!
	(async () => {
		try {
			console.log(`Started refreshing ${commands.length} application (/) commands.`);

			// The put method is used to fully refresh all commands in the guild with the current set
			const data = await rest.put(
				Routes.applicationGuildCommands(clientId, guildId),
				{ body: commands },
			);

			console.log(`Successfully reloaded ${data.length} application (/) commands.`);
		} catch (error) {
			// And of course, make sure you catch and log any errors!
			// console.error(error);
		}
	})();
	return;
}