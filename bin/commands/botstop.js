module.exports.run = async (bot, message, args) => {
    const v = require("../../index.js")
    const collector = new v.Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {time: 10000});

    if (v.os.platform === "win32") {
        v.editmsg(message, "When i'm running on Windows i can't stop your programm because you had to use some sort of plugin and not the good old pm2. Your fault. :expressionless: ", 2500)
        return;
    }
    var m = await message.edit("Are you sure? `y/n`")
    collector.on('collect', message => {
        message.delete()
        if (message.content == "y") {
            v.editmsg(m, "Stopping bot...", 2500)
            v.bot.setTimeout(() => {
                console.log("Process exit via botstop command...")
                v.exec('pm2 stop selfbot')
            }, 3000)
            return;
        } else if (message.content == "n") {
            v.editmsg(m, "Abort!", 2500)
            return;
        }
    });

    }

module.exports.config = {
    command: "botstop"
}