const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
   console.log("Estoy listo!");
});
var prefix = config.prefix;

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "dame")) {
    message.channel.send(":fries: ");
  } else
  if (message.content.startsWith(prefix + "que hay pa comer")) {
    message.channel.send("PATATAS FRITAS!!");
  } else
     if (message.content.startsWith(prefix + "help")) {
    message.channel.send("Pon -comandos para ver los comandos disponibles y si neccesitas ayuda contacta con un @Dueñon ");
  } else
  if (message.content.startsWith(prefix +"servidores")){
    message.channel.send({embed: {
      color: 3447003,
      description: "**NovumLife** servidor de Rolplay unturned https://discord.gg/8XkUJ3N ¡UNETE!  "
    }});
}
});
client.login(config.token);

client.on("guildMemberAdd", (member) => {
   console.log(`Nuevo usuario:  ${member.user.username} se ha unido a ${member.guild.name}.`);
   var canal = client.channels.get('473873051868463106');
   canal.send(`${member.user}, bienvenido al servidor pasalo bien.`);

});
