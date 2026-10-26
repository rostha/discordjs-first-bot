module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args){
        if (!message.member.hasPermission('KICK_MEMBERS'))
        return message.reply('You do not have Permission');
        
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("**Member has been kicked** ");
        }else{
            message.channel.send(`I coudn't find that member Please mention!`);
        }
    }
}
