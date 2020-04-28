const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
let messageID = "0";
let userWon = false;
let userFailed = false;

client.on("ready", () => {
    client.user.setPresence({game:{name: "with code"}});
     console.log("loaded")
});

client.on("message", async message => {
    if(`${message.channel.id}` === "641420152168120320" || `${message.channel.id}` === "703050951648346184" )
if(message.content.startsWith("https://raw.github") || message.content.startsWith("https://github")) {
    await message.react('703046302824398939');
    return await message.react('703045879959126146');
} else {
    try { if(`${message.author.id}` === `${client.user.id}`) {return;} else { await message.delete(); } } catch(e) {return;}
    return;
}
}
);


client.on('messageReactionAdd', async (reaction, user) => {
    if(`${reaction.message.id}` === `${messageID}`) {
        return;
    }
    //another user must send a new map for it to reset values

    let limit = 2; // number of thumbsdown reactions you need
    if (reaction.count == limit && reaction.emoji.id == "703046302824398939" && userFailed == false) {
        if(`${reaction.message.id}` !== `${messageID}`) {
            let userWon = false;
            let userFailed = false;
    
    try {
    userWon = true;
    userFailed = false;
    console.log(`${reaction.emoji.id}`)
       await reaction.message.react("704418372850286682");
       await reaction.message.author.send("your map is under review and will be looked at");
       messageID = `${reaction.message.id}`;
       return;
    } catch(e) {
        return;
    }}} else{ 
        if(reaction.count == limit && reaction.emoji.id == "703045879959126146" && userWon == false) {
            userWon = false;
            userFailed = true;
            await reaction.message.react("704418373068390571");
            await reaction.message.author.send("was voted down by users, and will not go under review, try again next time.");
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
