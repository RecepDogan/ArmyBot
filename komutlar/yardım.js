const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Özel mesajlarını kontrol et.", "")
    .setDescription('Komutları özel mesaj olarak yolladım.');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()

  .setColor("RANDOM")
  .setFooter("ArmyBot")

  .setTitle("Army Bot'un Tüm Komutları")
  .addBlankField(true)
  .addField("Eğlence Komutları", "*espiri: Bot espiri yapar. \n*emojiyazı: Yazdıgınız şeyi Emojiye çevirir. \n*yazıtura Yazı Tura atar. \n*rastgeleşifre: Rastgeleşifre gönderir. \n*çayiç: Çay içersiniz. \n*çayaşekerat: Çaya Şeker atarsınız. \n*herkezebendençay: Herkese Çay alırsınız.\n*rastgele-renk: Bot Size Rastgele Renk söyler. \n*mcödül: Bot Yazdığınız Şeyi MC Ödülüne çevirir. \n*slot: Slot çevirirsiniz \n*bulanık: Bot belirttiğiniz Kişinin Fotoğrafını bulanık yapar. \n*inek: İnek Yazısı Yazarsınız.")
  .addField("Moderasyon Komutları", "*ban: Bot belirttiğiniz kişiyi bulunduğunuz sunucudan banlar. \n*kick : Bot belirttiğiniz kişiyi bulunduğunuz sunucudan atar.\n*oylama: Bot oylama açar.\n*rolver: Bot belirttiğiniz kişiye belirttiğiniz rolü verir. \n*kilit: Bot Bulunduğunuz Kanalı Belirttiğiniz Süreye kadar kilitler. \n*ses-kanal-aç: Bot belirttiğiniz isimde ses kanalı oluşturur. \n*yazı-kanal-aç: Bot belirttiğiniz isimde yazı kanalı oluşturur.\n*sustur: Bot belirttiğiniz kişiyi susturur. \n*reklamtaraması: Bot sunucudaki kişilerin oynuyor yerindeki reklamları tespit eder.\n*terfi: Belirttiğiniz Kullanıcıyı Terfi eder. ")
  .addField("Bilgi Komutları", "*istatistik: Bot istatistiklerini gösterir.\n*yapımcım: Beni Yapan Kişiyi gösterir.\n*davet: Bot kendi davet linkini atar. \n*desteksunucusu: Bot destek sunucusunu atar. \n*ping: Botun Pingini gösterir.")
  .addField("Genel Komutlar", "*avatarbul: Bot belirttiğiniz kişinin avatarını gösterir.\n*tavsiye: Bota bir sey önerirsiniz. \n*havadurumu: Bot yazdığınız şehirin hava durumunu gösterir. \n*saat: Bot Türkiye Saatini gösterir. \n*yaz: Bota belirttiğiniz mesajı yadırırsınız \n*sunucubilgi: Bot bulunduğunuz sunucu hakkında bilgi verir. \n*roller: Bulunduğunuz Sunucunun Rollerini söyler. \n*kullanıcıbilgim: Bot sizin hakkınızda bilgi verir.\n*hastebin: Yazdığınız mesajı hastebin Linkine çevirir. \n*sunucuresmi: Bot bulunduğunuz Sunucunun resmini gösterir. \n*hesapla: Belirttiğiniz İşlemi yapar. \n*bug-bildir: Bot Hataları Bildirir. \n*canlıdestek: Talep gönderirsiniz.")
  return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','y','help'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları listeler.',
  usage: 'yardım'
};
