module.exports.run = async (bot, message, args) => {
    const v = require("../../index.js")

    if (v.os.platform == "win32") {
        v.editmsg(message, "You had to use the nodemon plugin so i cant do that.", 2500)
        return;
    }
    if (v.os.platform == "linux") {
        v.editmsg(message, "Restarting selfbot...", 2500)
        v.bot.setTimeout(() => {
            v.exec('pm2 restart selfbot')
        }, 3000)
    }
    console.log("Process exit via botstop command...")
    }

module.exports.config = {
    command: "botrs",
    alias: "restart"
}