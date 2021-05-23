const Discord = require('discord.js')


module.exports = {

  run: function (client, message, args) {

    const embed = new Discord.MessageEmbed()
      .setColor(client.displayHexColor === '#000000' ? '#ffffff' : client.displayHexColor)
      .setThumbnail(message.guild.iconURL)
      .setAuthor('🔍 Informações do servidor')
      .addField('**Nome**', message.guild.name, true)
      .addField('**ID**', message.guild.id, true)
      .addField('**Fundador(a)**', `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
      .addField('**Canais**', message.guild.channels.size, true)
      .addField('**Cargos**', message.guild.roles.size, true)
      .setFooter(`Sistema de Server info | ${message.guild.name}`)
      .setTimestamp()

    message.channel.send(embed)
  }
}