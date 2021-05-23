const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();


client.on("ready", () => {
    let activities = [
        `TEU STATUS`, //ESCOLHE O STATUS DO TEU BOT
        `TEU STATUS`  //ESCOLHE O STATUS DO TEU BOT
      ],
      i = 0;
    setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
          type: "WATCHING"
        }), 1000 * 60); 
    client.user
        .setStatus("online")
        .catch(console.error);
  console.log("Olá Mundo")
});

client.on("message", async message => {             // NAO REMOVAS
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(config.prefix)) return;
    if (message.content.startsWith(`<@${client.user.id}>`) ||
    message.content.startsWith(`<@${client.user.id}>`)) return;


    let args = message.content.split(" ").slice(1);
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
    try {
        let commandFile = require(`./commands/${command}.js`);
        delete require.cache[require.resolve(`./commands/${command}.js`)];
        return commandFile.run(client, message, args);
    } catch (err) {
        console.log(err);
    }
})

client.on('guildMemberAdd', (member) => {
     
    const canalId = 'ID' //ID DO CANAL DA MENSAGEM DE BEM-VINDOS
    const canal = member.guild.channels.cache.get(canalId)
    const embed = new Discord.MessageEmbed()
        .setTitle("Bem-Vindo")
        .setDescription(`Olá <@${member.id}> sê Bem-Vindo!`)
        .setImage("TUA IMAGEM")
        .setFooter(`Sistema de bem vindos`)

    canal.send(embed)
})


client.on('guildMemberRemove', (member) => {
     
    const canalId = 'ID' //ID DO CANAL DA MENSAGEM DE SAIDAS
    const canal = member.guild.channels.cache.get(canalId)
    const embed = new Discord.MessageEmbed()
        .setTitle("Adeus")
        .setDescription(`Olha <@${member.id}> adeus`)
        .setImage("TUA IMAGEM")
        .setFooter(`Sistema de Saidas`)

    canal.send(embed)
})


client.login(config.token); // NAO REMOVAS