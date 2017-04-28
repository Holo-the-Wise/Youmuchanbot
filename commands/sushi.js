exports.run = function(client, message, args) {
    let sushiRole = message.guild.roles.find("name", "Sushi-ass man");
    if (message.member.roles.has(sushiRole.id)) {
        // message.channel.sendMessage("Sushi!");
        // message.channel.sendFile("http://i.imgur.com/mlRUf0a.gif", "sishi.gif");
        message.channel.sendEmbed({
          title: "SUSHI",
            color: 0xFF0000,
            image: {
                url: "http://i.imgur.com/mlRUf0a.gif"
            }
        });
    } else {
        message.channel.sendMessage("You do not have the power of the sushi");
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sushi',
  description: 'I don\'t even....',
  usage: 'sushi'
};
