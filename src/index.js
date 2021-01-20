
const Discord = require("discord.js");
const api = require("./coingeckoAPI.js");
const client = new Discord.Client();

const prefix = "!";

client.on("message", async function(message) {
    if (message.author.bot) return;

    if (!message.content.startsWith(prefix)) return;

    console.log(`Command received: ${message.content} by ${message.content.author.username}`);

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ') || [];
    const command = args.shift().toLowerCase();

    if (command === "price") {
            const coinTicker = args[0];
            if (!coinTicker) {
                message.reply('You must specify a coin ticker after the "price" command. Eg: !price stx');
            } else {
                const response = await api.getCoinPrice(coinTicker);

                if (!response) {
                    message.reply('Price not found or an error has occurred');
                } else {
                    message.reply(`SINCOOO OCHEINTAAAIIIII SINCOOO`);

                    setTimeout(() => {
                        message.reply(`${ticker.toUpperCase()}/USD latest price is ${price}`);
                    }, 2000);
                }
            }
    }
});

client.login(process.env.BOT_TOKEN).then(() => {
    console.log('Running Titanusbot');
});