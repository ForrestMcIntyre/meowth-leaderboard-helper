const Discord = require('discord.js');
const client = new Discord.Client();
var auth = require('./auth.json');
var sqlAuth = require('./sql.json');

var mysql       = require('mysql');
var connection  = mysql.createConnection({
    host      : sqlAuth.host,
    user      : sqlAuth.user,
    password  : sqlAuth.password,
    database  : sqlAuth.database
}); 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.content.substring(0, 1) == '!') {
        var args = message.content.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
              message.channel.send('pong');
            case 'r':
              message.channel.send('Added 1 raid to '+ message.author);
            break;
            // Just add any case commands if you want to..
         }
     }
});

client.login(auth.token);