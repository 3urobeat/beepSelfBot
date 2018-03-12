module.exports.run = async (bot, message, args) => {
    const v = require("../../index.js")
    
/*     if (message.channel.type == "dm") {
        v.editmsg(message, v.dmerror(), 2500)
        return;
    }

    var options = {
        maxAge: false
    }

    if (message.member.permissions.has("CREATE_INSTANT_INVITE", "ADMINISTRATOR")) {
        message.channel.createInvite(options).then(function(newInvite){
            message.edit("Join this channel: https://discord.gg/" + newInvite.code)
        }).catch(err => {
            v.editmsg(message, "Error: " + err, 2500)
        })
    } else {
        v.editmsg(message, v.usermissperm(), 2500)
    } */

    }

module.exports.config = {
    command: "invite"
}