const discord = require("discord.js");

const TOKEN = "";

const bot = new discord.Client();

bot.on("ready",()=>{
    console.log("OK!");
    var server = bot.guilds.find("id","499114153273851914") // id du serveur
    var chan = new discord.TextChannel(server,{"id":"499136652426477568"}); // id du chan
    bot.setInterval(()=>
    {
        chan.send(";pokemon").then(msg=>{
            console.log(msg.content);
        });
    }, 10800000); // 3 heures
})

bot.login(TOKEN);
