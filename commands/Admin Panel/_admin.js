/*CMD
  command: /admin
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

if (params == "Yes") {
  let msg_id = options.result.message_id
  Bot.editMessage("𝐐ᴜɪɴx 𝐀ᴅᴍɪɴ 𝐏ᴀɴʟᴇ\n■□□□□□□□□ 5%", msg_id)
  Bot.editMessage("𝐐ᴜɪɴx 𝐀ᴅᴍɪɴ 𝐏ᴀɴʟᴇ\n■■□□□□□□□ 13%", msg_id)
  Bot.editMessage("𝐐ᴜɪɴx 𝐀ᴅᴍɪɴ 𝐏ᴀɴʟᴇ\n■■■□□□□□□ 28%", msg_id)
  Bot.editMessage("𝐐ᴜɪɴx 𝐀ᴅᴍɪɴ 𝐏ᴀɴʟᴇ\n■■■■□□□□□ 45%", msg_id)
  Bot.editMessage("𝐐ᴜɪɴx 𝐀ᴅᴍɪɴ 𝐏ᴀɴʟᴇ\n■■■■■□□□□ 60%", msg_id)
  Bot.editMessage("𝐐ᴜɪɴx 𝐀ᴅᴍɪɴ 𝐏ᴀɴʟᴇ\n■■■■■■■■□ 90%", msg_id)
  Bot.editMessage("𝐐ᴜɪɴx 𝐀ᴅᴍɪɴ 𝐏ᴀɴʟᴇ\n■■■■■■■■■ 100%", msg_id)
  Api.deleteMessage({ chat_id: chat.chatid, message_id: msg_id })
  var admin = Bot.getProperty("admin" + user.telegramid)
  if (user.telegramid == 5572081489) {
    var button = [
      [{ title: "🚧 Maintenance Mode 🚧", command: "Maintenance" }],
      [
        { title: "📊 Status ", command: "/stats" },
        { title: "Broadcast 📣", command: "/broadcast" }
      ],
      [
        { title: "🔒 Ban", command: "/ban" },
        { title: "Unban 🔓", command: "/unban" }
      ],
      [
        { title: "➕ Add Admin", command: "/addadmin" },
        { title: "Remove Admin ➖", command: "/radmin" }
      ]
    ]
    Bot.sendInlineKeyboard(
      button,
      "Welcome to the Quinx Admin Panel!\nHere you can manage your bot with ease. Get started by using the following buttons:\n\n- *Maintenance Mode* Toggle the maintenance mode to control bot access.\n- *Status* Check the current status of your bot.\n- *Ban/Unban* Manage user access by banning or unbanning them.\n- *Broadcast* Send messages to multiple users at once.\n- *Add Admin* Add a new administrator to manage the bot.\n- *Remove Admin* Remove an existing administrator from managing the bot.\n- *Iterationvar* Perform an iteration operation on variables.\n\n_Explore these options to efficiently manage your bot's operations._\n\nCopyright: [𝐒ʜɪɴᴇɪ 𝐍ᴏᴜᴢᴇɴ](https://t.me/Shineii86)",
      { disable_web_page_preview: true }
    )
  } else {
    Bot.sendMessage(
      "*Attention* This command is exclusively for administrators. Please refrain from using it if you are not authorized.\n\n🧑🏻‍💻 *Developer* [𝐒ʜɪɴᴇɪ 𝐍ᴏᴜᴢᴇɴ](tg://openmessage?user_id=5572081489)",
      { disable_web_page_preview: true }
    )
  }
} else {
  Bot.sendMessage("𝐐ᴜɪɴx 𝐀ᴅᴍɪɴ 𝐏ᴀɴʟᴇ\n■□□□□□□□□ 0%", {
    on_result: "/admin Yes",
    is_reply: false
  })
}

