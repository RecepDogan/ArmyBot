const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Destek sunucusuna katılmak için "https://discord.gg/B5Uxkjd" adresine tıklayabilirsiniz.');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['desteks'],
  permLevel: 0
};

exports.help = {
  name: 'desteksunucusu',
  description: 'Botun Destek Sunucusunu gösterir.',
  usage: 'desteksunucusu'
};
