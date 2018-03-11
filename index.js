console.log(" ")
var bootstart = v.d()
console.log("Loading...")

const configpath = "./bin/config.json";

const Discord = require("discord.js");
const superagent = require("superagent");
const config = require(configpath);
var fs = require("fs");

const tokenpath = require("../token.json")
const PREFIX = "/";

const LOGINFO = "[INFO] ";
const LOGWARN = "[WARN] ";

var bot = new Discord.Client();
var servers = {};

function botstartupmode() {
    try {
        if (config.loginmode === "normal") {
            var TOKEN = tokenpath.token;
            v.bot.login(TOKEN)
        } else if (config.loginmode === "test") {
            var TOKEN = tokenpath.testtoken;
            v.bot.login(TOKEN)
        } else {
            console.log(v.LOGWARN + "Error logging in.")
            return;
        }
    } catch(err) {
        console.log(v.LOGWARN + "Error logging in: " + err)
    }
}

bot.on("ready", async function() {
    console.log(" ")
    console.log("*---------------------*")
    console.log("Started beepSelfBot for " + bot.user.name + ".")
    if (v.os.platform == "linux") console.log("I'm running on Linux...") 
    if (v.os.platform == "win32") console.log("I'm running on Windows...")
    console.log("Time: " + v.d())
    var bootend = v.d() - bootstart
    console.info("The Bot is ready after %dms!", bootend);
    console.log("*---------------------*")
    console.log(" ")
});

bot.on("message", async function(message) {
    if(message.author !== bot.user) return;
    if (!message.content.startsWith(PREFIX)) return;
    var args = message.content.substring(PREFIX.length).split(/\s+/);
    switch(args[0].toLowerCase()) {
        case "setgame":
            message.delete() 
            bot.setPresence({game: {name: args[0]}})
            break;
        case "test":
            message.edit("Test successfull!")
            break;
    }
});

botstartupmode();