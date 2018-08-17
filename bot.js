const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
   console.log("Estoy listo!");
});
var prefix = config.prefix;

client.on("message", (message) => {
  if (message.content.startsWith("holatontoxd")) {
    message.channel.send("!warn @-•̶๖̶̶̶ζ͜͡ ELℭ𝔥𝔦𝔠𝔬ᴰᵉ𝐹𝓊𝑒𝑔𝑜👑 El mas malote");
  } else
  if (message.content.startsWith("!warn @-•̶๖̶̶̶ζ͜͡ ELℭ𝔥𝔦𝔠𝔬ᴰᵉ𝐹𝓊𝑒𝑔𝑜👑 El mas malote")) {
    message.channel.send("!warn @-•̶๖̶̶̶ζ͜͡ ELℭ𝔥𝔦𝔠𝔬ᴰᵉ𝐹𝓊𝑒𝑔𝑜👑 El mas malote");
  } else
      if (message.content.startsWith(prefix +"help")){
    message.channel.send({embed: {
      color: 3447003,
      description: "Pon **-comandos** para ver los comandos disponibles y si necesitas ayuda contacta con un **@Dueño**  "
    }});
  } else
  if (message.content.startsWith(prefix +"servidores")){
    message.channel.send({embed: {
      color: 3447003,
      description: "**NovumLife** servidor de Rolplay unturned https://discord.gg/8XkUJ3N ¡UNETE!  "
    }});
     } else
     if (message.content.startsWith(prefix +"comandos")){
    message.channel.send({embed: {
      color: 3447003,
      description: "/ -dame / -que hay pa comer/ -help / -servidores / -quiero mas"
    }});
      } else
        if (message.content.startsWith(prefix +"quiero mas")){
    message.channel.send({embed: {
      color: 3447003,
      description: "TOMA MAS PATATASSSSSSSS!!!!!!!!!!!!! :fries: :fries: :fries: :fries: :fries: :fries: :fries: :fries: :fries: :fries: :fries: :fries: "
    }});
      } else
        if (message.content.startsWith(prefix +"no me gusta")){
    message.channel.send({embed: {
      color: 3447003,
      description: "Comete lo que te he preparado o te quedas sin play :v"
    }});
}
});
client.login(config.token);

client.on("guildMemberAdd", (member) => {
   console.log(`Nuevo usuario:  ${member.user.username} se ha unido a ${member.guild.name}.`);
   var canal = client.channels.get('473873051868463106');
   canal.send(`${member.user}, bienvenido al servidor pasalo bien.`);

});
