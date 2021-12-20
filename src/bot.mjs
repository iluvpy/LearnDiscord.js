import { Client, Intents } from "discord.js";
 
const TOKEN = process.env.DISCORD_BOT_TOKEN; // create your own env variable
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (message.content === "hello" || message.content === "hi") {
        message.reply("oh, hi");
    }

});

client.login(TOKEN);