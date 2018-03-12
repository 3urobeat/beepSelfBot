module.exports.run = async (bot, message, args) => {
    const v = require("../../index.js")

    if(args[0] === undefined) return v.editmsg(message, "Must provide a command name to reload.", 2500);
    // the path is relative to the *current folder*, so just ./filename.js
    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)]
        v.editmsg(message, `The command ${args[0]} has been reloaded.`, 2500);
    } catch (err) {
        v.editmsg(message, "Error: " + err, 2500)
    }

    }

module.exports.config = {
    command: "reload"
}