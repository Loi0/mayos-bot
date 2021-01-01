client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'gay'){
        message.channel.send('no u');
    }

    if(command === 'ping'){
        message.channel.send('suca ti spacco la racchetta in testa c tarantell');
    }

    if (command === 'pong'){
        message.channel.send('ping')
    }
});