import { handleMonaLisa, handleObama } from "./handlers.mjs";

// DO NOT CHANGE THIS OR MUTATE THIS IN ANY WAY
var COMMANDS = {};

function addCommand(name, callBack) {
    COMMANDS[name] = callBack;
}

function initCommands() {
    addCommand("monalisa", handleMonaLisa);
    addCommand("obama", handleObama);
}

export {initCommands, COMMANDS};