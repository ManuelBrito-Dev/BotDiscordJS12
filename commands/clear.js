const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const numeromensagens = message.content.split(' ');
    const argumentos = numeromensagens.slice(1);

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('E teres perms?!');

    let nmensagensapagar;

    if (isNaN(argumentos[0]) || parseInt(argumentos[0]) <= 0) { return message.reply('Por favor, indica o numero de mensagens a serem apagadas(1-99)!') }

    if (parseInt(argumentos[0]) > 99) {
        return message.reply('Só podes deletar 99 mensagens de cada vez...!')
    } else {
        nmensagensapagar = parseInt(argumentos[0]);
    }

    message.channel.bulkDelete(nmensagensapagar + 1, true);
    message.channel.send(`**Sucesso** mensagens ***${nmensagensapagar}*** apagadas.`)
}

// !clear 1-99 // SE FOR MAIS DE 99 VAI DAR ERRO!