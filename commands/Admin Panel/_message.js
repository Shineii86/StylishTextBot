/*CMD
  command: /message
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

Api.copyMessage({
  chat_id: user.telegramid,
  from_chat_id: options.chat_id,
  message_id: options.message_id
})

