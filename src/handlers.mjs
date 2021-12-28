import { MessageAttachment } from "discord.js";
import fs from "fs";
import path from "path";

// command handlers need to be an async function that has only one parameter; the message
async function handleMonaLisa(dm) {
    const monaLisaText = fs.readFileSync(path.resolve("./data/mona-lisa.txt"), "utf8");
    dm.channel.send(monaLisaText);
    dm.delete();
}

async function handleObama(message) {
    const embed = {
        title: 'Obama Aproved',
        image: {
            url: 'https://i.imgur.com/gJuFL8q.jpg',
        },
    };
    
    message.channel.send({embeds: [embed]});
}

export { handleMonaLisa, handleObama };
 