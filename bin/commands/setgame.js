module.exports.run = async (bot, message, args) => {
    const v = require("../../index.js")

    if (args[0] == undefined) { 
        var game = null; 
        var gametype = 0;
    } else {
        var game = args.slice(1).join(" ")
        var gametype = args[0].toUpperCase()
    }

    v.bot.user.setPresence({ game: { name: game, type: gametype, url: "https://www.twitch.tv/discordapp" } });;
    message.delete().catch(err => {
        console.log("Error: " + err)
    });

    }

module.exports.config = {
    command: "setgame"
}