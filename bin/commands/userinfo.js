module.exports.run = async (bot, message, args) => {
    const v = require("../../index.js")
    
    if (message.channel.type == "dm") {
        message.channel.send(v.dmerror())
        return;
    }
    if (args[0] === undefined) {
        var infotype = undefined
    } else {
        var infotype = args[0].toLowerCase()
    }

    if (message.mentions.members.first() === undefined) {
        var usermentioninfo = message.author
        var usermentiontext = " "       
    } else {      
        var usermentioninfo = message.mentions.members.first().user
        var usermentiontext = "@" + message.mentions.members.first().user.username
    }

    var botinfocontent = "\n**Bot Uptime:** " + v.round(v.bot.uptime / 3600000, 2) + " hours" + "\n**Bot Heartbeat:** " + v.round(v.bot.ping, 2) + "ms"
    var userinfocontent = "\n**Nickname:** " + usermentioninfo.username + "\n**Tag:** #" + usermentioninfo.discriminator + "\n**User ID:** " + usermentioninfo.id + "\n**Created At:** " + message.member.user.createdAt + "\n**Avatar:** [Click here!](" + message.member.user.avatarURL + ")"
    var serverinfocontent = "\n**Name:** " + message.guild.name + "\n**Server ID:** " + message.guild.id + "\n**Server Owner:** " + message.guild.owner.user.username + "#" + message.guild.owner.user.discriminator + "\n**Created At:** " + message.guild.createdAt + "\n**User Count:** " + message.guild.memberCount + "\n**Channel Name:** #" + message.channel.name + "\n**Channel Count:** " + message.guild.channels.size + "\n**Channel ID:** " + message.channel.id + "\n**AFK Timeout:** " + message.guild.afkTimeout / "60" + " min\n**Server Icon:** get it with *servericon"

    if (infotype === "bot") {
        botinfo();
    } else if (infotype === "user") {
        userinfo();
    } else if (infotype === "server") {
        serverinfo()
    } else {
        fullinfo();
    }

    async function fullinfo() {
        message.edit({embed:{
            author: {
                name: usermentioninfo.username,
                icon_url: usermentioninfo.displayAvatarURL,
            },
            fields: [{
                name: "Bot Info:",
                value: botinfocontent, 
              },
              {
                name: "User:",
                value: userinfocontent,
              },
              {
                name: "Server:",
                value: serverinfocontent,
              }
            ],
            color: 0x32CD32
        }})
    }
    async function botinfo() {
        message.edit({embed:{
            author: {
                name: usermentioninfo.username,
                icon_url: usermentioninfo.displayAvatarURL,
            },
            fields: [{
                name: "Bot Info:",
                value: botinfocontent,
              }
            ],
            color: 0x6c15d6
        }})
    }
    async function userinfo() {
        message.edit({embed:{
            author: {
                name: usermentioninfo.username,
                icon_url: usermentioninfo.displayAvatarURL,
            },
            fields: [{
                name: "User:",
                value: userinfocontent,
              }
            ],
            color: 0x32CD32
        }})
    }
    async function serverinfo() {
        message.edit({embed:{
            author: {
                name: message.guild.name,
                icon_url: message.guild.iconURL,
                url: message.guild.iconURL
            },
            fields: [{
                name: "Server:",
                value: serverinfocontent,
              }
            ],
            color: 0x0b7bd6
        }})
    }
    }

module.exports.config = {
    command: "info",
    alias: "userinfo"
}