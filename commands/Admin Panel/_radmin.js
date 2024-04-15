/*CMD
  command: /radmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: Send The Telegram ID.

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid == 5572081489) {
  Bot.sendMessageToChatWithId("" + message + "", "*Owner Demoted You*")
  Bot.sendMessage(message + " Demoted")
  Bot.setProperty("admin" + message + "", "demote", "string")
} else {
  Bot.sendMessage("You Have To Become Owner")
}

