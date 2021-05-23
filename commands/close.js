const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return msg.reply('Não tens permissões para usar este comando!');

    message.channel.delete()
};