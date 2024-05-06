let timeout = 60000
let poin = 500
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.fakk = conn.fakk ? conn.fakk : {}
    let id = m.chat
    if (id in conn.fakk) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.fakk[id][0])
        
let character = src.top[Math.floor(Math.random() * src.top.length)]
throw false
    }
    let src = await (await fetch('https://api.jikan.moe/v3/top/characters/1')).json()
   if (!src.top || !src.top.length) {
    throw new Error("لا يوجد بيانات")
   }
    let character = src.top[Math.floor(Math.random() * src.top.length)]
    let caption = `*${command.toUpperCase()}*
  ❐↞┇الـوقـت⏳↞ *${(timeout / 1000).toFixed(2)} ┇
  *استخدم .انسحب للأنسحاب*
  ❐↞┇الـجـائـزة💰↞ ${poin} نقاط┇
『ℤ𝕆𝔽𝔸ℕ🤖』
     `.trim()
    conn.fakk[id] = [
        await conn.sendFile(m.chat, character.image_url, '', caption, m),
        character, poin,
        setTimeout(() => {
            if (conn.fakk[id]) conn.reply(m.chat, `❮ ⌛┇انتهي الوقت┇⌛❯\n❐↞┇الاجـابـة✅↞ ${character.name}*┇`, conn.fakk[id][0])
            delete conn.fakk[id]
        }, timeout)
    ]
}

handler.help = ['fakk']
handler.tags = ['game']
handler.command = /^فكك/i

export default handler
