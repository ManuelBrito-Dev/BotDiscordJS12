const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    message.delete()

    const cargo = message.guild.roles.cache.get('ID'); //id do cargo verificado
    

    await message.member.roles.add(cargo.id);

    message.member.send(`Foste verificado(a) no servidor: **${message.guild.name}**`)
};