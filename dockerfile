FROM node:22.15.0

RUN apt update
RUN apt install -y ffmpeg

WORKDIR /app

COPY . .

RUN npm i

CMD ["node", "."]