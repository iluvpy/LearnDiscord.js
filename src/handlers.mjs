import fs from "fs";
import path from "path";

// command handlers need to be an async function that has only one parameter; the message
const handleMonaLisa = async (dm) => {
    const monaLisaText = fs.readFileSync(path.resolve("./data/mona-lisa.txt"), "utf8");
    dm.channel.send(monaLisaText);
    dm.delete();
}

export { handleMonaLisa };
 