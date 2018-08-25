const Discord = require('discord.js');
exports.run = function(client, message) {
   const ping = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setDescription(`Pingim: ${client.ping}ms`)
   message.channel.send(ping)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};
exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};
