const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Renk yükleniyor.').then(message => {
      var espriler = ['Sarı.','Yeşil.','Mavi.','Kırmızı.','Mor.','Turkuaz.','Siyah.','Beyaz.','Turuncu.','Gri','Kahverengi'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rastgele-renk',
  description: 'Espiri yapar.',
  usage: 'rastgele-renk'
};
