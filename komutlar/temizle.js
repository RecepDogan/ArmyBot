const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if (!message.guild) {
    return message.author.send('`temizle` komutu sadece sunucularda kullanılabilir.');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (mesajsayisi.length < 1) return message.channel.send('Kaç mesaj silinmenin gerektiğini belirtmedin.')
  if (mesajsayisi > 100) return message.channel.send('100 adetden fazla mesaj silinemez.');
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send('**✅ '+ mesajsayisi +' adet mesaj silindi.**')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesaj siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};
