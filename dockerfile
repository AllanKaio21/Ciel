FROM node:19.7

WORKDIR /app

COPY . .

RUN npm i

CMD ["node", "."]