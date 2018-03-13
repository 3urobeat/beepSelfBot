module.exports.run = async (bot, message, args) => {
    const v = require("../../index.js")

    await message.edit("download test")

    if (message.member.permissions.has("SEND_MESSAGES")) {
        console.log("True")
    } else {
        console.log("False")
    }

    }

module.exports.config = {
    command: "test"
}
