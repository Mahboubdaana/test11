const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("592959284590149632")
setInterval(function() {
channel.send(`BOBO BOBO BOBO BOBO BOBO`);
}, 30)
})

client.login(process.env.BOT_TOKEN);