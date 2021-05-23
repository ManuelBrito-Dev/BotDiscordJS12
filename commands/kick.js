const Discord = require('discord.js');
 
exports.run = async(bot, msg, args) => {
    if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply('Não tens permissões para usar este comando!');
 
    var user = msg.mentions.users.first();
    if(!user) return msg.reply('Tens que mencionar alguém!');
 
    var member;
 
    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }
 
    if(!member) return msg.reply('Esse membro não está no servidor!');
    if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('Tu não podes kickar esse membro');
 
    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('Tens que dar 1 motivo');
 
    var channel = msg.guild.channels.cache.find(c => c.id === 'ID'); //id do canal em que sera postada a mensagem!
 
    var log = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Membro Kikado')
    .addField('Membro:', user, true)
    .addField('Staff:', msg.author, true)
    .addField('Motivo:', reason)
    channel.send(log);
 
    var embed = new Discord.MessageEmbed()
    .setTitle('| Foste kick! **Motivo**')
    .setDescription(reason);
 
    try {
        await user.send(embed);
    } catch(err) {
        console.warn(err);
    }
 
    member.kick(reason);
 
    msg.channel.send(`**${user}** Foi kikado por **${msg.author}**!`);
}