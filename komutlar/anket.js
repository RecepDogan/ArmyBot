const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın!');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('Oylama')
    .setColor(3347003)
    .setDescription(`${mesaj} \n\n\ Evet için: :thumbsup: hayır için: :thumbsdown:`)
    return message.channel.sendEmbed(embed).then(msg => {
        msg.react("👍")
        msg.react("👎")
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Oylama Yapar.',
  usage: 'oylama'
};
