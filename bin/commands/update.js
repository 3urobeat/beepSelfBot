module.exports.run = async (bot, message, args) => {
    const v = require("../../index.js")

    if (v.os.platform == "linux") {
        console.log("Manual updater started. Updating downloader.js...")
        message.edit("Manual updater started. Updating downloader.js...")
        v.exec('rm -rf /home/pi/Desktop/beepSelfBot/downloader.js')
        v.exec('svn export https://github.com/HerrEurobeat/beepSelfBot/trunk/downloader.js /home/pi/Desktop/beepBot/downloader.js')
        v.bot.setTimeout(() => {
            message.edit("Starting downloader.js...")
            v.exec('node /home/pi/Desktop/beepSelfBot/downloader.js')
        }, 2500)
    } else {
        v.editmsg(message, "The bot is not running on Linux!", 2500)
        return;
    }

    }

module.exports.config = {
    command: "update"
}
