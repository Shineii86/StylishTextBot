/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Check if user is banned
var RBan = Bot.getProperty("Ban" + user.telegramid)
if (RBan === "Ban") {
  // User is banned
  Bot.sendMessage(
    "You Are Banned\nSupport: [𝐒ʜɪɴᴇɪ 𝐍ᴏᴜᴢᴇɴ](tg://openmessage?user_id=5572081489)"
  )
} else {
  // User is not banned
  var button = [
    [{ text: "𝐂ʀᴇᴀᴛᴇ 𝐎ᴡɴ 𝐂ʟᴏɴᴇ", url: "t.me/Shineii86" }],
    [
      { text: "𝐃ᴇvᴇʟᴏᴘᴇʀ", url: "t.me/Shineii86" },
      { text: "𝐔ᴘᴅᴀᴛᴇs", url: "t.me/MaximXBots" }
    ],
    [{ text: "𝐂ʟᴏsᴇ", callback_data: "/close" }]
  ]

  if (!params) {
    // If params is not provided, send photo with caption and buttons
    Api.sendPhoto({
      photo: "https://telegra.ph/file/aa97d2ef89f913ccc4b72.jpg",
      caption:
        "𝐇ᴇʏ, <a href='tg://user?id=" +
        user.telegramid +
        "'>" +
        user.first_name +
        "</a> 𝐈'ᴍ 𝐓ʜᴇ 𝐅ᴏɴᴛ 𝐆ᴇɴᴇʀᴀᴛᴏʀ 𝐁ᴏᴛ, 𝐇ᴇʀᴇ 𝐓ᴏ 𝐓ʀᴀɴsғᴏʀᴍ 𝐘ᴏᴜʀ 𝐓ᴇxᴛ 𝐈ɴᴛᴏ sᴛʏʟɪsʜ 𝐅ᴏɴᴛs, 𝐂ᴏᴜʀᴛᴇsʏ ᴏғ <a href='https://t.me/Shineii86'>𝐒ʜɪɴᴇɪ 𝐍ᴏᴜᴢᴇɴ</a>. 𝐋ᴇᴛ's 𝐀ᴅᴅ 𝐒ᴏᴍᴇ 𝐅ʟᴀɪʀ 𝐓ᴏ 𝐘ᴏᴜʀ 𝐌ᴇssᴀɢᴇs!\n\n𝐉ᴜsᴛ 𝐒ᴇɴᴅ 𝐌ᴇ 𝐘ᴏᴜʀ 𝐓ᴇxᴛ!",
      disable_web_page_preview: true,
      reply_markup: JSON.stringify({ inline_keyboard: button }),
      parse_mode: "html"
    })
    return
  } else {
    // If params is provided, delete the current message and notify admin about a new user
    Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })
    var hh = ""
    if (!User.getProperty("UserDone")) {
      User.setProperty("UserDone", true, "boolean")
      var stat = Libs.ResourcesLib.anotherChatRes("status", "global")
      stat.add(1)
      Api.sendMessage({
        chat_id: 5572081489,
        text:
          "➕ <b>New User Notification</b> ➕\n\n👤<b>User:</b> <a href='tg://user?id=" +
          user.telegramid +
          "'>" +
          user.first_name +
          "</a> " +
          hh +
          "\n\n🆔<b> User ID :</b> <code>" +
          user.telegramid +
          "</code>\n\n🌝 <b>Total User's Count: " +
          stat.value() +
          "</b>",
        parse_mode: "html",
        disable_web_page_preview: true
      })
    }
  }
}

Bot.sendMessageToChatWithId(
  5572081489,
  "*New User\n\nUserId: " +
    user.telegramid +
    "\nFirst Name : " +
    user.first_name +
    "\nLast Name : " +
    user.last_name +
    "\n\nUsername:  @" +
    user.username +
    "*"
)

