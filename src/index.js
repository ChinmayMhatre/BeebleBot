require('dotenv').config()
const { Client } = require('discord.js');
const client = new Client()
const command = require("./commands");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// client.on('message', msg => {
//   if (msg.content === 'ping') {
//     msg.reply('Pong!');
//   }
// });

command(client,"ping",(message)=>{
  message.channel.send("🏓Pong")
})

client.login(process.env.BOT_TOKEN);