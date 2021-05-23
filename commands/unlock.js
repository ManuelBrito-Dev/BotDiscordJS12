const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {                     //!unlock #canal | se nao puserem o canal à frente vai dar erro!
    message.delete()
    
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('Tu não tens permissões para executar este comando!');
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('Eu preciso __MANAGE_CHANNELS__ para consiguir mexer nos canais!')

    const role = message.guild.roles.cache.get('ID'); //id do cargo que não vai conseguir escrever no canal
    let lockChannel = message.mentions.channels.first() || message.guild.cache.get(args[0]);
    if (!lockChannel) lockChannel = message.channel;

    await lockChannel.updateOverwrite(role, {
        SEND_MESSAGES: true
    }).catch(err => console.log(err));
    message.channel.send(`Eu destranquei este canal a pedido de ${message.author.username} :unlock:`)

};