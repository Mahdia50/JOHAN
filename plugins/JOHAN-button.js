let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*🎗️ قـائـمـة الـاوامــر🎗️*'
            },
            body: {
              text: '🧿 افتح القائمة بواسطة الزر\n🍒 لا تلعب كثير في القائمة'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'دوس عليا 💔',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'ON',
                        rows: [
                          {
                            header: '☘️ قـسـم الـنـظـام',
                            title: '.النظام_كود',
                            description: '━━[ *اوامر الجروبات و المجموعات 🐉* ]━━━━⬣
*🦕انذار*
*🦕الغاء-الانذار*
*🦕احذف*
*🦕ابلاغ*
*🦕الجروب*
*🦕الجروبات*
*🦕دعوه*
*🦕تغير-الوصف*
*🦕تغير-الاسم*
*🦕تغير-الترحيب*
*🦕تغير-الصوره*
*🦕تغير-اللينك*
*🦕الدعم*
*🦕تغير-الوداع*
*🦕تغير-الترحيب*
*🦕منشن*
*🦕مخفي*
*🦕لمنشن*
*🦕منشني*
*🦕جروب فتح*
*🦕جروب غلق*
*🦕اكشف*
*🦕لينك*
*🦕المشرفين*
*🦕الاشباح*
*🦕مغير الصوت*
*🦕عميق*
*🦕منفوخ*
*🦕تخين*
*🦕صاخب*
*🦕سريع*
*🦕رفيع*
*🦕تقطيع*
*🦕روبوت*
*🦕بطيء*
*🦕ناعم*
*🦕سنجاب*
*خاص ب الاصوات✌🏻*
*🦕انطق*
*🦕الدعم*',
                            id: 'te'
                          },
                          {
                            header: '👑 قـسـم الـمـطـور',
                            title: '.المطور_كود',
                            description: '',
                            id: 'te'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['القائمة']

export default handler
