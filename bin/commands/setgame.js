module.exports.run = async (bot, message, args) => {
    const v = require("../../index.js")

    if (args[0] == undefined) { 
        var game = null; 
        var gametype = 0;
    } else {
        var game = args.slice(1).join(" ")
        var gametype = args[0].toUpperCase()
        if (gametype != "PLAYING" | "STREAMING" | "LISTENING" | "WATCHING") {
            v.editmsg(message, "Wrong argument. Use `playing|streaming|listening|watching`", 2500)
            return;
        }
    }

    v.bot.user.setPresence({ game: { name: game, type: gametype, url: "https://www.twitch.tv/discordapp" } });
    await v.editmsg(message, "Your game has been set to: " + gametype + " " + game, 2500)
    await message.react(v.successemoji)

    }

module.exports.config = {
    command: "setgame"
}