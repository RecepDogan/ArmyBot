const hastebin = require('hastebin-gen');

exports.run = (client, msg, args) => {
	    let haste = args.slice(0).join(" ")
        let type = args.slice(1).join(" ")
        if (!args[0]) { return msg.channel.send("Yazdığın şeyi hastebin linkine dönüştürmem için komutun yanına bir yazı yazman gerek!") }
        hastebin(haste, type).then(r => {
            msg.channel.send("Buyur Linkin:  " + r);
        }).catch(console.error);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hs', 'tb', 'hstb', 'hn'],
  permLevel: 0
};

exports.help = {
  name: 'hastebin',
  description: 'Yazdığınız Şeyi Hastebin Linkine Çevirir.',
  usage: 'hastebin [komut]'
};
