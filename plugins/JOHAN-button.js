let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*قـائـمـة الـاوامــر*'
            },
            body: {
              text: '🛡️ افتح القائمة بواسطة الزر\n⚡ لا تلعب كثير في القائمة'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'دوس هنا ',
                    sections: [
                      {
                        title: 'قوائم البوت',
                        highlight_label: 'احزر*
*🎆كوره*
*🎆علم*
*🎆عين*
*🎆 مانغا*
*🎆شخصيه*
*🎆رياضيات*
*🎆شطرنج*
*🎆تفكيك*
*🎆اكس او*
*🎆لعبه*
*🎆صيد*
*🎆سؤال*
*🎆ديني*',
                    
                          },
                        {
                            header: 'قسم الانمي',
                            title: '.الانمي',
                            description: 'هلا',
                            id: 'te'
                          },
                          {
                            header: 'قسم الاوامر',
                            title: '.المهام',
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
handler.command = ['قايمه']

export default handler
