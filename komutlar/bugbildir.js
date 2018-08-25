const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Hatayı Yazmayı unuttun.');
        message.channel.send("**Başarıyla Hatanız Kurucuya iletildi.**")
    let str = "<@394483627439685632>";
    let id = str.replace(/[<@!>]/g, '');
    bot.fetchUser(id)
        .then(user => {user.send(`Bug Bildiri: **${mesaj}**\nGönderen: **${message.author.username}**`)})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bug-bildir',
  description: 'Botun Yapimcisina Önerirsin',
  usage: 'bug-bildir'
};
