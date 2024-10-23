FROM node:19.7

RUN apt update
RUN apt install -y ffmpeg

WORKDIR /app

COPY . .

RUN npm i

CMD ["node", "."]