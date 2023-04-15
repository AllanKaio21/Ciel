# Ciel
Bot de musica Ciel, desenvolvido em discord.js.

## Diretorios/Arquivos ##

# ./

- Arquivos para inicialização do bot.
+ index.js
+ dockerfile.js
+ package.json

# Commands

- Comandos gerais do bot.
+ play.js
+ skip.js
+ pause.js
+ stop.js
+ stoploop.js
+ invite.js
+ help.js
+ resume.js
+ say.js
+ ping.js
+ bug.js
+ volume.js

# Config

- Configurações de prefixo, tokens do bot discord, api do Spotify e bugs relatados.
+ guild
    + bugs.json
+ config.json

# Events

- Controle de todos os eventos como inicialização, interação do usuario, player de musica e deploy de comandos para guildas.
+ cooldown.js
+ deploy-commands.js
+ interaction.js
+ player.js
+ ready.js

# Handler

- Inicialiar comandos das guildas com o bot e quando entrar em novas guildas.
+ index.js

# Spotify

- Acessa o spotify para pegar link de uma faixa de música ou album.
+ index.js
