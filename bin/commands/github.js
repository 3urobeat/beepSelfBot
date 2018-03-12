module.exports.run = async (bot, message, args) => {
    const v = require("../../index.js")

    message.edit(args.slice(0).join(" ") + " https://github.com/HerrEurobeat")

    }

module.exports.config = {
    command: "github"
}