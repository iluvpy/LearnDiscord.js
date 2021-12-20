import fs from "fs";
import path from "path";
const HandleDM = async (dm) => {
    dm.reply("i cant handle dms yet \\:(, i'm useless");
}




const HandleMonaLisa = async (dm) => {
    console.log("mona lisa command bla bla... dir: " + path.resolve("."));
    const monaLisaText = fs.readFileSync(path.resolve("./data/mona-lisa.txt"), "utf8");
    dm.channel.send(monaLisaText);
    dm.delete();
}

export {HandleDM, HandleMonaLisa};
 