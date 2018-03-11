module.exports.run = async (bot, message, args) => {
    const v = require("../../index.js")

    message.edit("Test successfull!")
    message.react("✅")

    }

module.exports.config = {
    command: "test"
}
