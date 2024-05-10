> استيراد { createHash } من 'crypto' Let Reg = /|?(.*)( _?)([0-9]_ )$/i Let Handler = async function (m, { conn, text,usedPrefix, Command }) { السماح للمستخدم = global.db.data.users[m.sender] السماح name2 = conn.getName(m.sender) إذا (user.registered === صحيح) رمي `✳️ أنت ملقب بالفعل يا حب` إذا (!Reg.test(text)) رمي `⚠️ تنسيق غير صحيح\n\n✳️ استخدم هذا الأمر: *${usedPrefix + command} القب*\n📌 مثال: *${usedPrefix + command}* لقبك واسم النقابه\n📌 مثال: *${usedPrefix + command}* كيلوا كلاود` السماح [ _, name] = text.match(Reg) if (!name) throw ' _تنسيق غير صحيح المثال: .لقبني كيلوا كلود_ ' if (name.length >= 30) throw '✳️ يسحب طويل جداً' user.name = name. تقليم () user.regTime = + تاريخ جديد user.registered = true Let sn = createHash('md5').update(m.sender).digest('hex') m.reply( ` ┌─「 *ملقب* 」─ ▢ *القب:* ${name} ▢ *الرقم* : ${m.sender.split`@`[0]} └─ ─────────────
> 
> _${usedPrefix}اوامر_ تقديم القائمة `.trim()) }
> 
> Handler.help = ['لقبني'].map(v => v + ' <الاسم>') Handler.tags = ['rg'] Handler.command = ['لقبني']
> 
> معالج التصدير الافتراضي

