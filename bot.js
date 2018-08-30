const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
   console.log("Estoy listo!");
});
var prefix = config.prefix;

client.on("message", (message) => {
      if (message.content.startsWith(prefix +"ip")){
    message.channel.send({embed: {
      color: 3447003,
      description: "el servidor esta cerrado."
    }});
  } else
  if (message.content.startsWith(prefix +"port")){
    message.channel.send({embed: {
      color: 3447003,
      description: "el servidor esta cerrado."
    }});
}
});
client.login(config.token);

client.on("guildMemberAdd", (member) => {
   console.log(`Nuevo usuario:  ${member.user.username} se ha unido a ${member.guild.name}.`);
   var canal = client.channels.get('473873051868463106');
   canal.send(`${member.user}, bienvenido al servidor pasalo bien.`);

});
