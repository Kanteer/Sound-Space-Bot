const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
let messageID = "0";

client.on("ready", () => {
    client.user.setPresence({game:{name: "with code"}});
     console.log("loaded")
});

client.on("message", async message => {
if(`${message.channel.id}` === "704410454360850522") {
if(message.content.startsWith("http")) {
    message.react('704418951635009547') 
    message.react('704418951655850014') 
} else {
    try { if(`${message.author.id}` === `${client.user.id}`) {return;} else { await message.delete(); } } catch(e) {return;}
    return;
}
}
});


client.on('messageReactionAdd', async (reaction, user) => {
    let limit = 2; // number of thumbsdown reactions you need
    if (reaction.count === limit) {
        if(`${reaction.message.id}` !== `${messageID}`) {
        await reaction.message.channel.send(`<@${reaction.message.author.id}> you won`);
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