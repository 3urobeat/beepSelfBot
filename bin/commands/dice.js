module.exports.run = async (bot, message, args) => {
    const v = require("../../index.js")

    var messagecount = parseInt(args[0]);
    var randomnumber = Math.floor((Math.random() * messagecount) + 1);

    if (args[0] === undefined) { v.editmsg(message, "You have to give the endless dice a valid maximum! `2-∞`", 2500); return; }
    if (isNaN(messagecount) === true) { v.editmsg(message, "It's something but not a clear number. `2-∞`", 2500); return; }
    if (messagecount < 2) { v.editmsg(message, "You have to give the endless dice a valid minimum! `2-∞`", 2500); return; }

    message.edit(v.randomstring(['Rolling... Stop! Its a','The dice stopped rolling:','Your Number:','...and its a','Dont become addicted!','Its like lottery! Did you won?']) + " **" + randomnumber + "**")
    return;

    }

module.exports.config = {
    command: "dice",
    alias: "roll"
}