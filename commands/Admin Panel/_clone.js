/*CMD
  command: /clone
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: Send me the bot token.

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var allowedIds = [5572081489]; // Add more allowed IDs as needed to use this command

if (!allowedIds.includes(user.telegramid)) {
  Bot.sendMessage("You Are Not Admin");
} else {
  BBAdmin.cloneBot({
    bot_id: bot.id,
    token: message,
    run_now: true
  });
  Bot.sendMessage("Bot cloned successfully.");
}

