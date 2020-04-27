const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login('NzA0MzU1NjkyODE0Nzk0ODE0.XqcF8A.TIYGEXCLR3cpPlMjeqvGPYZ7Xw0');
