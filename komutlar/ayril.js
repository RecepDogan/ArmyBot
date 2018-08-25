const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  if (message.author.id !== ayarlar.sahip) return message.reply('Yapımcım Sen Değilsin!');
   message.cannel.send('Bot Sunucudan Ayrıldı.');
   message.guild.leave()
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ayril'],
  permLevel: 0
};

exports.help = {
  name: 'ayrıl',
  description: 'Bot Sunucudan Ayrılır (YAPIMCI KOMUDU)',
  usage: 'ayrıl'
};
