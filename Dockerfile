FROM node:12.20.1-alpine3.10

WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY src src

ENV BOT_TOKEN='bot-token'
RUN npm ci

CMD [ "npm", "start" ]