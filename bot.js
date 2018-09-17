const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
});
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});
client.login("NDc3NDQxMTc5Njc2NTczNzA3.DoF04Q.EHsLZTK6GDu4hMvuLfeHnxP_-WQ");   
