module.exports.run = async (bot, message, args) => {
    const v = require("../../index.js")

    await message.edit("Test: " + message.member.user.username)

    if (message.member.permissions.has("SEND_MESSAGES")) {
        console.log("True")
    } else {
        console.log("False")
    }

    }

module.exports.config = {
    command: "test"
}
