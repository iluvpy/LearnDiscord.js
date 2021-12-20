import { handleMonaLisa } from "./handlers.mjs";

// DO NOT CHANGE THIS OR MUTATE THIS IN ANY WAY
var COMMANDS = {};

const addCommand = (name, callBack) => {
    COMMANDS[name] = callBack;
}

const initCommands = () => {
    addCommand("monalisa", handleMonaLisa);
}

export {initCommands, COMMANDS};