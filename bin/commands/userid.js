module.exports.run = async (bot, message, args) => {
    const v = require("../../index.js")

    if (args[0] === undefined) {
        var usermentionid = message.author

        message.edit("Your :id: is: " + usermentionid.id)
    } else {
        if (message.channel.type == "dm") {
            v.editmsg(message, v.dmerror(), 2500)
            return;
        }         
        var usermentionid = message.mentions.members.first().user

        message.edit("The :id: of the user " + usermentionid.username + "#" + usermentionid.discriminator + " is: " + usermentionid.id)       
    }

    }

module.exports.config = {
    command: "id",
    alias: "userid"
}