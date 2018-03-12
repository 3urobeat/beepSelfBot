module.exports.run = async (bot, message, args) => {
    const v = require("../../index.js")

    var cont = message.content.slice(v.PREFIX.length).split(" ");

    if (v.bot.commands.get(cont[0].toLowerCase())) {
        var pingpong = "Pong"
    } else {
        var pingpong = "Ping"
    }
    
    await message.edit({embed:{
            author:{
                name: v.bot.user.username,
                icon_url: v.bot.user.avatarURL
            },
            title: pingpong + "?",
            color: 0xFFA500
        }});

    var botheartbeat = v.round(v.bot.ping, 2)
    var botpingpong = v.round(v.d() - message.createdTimestamp, 2)

    message.edit(({embed:{
                author:{
                    name: v.bot.user.username,
                    icon_url: v.bot.user.avatarURL
                },
                title: pingpong + "!",
                description:":heartbeat: " + botheartbeat + "ms\n:ping_pong: " + botpingpong + "ms",
                color: 0x32CD32
            }}));
            
    }

module.exports.config = {
    command: "ping",
    alias: "pong"
}