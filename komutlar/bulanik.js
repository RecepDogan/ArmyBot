const Discord = require('discord.js');
const Jimp = require('jimp');

exports.run = (client, message, args) => {
if (!message.guild) {
      return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Eval;').setDescription(message.author.username + ', bu komutu direkt mesajda kullanamazsın.').setFooter('ArmyBot', client.user.avatarURL).setTimestamp()); }
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.channel.send('Kimi bulanık Yapıcağını Yazmadın.');
        Jimp.read(user.avatarURL || user.defaultAvatarURL, function (err, image){
            if(err) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Bulanık;').setDescription(err).setFooter('İ B D </>', client.user.avatarURL).setTimestamp());
            image.blur(5).write('image.png');
            setTimeout(() => {
              message.channel.sendFile('image.png');
            }, 500);
        });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bulanık',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'bulanık'
};
