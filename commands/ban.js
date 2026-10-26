module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){
        if (!message.member.hasPermission('BAN_MEMBERS'))
        return message.reply('You do not have Permission');
        
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("**Member has been Banned**");
        }else{
            message.channel.send(`I coudn't Ban that member Please mention!`);
        }
    }
}
