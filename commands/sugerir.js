const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author.username}, escreve a sugestão após o comando`)
} else if (content.length > 1000) {
  return message.channel.send(`${message.author.username}, tens de dar uma sugestão. A tua mensagem nao pode ter mais de 1000 caracteres!`);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "ID"); //canal aonde vai ser postada a mensagem
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor("#FFFFF1")
    .addField("Autor:", message.author)
    .addField("Sugestão", content)
    .setFooter("ID do Autor: " + message.author.id)
    .setTimestamp()
  );
  await message.channel.send(`${message.author} a sugestão foi enviada com sucesso!`);

  const emojis = ["✅", "❎"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}