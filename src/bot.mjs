import { Client, Intents } from "discord.js";
import { HandleDM, HandleMonaLisa } from "./handlers.mjs";
const TOKEN = process.env.DISCORD_BOT_TOKEN; // create your own env variable
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES]});
const PREFIX = "!";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    console.log(`[${message.author.tag}]: ${message.content}`);
    var content = message.content;
    if (content.startsWith(PREFIX)) {
        content = content.substring(1);
        if (content === "monalisa") {
            HandleMonaLisa(message);
        }
    }

});

client.login(TOKEN);