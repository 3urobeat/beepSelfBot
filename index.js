console.log(" ")
var d = function d() { return new Date(); }
var bootstart = d()
console.log("Loading...")

const configpath = "./bin/config.json";

const Discord = require("discord.js");
const superagent = require("superagent");
const config = require(configpath);
const os = require("os");
var exec = require('child_process').exec, child;
var fs = require("fs");

const helppath = "./bin/help/help.txt";
const helppath2 = "./bin/help/help2.txt";
const helppath3 = "./bin/help/help3.txt";

var bot = new Discord.Client();

bot.commands = new Discord.Collection();
bot.alias = new Discord.Collection();
bot.alias2 = new Discord.Collection();

const tokenpath = require("../token.json")
const PREFIX = "/";

var randomstring = arr => arr[Math.floor(Math.random() * arr.length)];
var randomhex = function randomhex() { return Math.floor(Math.random() * 16777214) + 1 }
var round = function round(value, decimals) { return Number(Math.round(value+'e'+decimals)+'e-'+decimals); }
var editmsg = function error(message, sendmsg, delay) { message.edit(sendmsg); bot.setTimeout(() => { message.delete() }, delay) }

const LOGINFO = "[INFO] ";
const LOGWARN = "[WARN] ";
const successemoji = "✅"

function botstartupmode() {
    try {
        if (config.loginmode === "normal") {
            var TOKEN = tokenpath.selfbottoken;
            bot.login(TOKEN)
        } else if (config.loginmode === "test") {
            var TOKEN = tokenpath.selfbottesttoken;
            bot.login(TOKEN)
        } else {
            console.log(LOGWARN + "Error logging in.")
            return;
        }
    } catch(err) {
        console.log(LOGWARN + "Error logging in: " + err)
    }
}

bot.on("ready", async function() {
    console.log(" ")
    console.log("*---------------------*")
    console.log("Started beepSelfBot for " + bot.user.tag + " (" + config.status + ").")
    bot.user.setStatus(config.status).catch(err => {
        console.log("Error setting status from config. " + err)
    })

    if (os.platform == "linux") console.log("I'm running on Linux...") 
    if (os.platform == "win32") console.log("I'm running on Windows...")
    console.log("Time: " + d())

    fs.readdir('./bin/commands/', (err, files) => {
        if (err) console.error(err);
        
        var jsfiles = files.filter(f => f.split('.').pop() === 'js');
        if (jsfiles.length <= 0) { return console.log("No commands found...")}
        else { console.log("-> " + jsfiles.length + " commands found.") }
        
        jsfiles.forEach((f, i) => {
            var cmds = require(`./bin/commands/${f}`);
            bot.commands.set(cmds.config.command, cmds);
            bot.alias.set(cmds.config.alias, cmds)
            bot.alias2.set(cmds.config.alias2, cmds)
        })

        var bootend = d() - bootstart
        console.info("The Bot is ready after %dms!", bootend);
        console.log("*---------------------*")
        console.log(" ")
    });
});

bot.on("message", async function(message) {
    if(message.author !== bot.user) return;
    if (!message.content.startsWith(PREFIX)) return;
    var cont = message.content.slice(PREFIX.length).split(" ");
    var args = cont.slice(1);
    
    var cmd = bot.commands.get(cont[0].toLowerCase())
    var alias = bot.alias.get(cont[0].toLowerCase())
    var alias2 = bot.alias2.get(cont[0].toLowerCase())

    if (cmd) { 
        cmd.run(bot, message, args); 
        return;
    } else if (alias) {
        alias.run(bot, message, args);
        return;
    } else if (alias2) {
        alias2.run(bot, message, args);
        return;
    } else {
        if(message.content.includes(PREFIX + "*")) return;            
        if(message.content.endsWith(PREFIX)) return;
        return;
    }
    //The command reader in the 'ready' event imports the commands.

});

module.exports = {
    d,
    Discord,
    bot,
    helppath,
    helppath2,
    helppath3,
    PREFIX,
    config,
    os,
    exec,
    fs,
    randomstring,
    randomhex,
    round,
    editmsg,
    successemoji
}

botstartupmode();