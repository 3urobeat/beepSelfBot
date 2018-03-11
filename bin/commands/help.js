module.exports.run = async (bot, message, args) => {
    const v = require("../../index.js")

    const help = v.fs.readFileSync(v.helppath, {"encoding": "utf-8"});
    const help2 = v.fs.readFileSync(v.helppath2, {"encoding": "utf-8"});
    const help3 = v.fs.readFileSync(v.helppath3, {"encoding": "utf-8"});
    message.edit({embed: {
        title: "Command list: ",
        description: help + "\n\n" + help2 + "\n" + help3,
        color: v.randomhex()
    }})
    }

module.exports.config = {
    command: "help",
    alias: "h"
}