const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js");
const fs = require('fs');
const cooldown = require('./cooldown.js');
const timer = 5000;

module.exports.run = async (client) => {
  client.on('interactionCreate', (interaction) => {
    if(interaction.type === Discord.InteractionType.ApplicationCommand){
  
      const cmd = client.slashCommands.get(interaction.commandName);

      if (!cmd) return interaction.reply(`Error`);

      interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);
      /*Verifica cooldown*/
      if(!cooldown.is(interaction.guild.id)){
        cooldown.add(interaction.guild.id);
        setTimeout(() => {
          cooldown.remove(interaction.guild.id);
        },timer);
        let timeR = timer/1000;
        const intervalo = setInterval(()=>{
          timeR--;
          if(!timeR>0){
            clearInterval(intervalo);
          }
          cooldown.setTime(timeR, interaction.guild.id);
        },1000);   
      }else{
        let tm = cooldown.getTime(interaction.guild.id);
        if(tm === undefined){
          tm = timer/1000;
        }
        return interaction.reply(`Espere **${tm}s** para usar outro comando!`);
      }
      cmd.run(client, interaction)
    }
  })
};