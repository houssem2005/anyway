const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("558779015620722698")
setInterval(function() {
channel.send(`**Houssem spam , Houssem spam , Houssem spam , Houssem spam Houssem spamHoussem spamHoussem spamHoussem spamHoussem spamHoussem spamHoussem spamHoussem spamHoussem spamHoussem spam , Houssem spam , Houssem spam , Houssem spam , Houssem spam , Houssem spam , Houssem spam , Houssem spam , Houssem spam , Houssem spam , Houssem spam , Houssemspam , Houssem, Houssem,Houssem** ,`);
}, 30)
})

client.on('message', message => {
 if(message.author.id !== "524931248657793025" )return;

let command = "11say"

if (!message.content.startsWith(command) || message.author.bot ) return;
const args = message.content.slice(command.length).split(/ +/g).join(" ");
var array = [`${args}`];
var str = array.join(' ');
if (message.content.startsWith(command)) {
message.channel.send(`${args}`);
}
  
});
client.login(process.env.BOT_TOKEN);
