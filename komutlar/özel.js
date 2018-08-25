const Discord = require("discord.js");

exports.run = (client, message, args) => {
    if (message.author.id != "411924525475823637") return message.channel.send("");
    let member = message.mentions.users.first();
    let mesaj = args.slice(1).join(" ");

    if(!member) return message.reply("Lütfen özel mesaj göndereceğin kişiyi belirt");
    if(!mesaj) return message.reply("Lütfen bu kişiye ne göndereceğini belirt");

    member.send(`${mesaj}`);
    message.channel.send("Mesaj gönderildi!")

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
exports.help = {
    name: "özel",
    description: "Kullanıcıya özel mesaj gönderir",
    usage: "özel <kullanıcı> <mesaj>"
}
