const discord = require('discord.js');
const { EmbedBuilder } = require("discord.js");
const config = require('../config/config.json');

module.exports = {
  name: 'help',
  description: 'Comandos disponiveis!',
  type: discord.ApplicationCommandType.ChatInput,
  options: [
    {
      type: 4,
      name: 'página',
      description: 'Pesquise por ajuda.',
      required: true, 
      choices: [{
        name: '1',
        value: '1'
      },{
        name: '2',
        value: '2'
      }]
    }
  ],
  run: async (client, interaction) => {
    
    const args = interaction.options.getInteger('página');

    if(args === 1 || args === undefined){
      let embed = new EmbedBuilder()
        .setColor('#eb1616')
        .setTitle('Help')
        .setDescription('Comandos!')
        .setThumbnail('https://www.imagensanimadas.com/data/media/712/numero-imagem-animada-0195.gif')
        .addFields(
          { name: `${config.prefix}play [musica]`,inline: true, value: 'Toque uma musica!', inline: false },
          { name: `${config.prefix}pause`,inline: true, value: 'Pausa reprodução de uma musica!',inline: false },
          { name: `${config.prefix}resume`,inline: true, value: 'Retorna reprodução de uma musica!',inline: false  },
          { name: `${config.prefix}volume [0-100]`,inline: true, value: 'Seta volume do da musica tocando!',inline: false  },
          { name: `${config.prefix}playlist [link]`,inline: true, value: 'Toca uma playlist!',inline: false  },
          { name: `${config.prefix}skip`,inline: true, value: 'Pula para proxima musica!',inline: false  },
          { name: `${config.prefix}stop`,inline: true, value: 'Para a reprodução de musica!',inline: false  },
          { name: `${config.prefix}loop`,inline: true, value: 'Repete a musica que esta tocando!',inline: false  },
          { name: `${config.prefix}stoploop`,inline: true, value: 'Para a repetição da musica!',inline: false },
        )
        .setTimestamp()
        .setFooter({ text: 'Espero ter ajudado!', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

        return interaction.channel.send({ embeds: [embed] });
    }else if(args === 2){
      let embed = new EmbedBuilder()
        .setColor('#eb1616')
        .setTitle('Help')
        .setDescription('Comandos!')
        .setThumbnail('https://www.imagensanimadas.com/data/media/712/numero-imagem-animada-0196.gif')
        .addFields(
          { name: `${config.prefix}help [1-2]`,inline: true, value: 'Veja lista de comandos!', inline: false },
          { name: `${config.prefix}ping`,inline: true, value: 'Verifique sua latencia!',inline: false  },
          { name: `${config.prefix}twitch [Nome do Canal]`,inline: true, value: 'Pesquise por um canal na twitch!',inline: false  },
          { name: `${config.prefix}prefix [novo prefix da Guilda]`,inline: true, value: 'Comando apenas para administradores!',inline: false  },
          { name: `${config.prefix}bug [Relate um bug]`,inline: true, value: 'Comando apenas para administradores!',inline: false  },
        )
        .setTimestamp()
        .setFooter({ text: 'Espero ter ajudado!', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

        return interaction.channel.send({ embeds: [embed] });
    }
    return interaction.reply(`Use ${config.prefix}help [1-2]`);
  }
}