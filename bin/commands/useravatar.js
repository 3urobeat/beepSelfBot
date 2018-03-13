module.exports.run = async (bot, message, args) => {
    const v = require("../../index.js")

    if (message.mentions.users.first() === undefined) {
        var avatarmention = message.author
        avatar();
    } else {
        var avatarmention = message.mentions.users.first()
        if (message.channel.type == "dm") {
            v.editmsg(message, v.dmerror(), 2500)
            return; }
        avatar();
    }

    function avatar() {
        message.edit({embed:{
            author:{
                name: avatarmention.username,
                icon_url: avatarmention.displayAvatarURL,
                url: avatarmention.displayAvatarURL
            },
            description: avatarmention.displayAvatarURL,
            image: {
                url: avatarmention.displayAvatarURL
            },
            color: v.randomhex()
        }})
    }

    }

module.exports.config = {
    command: "avatar",
    alias: "useravatar"
}