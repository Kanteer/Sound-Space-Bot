const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
let messageID = "0";

client.on("ready", () => {
    client.user.setPresence({game:{name: "with code"}});
     console.log("loaded")
});

client.on("message", async message => {
    if(`${message.channel.id}` === "641420152168120320" || `${message.channel.id}` === "703050951648346184" )
if(message.content.startsWith("https://raw.github") || message.content.startsWith("https://github")) {
    message.react('703046302824398939') 
    message.react('703045879959126146') 
} else {
    try { if(`${message.author.id}` === `${client.user.id}`) {return;} else { await message.delete(); } } catch(e) {return;}
    return;
}
}
);


client.on('messageReactionAdd', async (reaction, user) => {
    let limit = 6; // number of thumbsdown reactions you need
    if (reaction.count == limit) {
        if(`${reaction.message.id}` !== `${messageID}`) {
        
        //send a message to a different channel here

        messageID = `${reaction.message.id}`;
        return;
        }
    }
  });

try {
    process.on('unhandledRejection', async (err) => await console.log(`error code\n${err.stack}\n also heres a smiley thing: "o_O"\nprobably will fix error next week :^)`));
} catch (e) {
    console.log(e);
 };
  
  
client.login(config.token)
