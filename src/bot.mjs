import { Client, Intents } from "discord.js";
import { COMMANDS, initCommands } from "./commands.mjs";
import { handleMonaLisa } from "./handlers.mjs";
const TOKEN = process.env.DISCORD_BOT_TOKEN; // create your own env variable
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING
    ],
    partials: [
        'CHANNEL', // Required to receive DMs
    ]
});

const PREFIX = "!";

initCommands();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    if (message.channel.type === "DM") onDirectMessage(message);
    else console.log(`[${message.author.tag}]: ${message.content}`);
    var content = message.content;
    if (content.startsWith(PREFIX)) onCommand(message);
});

function onCommand(message) {
    const command = message.content.substring(1);
    if (command in COMMANDS) {
        COMMANDS[command](message);
    }
}

function onDirectMessage(message) {
    console.log(`[DirectMessage][${message.author.tag}]: ${message.content}`);
}


client.login(TOKEN);