const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return msg.reply('Não tens permissões para usar este comando!');

    const embed = new Discord.MessageEmbed()
    .setTitle(`Sistema de Ticket`)
    .setDescription('**Para abrires ticket basta escreveres:** \n```!ticket <assunto>```')
    .setThumbnail(`TUA IMAGEM`)
    .setFooter(`Sistema de ticket | ${message.guild.name}`)
    message.channel.send(embed)
};

// ESTE COMANDO SERVER PARA O BOT MANDAR UMA MENSAGEM EMBED A DIZER COMO ABRE TICKET //
// !ticketset // comando