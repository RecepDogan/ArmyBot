const Discord = require('discord.js');

exports.run = (client, message, args) => {
	if (message.author.id != "411924525475823637") return message.channel.send("");
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 0
};

exports.help = {
  name: 'adminyaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'adminyaz [yazdırmak istediğiniz şey]'
};
