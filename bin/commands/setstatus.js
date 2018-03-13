module.exports.run = async (bot, message, args) => {
    const v = require("../../index.js")
    const fs = v.fs

    if (args[0] === undefined) {
        v.editmsg(message, "Missing argument. Use `online|idle|dnd|invisible`.", 2500)
        return;
    }

    var status = args[0].toLowerCase()

    if (!status == "online" | "idle" | "dnd" | "invisible" | "off") {
        v.editmsg(message, "Error", 2500)
        return;
    }

    if (status === "off") var status = "invisible";

    v.bot.user.setStatus(status).catch(err => {
        v.editmsg(message, "Error: " + err, 2500)
        return;
    })

    v.config = {
        version: v.config.version,
        loginmode: v.config.loginmode,
        status: status
    }

    fs.writeFile("./bin/config.json", JSON.stringify(v.config, null, 4), err => {
        if(err) v.editmsg(message, "Error: " + err, 2500); return;
    });
    console.log("Status was changed to: " + status)
    await v.editmsg(message, "Status set to " + status, 2500)
    await message.react(v.successemoji)

    }

module.exports.config = {
    command: "status"
}