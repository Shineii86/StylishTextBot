/*CMD
  command: x
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid != 5935546620) {
  var mode = Bot.getProperty("mode")
  if (mode == "On") {
    Bot.sendMessage(
      "🚧 BOT UNDER MAINTENANCE 🚧\n\nThe bot is currently under maintenance.\nYou will receive a notification as soon as correct operation resumes.\n🔧 Developed by zMarkHD_"
    )
    return
  }
}

