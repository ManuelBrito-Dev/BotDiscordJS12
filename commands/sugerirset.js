const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return msg.reply('Não tens permissões para usar este comando!');

    const embed = new Discord.MessageEmbed()
    .setTitle(`Sistema de Sugestões`)
    .setDescription('**Para criares uma sugestão faz** \n```!sugerir <sugestão>```')
    .setThumbnail(`TUA IMAGEM`)
    .setFooter(`Sistema de Sugestões | ${message.guild.name}`)
    message.channel.send(embed)
};

// ESTE COMANDO SERVER PARA O BOT MANDAR UMA MENSAGEM EMBED A DIZER COMO SE MANDA SUGERIR //
// !sugerirset // comando