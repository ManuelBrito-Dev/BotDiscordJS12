const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return msg.reply('Não tens permissões para usar este comando!');

    const embed = new Discord.MessageEmbed()
    .setTitle(`Sistema de Verificação`)
    .setDescription('**Para te verificares basta escreveres:** \n```!verificar```')
    .setThumbnail(`TUA IMAGEM`)
    .setFooter(`Sistema de Verificação | ${message.guild.name}`)
    message.channel.send(embed)
};

// ESTE COMANDO SERVER PARA O BOT MANDAR UMA MENSAGEM EMBED A DIZER COMO SE VERIFICA //
// !verificarset // comando