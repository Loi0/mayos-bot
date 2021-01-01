module.exports = {
    name: 'clear',
    description: "Clear messages!",
    execute(message, args) {
        if(!args[0]) return message.reply("inserisci un numero naturale mongolo");
        if(isNaN(args[0])) return message.reply("fra fai il serio inserisci un numero");

        if(args[0] > 100) return message.reply("dev'essere minore di 100");
        if(args[0] < 1) return message.reply("devi eliminare almeno un messaggio");

    }
}