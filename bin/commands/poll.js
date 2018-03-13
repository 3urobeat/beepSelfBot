module.exports.run = async (bot, message, args) => {
    const v = require("../../index.js")

    if (message.channel.type == "dm") {
        v.editmsg(message, v.dmerror(), 2500)
        return;
    } else {
        if (args[0] === undefined) {
            await message.edit("Poll")
        } else {
            await message.edit(args.slice(0).join(" "))
        }
        await message.react("👍").catch(err => {
            v.editmsg(message, "Error: " + err, 2500)
            return;
        })
        await message.react("👎").catch(err => {
            v.editmsg(message, "Error: " + err, 2500)
            return;
        })
        await message.react("🤷").catch(err => {
            v.editmsg(message, "Error: " + err, 2500)
            return;
        })
    } 

    }

module.exports.config = {
    command: "poll"
}