const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
});
client.on("message", (message) => {
  if (message.content.startsWith("!ip")) {
    message.channel.send("servidor cerrado.");
  }
});
client.login("NDc3NDQxMTc5Njc2NTczNzA3.DmmPHw.12JRoQ9okwJyr90BHDznMduj5ag");       
