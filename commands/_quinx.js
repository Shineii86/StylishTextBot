/*CMD
  command: /quinx
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

var font = User.getProperty("fonts", message, "string")

function applyFontStyle(text) {
  const fontMapping = {
    A: "𝐀",
    B: "𝐁",
    C: "𝐂",
    D: "𝐃",
    E: "𝐄",
    F: "𝐄",
    G: "𝐆",
    H: "𝐇",
    I: "𝐈",
    J: "𝐉",
    K: "𝐊",
    L: "𝐋",
    M: "𝐌",
    N: "𝐍",
    O: "𝐎",
    P: "𝐏",
    Q: "𝐐",
    R: "R",
    S: "𝐒",
    T: "𝐓",
    U: "𝐔",
    V: "𝐕",
    W: "𝐖",
    X: "𝐗",
    Y: "𝐘",
    Z: "𝐙",
    a: "ᴀ",
    b: "ʙ",
    c: "ᴄ",
    d: "ᴅ",
    e: "ᴇ",
    f: "ғ",
    g: "ɢ",
    h: "ʜ",
    i: "ɪ",
    j: "ɪ",
    k: "ᴋ",
    l: "ʟ",
    m: "ᴍ",
    n: "ɴ",
    o: "ᴏ",
    p: "ᴘ",
    q: "ǫ",
    r: "ʀ",
    s: "s",
    t: "ᴛ",
    u: "ᴜ",
    v: "ᴠ",
    w: "ᴡ",
    x: "x",
    y: "ʏ",
    z: "ᴢ"
  }
  // You Can Replace Font Also
  for (const char in fontMapping) {
    if (fontMapping.hasOwnProperty(char)) {
      const replacement = fontMapping[char]
      const regex = new RegExp(char, "g")
      text = text.replace(regex, replacement)
    }
  }

  return text
}

const userInput = font
const styledText = applyFontStyle(userInput)

var but = [
  [
    { text: "𝚃𝚢𝚙𝚎𝚠𝚛𝚒𝚝𝚎𝚛", callback_data: "/typewriter" },
    { text: "𝕆𝕦𝕥𝕝𝕚𝕟𝕖", callback_data: "/outline" },
    { text: "𝐒𝐞𝐫𝐢𝐟", callback_data: "/serif" }
  ],
  [
    { text: "𝑺𝒆𝒓𝒊𝒇", callback_data: "/serif_bi" },
    { text: "𝑆𝑒𝑟𝑖𝑓", callback_data: "/serif_i" },
    { text: "𝐐ᴜɪɴx", callback_data: "/quinx" }
  ],
  [
    { text: "𝓈𝒸𝓇𝒾𝓅𝓉", callback_data: "/typewriter" },
    { text: "𝓼𝓬𝓻𝓲𝓹𝓽", callback_data: "/outline" },
    { text: "ᵗⁱⁿʸ", callback_data: "/tiny" }
  ],
  [
    { text: "ᑕOᗰIᑕ", callback_data: "/comic" },
    { text: "𝗦𝗮𝗻𝘀", callback_data: "/sans_b" },
    { text: "𝙎𝙖𝙣𝙨", callback_data: "/sans_bi" }
  ],
  [
    { text: "𝘚𝘢𝘯𝘴", callback_data: "/sans_i" },
    { text: "𝖲𝖺𝗇𝗌", callback_data: "/sans" },
    { text: "Ⓒ︎Ⓘ︎Ⓡ︎Ⓒ︎Ⓛ︎Ⓔ︎Ⓢ︎", callback_data: "/circles" }
  ],
  [
    { text: "🅒︎🅘︎🅡︎🅒︎🅛︎🅔︎🅢︎", callback_data: "/circles_2" },
    { text: "𝔊𝔬𝔱𝔥𝔦𝔠", callback_data: "/gothic" },
    { text: "𝕲𝖔𝖙𝖍𝖎𝖈", callback_data: "/gothic_b" }
  ],
  [
    { text: "🇸 🇵 🇪 🇨 🇮 🇦 🇱 ", callback_data: "/special" },
    { text: "🅂🅀🅄🄰🅁🄴🅂", callback_data: "/squares" },
    { text: "🆂︎🆀︎🆄︎🅰︎🆁︎🅴︎🆂︎", callback_data: "/squares_2" }
  ],
  [
    { text: "ꪖꪀᦔꪖꪶꪊᥴ𝓲ꪖ", callback_data: "/andalucia" },
    { text: "爪卂几ᘜ卂", callback_data: "/manga" },
    { text: "꒒ꍏꀷꌩꌃꀎꁅ", callback_data: "/ladybug" }
  ],
  [
    { text: "S⃠t⃠o⃠p⃠", callback_data: "/stop" },
    { text: "ዪሀክቿነ", callback_data: "/rvnes" },
    { text: "F༙r༙o༙z༙e༙n༙", callback_data: "/frozen" }
  ],
  [
    { text: "C͜͡l͜͡o͜͡u͜͡d͜͡s͜͡", callback_data: "/clouds" },
    { text: "H̆̈ă̈p̆̈p̆̈y", callback_data: "/happy" },
    { text: "S̑̈ȃ̈d̑̈", callback_data: "/sad" }
  ]
]
Api.editMessageText({
  chat_id: request.message.chat.id,
  message_id: request.message.message_id,
  text: styledText,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: but }
})

var font = User.getProperty("fonts", message, "string")

function applyFontStyle(text) {
  const fontMapping = {
    A: "𝐀",
    B: "𝐁",
    C: "𝐂",
    D: "𝐃",
    E: "𝐄",
    F: "𝐄",
    G: "𝐆",
    H: "𝐇",
    I: "𝐈",
    J: "𝐉",
    K: "𝐊",
    L: "𝐋",
    M: "𝐌",
    N: "𝐍",
    O: "𝐎",
    P: "𝐏",
    Q: "𝐐",
    R: "R",
    S: "𝐒",
    T: "𝐓",
    U: "𝐔",
    V: "𝐕",
    W: "𝐖",
    X: "𝐗",
    Y: "𝐘",
    Z: "𝐙",
    a: "ᴀ",
    b: "ʙ",
    c: "ᴄ",
    d: "ᴅ",
    e: "ᴇ",
    f: "ғ",
    g: "ɢ",
    h: "ʜ",
    i: "ɪ",
    j: "ɪ",
    k: "ᴋ",
    l: "ʟ",
    m: "ᴍ",
    n: "ɴ",
    o: "ᴏ",
    p: "ᴘ",
    q: "ǫ",
    r: "ʀ",
    s: "s",
    t: "ᴛ",
    u: "ᴜ",
    v: "ᴠ",
    w: "ᴡ",
    x: "x",
    y: "ʏ",
    z: "ᴢ"
  }
  // You Can Replace Font Also
  for (const char in fontMapping) {
    if (fontMapping.hasOwnProperty(char)) {
      const replacement = fontMapping[char]
      const regex = new RegExp(char, "g")
      text = text.replace(regex, replacement)
    }
  }

  return text
}

const userInput = font
const styledText = applyFontStyle(userInput)

var but = [
  [
    { text: "𝚃𝚢𝚙𝚎𝚠𝚛𝚒𝚝𝚎𝚛", callback_data: "/typewriter" },
    { text: "𝕆𝕦𝕥𝕝𝕚𝕟𝕖", callback_data: "/outline" },
    { text: "𝐒𝐞𝐫𝐢𝐟", callback_data: "/serif" }
  ],
  [
    { text: "𝑺𝒆𝒓𝒊𝒇", callback_data: "/serif_bi" },
    { text: "𝑆𝑒𝑟𝑖𝑓", callback_data: "/serif_i" },
    { text: "𝐐ᴜɪɴx", callback_data: "/quinx" }
  ],
  [
    { text: "𝓈𝒸𝓇𝒾𝓅𝓉", callback_data: "/typewriter" },
    { text: "𝓼𝓬𝓻𝓲𝓹𝓽", callback_data: "/outline" },
    { text: "ᵗⁱⁿʸ", callback_data: "/tiny" }
  ],
  [
    { text: "ᑕOᗰIᑕ", callback_data: "/comic" },
    { text: "𝗦𝗮𝗻𝘀", callback_data: "/sans_b" },
    { text: "𝙎𝙖𝙣𝙨", callback_data: "/sans_bi" }
  ],
  [
    { text: "𝘚𝘢𝘯𝘴", callback_data: "/sans_i" },
    { text: "𝖲𝖺𝗇𝗌", callback_data: "/sans" },
    { text: "Ⓒ︎Ⓘ︎Ⓡ︎Ⓒ︎Ⓛ︎Ⓔ︎Ⓢ︎", callback_data: "/circles" }
  ],
  [
    { text: "🅒︎🅘︎🅡︎🅒︎🅛︎🅔︎🅢︎", callback_data: "/circles_2" },
    { text: "𝔊𝔬𝔱𝔥𝔦𝔠", callback_data: "/gothic" },
    { text: "𝕲𝖔𝖙𝖍𝖎𝖈", callback_data: "/gothic_b" }
  ],
  [
    { text: "🇸 🇵 🇪 🇨 🇮 🇦 🇱 ", callback_data: "/special" },
    { text: "🅂🅀🅄🄰🅁🄴🅂", callback_data: "/squares" },
    { text: "🆂︎🆀︎🆄︎🅰︎🆁︎🅴︎🆂︎", callback_data: "/squares_2" }
  ],
  [
    { text: "ꪖꪀᦔꪖꪶꪊᥴ𝓲ꪖ", callback_data: "/andalucia" },
    { text: "爪卂几ᘜ卂", callback_data: "/manga" },
    { text: "꒒ꍏꀷꌩꌃꀎꁅ", callback_data: "/ladybug" }
  ],
  [
    { text: "S⃠t⃠o⃠p⃠", callback_data: "/stop" },
    { text: "ዪሀክቿነ", callback_data: "/rvnes" },
    { text: "F༙r༙o༙z༙e༙n༙", callback_data: "/frozen" }
  ],
  [
    { text: "C͜͡l͜͡o͜͡u͜͡d͜͡s͜͡", callback_data: "/clouds" },
    { text: "H̆̈ă̈p̆̈p̆̈y", callback_data: "/happy" },
    { text: "S̑̈ȃ̈d̑̈", callback_data: "/sad" }
  ]
]
Api.editMessageText({
  chat_id: request.message.chat.id,
  message_id: request.message.message_id,
  text: styledText,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: but }
})

