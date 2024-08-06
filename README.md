# Ciel
Bot de musica Ciel, desenvolvido em Node js.
+ Bibliotecas usadas: `discord.js, distube, spotify-get.`

# Inicializar com imagem dockerhub
+ Acesse o link abaixo e siga os passos para executar o bot de forma simples com a imagem pronta.
```
https://hub.docker.com/r/allankaio276/ciel
```

# Inicializar com dockerfile
+ Adicione seus tokens em: ``config/config.json``
+ Execute os comando no diretorio: ``Ciel``
  
+ Crie a imagem docker do bot
```
docker build . -t ciel
```
+ Coloque a imagem para executar
```
docker run ciel
```

# Diretorios/Arquivos

# ./

- Arquivos para inicialização do bot.
+ index.js
+ dockerfile.js
+ package.json

# Commands

Comandos gerais do bot.
```
/play
```
```
/skip
```
```
/pause
```
```
/stop
```
```
/stoploop
```
```
/invite
```
```
/help
```
```
/resume
```
```
/say
```
```
/ping
```
```
/bug
```
```
/volume
```

# Config

- Configurações de prefixo, tokens do bot discord, api do Spotify e bugs relatados.
+ guild
    + bugs.json
+ config.json

# Events

Controle de todos os eventos como inicialização, interação do usuario, player de musica e deploy de comandos para guildas.

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
