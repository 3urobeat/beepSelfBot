module.exports.run = async (bot, message, args) => {
    const v = require("../../index.js")
    
    if (message.channel.type == "dm") {
        v.editmsg(message, v.dmerror(), 2500)
        return; }
    if (message.guild.iconURL === null) {
        v.editmsg(message, message.author + " This server does not have an custom icon. :neutral_face:", 2500)
        return; }
    message.edit(message.guild.iconURL);

}

module.exports.config = {
    command: "servericon",
    alias: "serveravatar"
}