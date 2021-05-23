const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return msg.reply('Não tens permissões para usar este comando!');
  
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});

    message.channel.send(`@everyone`)

    const embed = new Discord.MessageEmbed()
        .setTitle(`Anuncio ${message.guild.name}`)
        .setDescription(sayMessage)
        .setThumbnail(`TUA IMAGEM`)
        .setFooter(`Sistema de anuncios | ${message.guild.name}`)

        message.channel.send(embed)
};