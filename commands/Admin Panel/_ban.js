/*CMD
  command: /ban
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: 🔒 Send the Telegram ID

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == 5572081489){
Bot.sendMessageToChatWithId(message, "🚷 You Have Been Banned By Owner")
var ba = 
Libs.ResourcesLib.anotherUserRes("balance",""+message+"")
Bot.setProperty("Balance"+message+"",ba.value(), "string")
ba.add(-ba.value())
Bot.sendMessage("User "+message+" Has Been Banned")
Bot.setProperty("Ban"+message+"", "Ban", "string")
}else{
Bot.sendMessage("*Attention* This command is exclusively for administrators. Please refrain from using it if you are not authorized.\n\n🧑🏻‍💻 *Developer* [𝐒ʜɪɴᴇɪ 𝐍ᴏᴜᴢᴇɴ](tg://openmessage?user_id=5572081489)")
}
