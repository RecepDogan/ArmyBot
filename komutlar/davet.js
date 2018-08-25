const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Botu https://discordapp.com/oauth2/authorize?client_id=454972235153670144&scope=bot&permissions=2146958591 Sunucunuza ekleyebilirsiniz.');
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Yapimcimi Gosterir.',
  usage: 'davet'
};
