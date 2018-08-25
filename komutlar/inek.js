const Discord = require("discord.js");

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('İneğin ne Söyliceni belirtmedin.');
  message.channel.sendCode("asciidoc", `
  --------------------------
  |     < ${mesaj} >       |
  --------------------------
          \   ^__^
           \  (oo)\_______
              (__)\       )--*
                  ||-----||
                  ||     ||`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'inek',
  description: 'inek',
  usage: 'inek'
};
