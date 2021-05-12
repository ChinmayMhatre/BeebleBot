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

  command(client,"server",(message)=>{
    client.guilds.cache.forEach((guild)=>{
      message.channel.send(`Beeble Bot is part of  ${guild} and it has ${guild.memberCount} members`)
    })
  })

  //has permission issues

  // command(client,["cc","clearchannel"],(message)=>{
  //   if(message.member.roles.cache.some(role => role.name === 'Admin')){
  //     message.channel.messages.fetch().then(results=>{
  //       message.channel.bulkDelete(results)
  //     })
  //   }
  // })

client.login(process.env.BOT_TOKEN);