// قائمة الكلمات
const words = ['زوافان', 'لوفي', 'شيطان', 'تانجيرو', 'نيزوكو', 'غوكو', 'ناروتو', 'شوتو', 'بان'];

// اختيار كلمة عشوائية
let randomWord = words[Math.floor(Math.random() * words.length)];

// عدد المحاولات المسموح بها
const maxAttempts = 5;

// الحروف التي تم تخمينها
let guessedLetters = [];

// الدالة لطباعة حالة الكلمة المختارة
function printWordStatus() {
    let wordStatus = '';
    for (let char of randomWord) {
        if (guessedLetters.includes(char)) {
            wordStatus += char + ' ';
        } else {
            wordStatus += '_ ';
        }
    }
    console.log(wordStatus);
}

// بدء اللعبة
console.log('مرحبًا بك في لعبة ملك الكتابة!');
console.log('يجب عليك تخمين الكلمة حرفًا حرفًا.');

// حلقة اللعبة
for (let attempts = 1; attempts <= maxAttempts; attempts++) {
    console.log(`محاولة رقم ${attempts}/${maxAttempts}:`);
    printWordStatus();
    const guess = prompt('الرجاء إدخال حرف:').toLowerCase();

    // التحقق من صحة التخمين
    if (guessedLetters.includes(guess)) {
        console.log('لقد قمت بتخمين هذا الحرف بالفعل. الرجاء اختيار حرف آخر.');
    } else if (randomWord.includes(guess)) {
        console.log('تهانينا! لقد قمت بتخمين حرف صحيح.');
        guessedLetters.push(guess);
    } else {
        console.log('آسف، هذا الحرف غير صحيح.');
    }

    // التحقق من الفوز
    if (randomWord.split('').every(char => guessedLetters.includes(char))) {
        console.log('تهانينا! لقد فزت!');
        printWordStatus();
        break;
    }
}

// في حالة الخسارة
if (!randomWord.split('').every(char => guessedLetters.includes(char))) {
    console.log(`آسف، لقد خسرت! الكلمة الصحيحة كانت "${randomWord}".`);
          }
handler.help = ['ملك', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['كتابة']
handler.command = /^ملك$/i
export default handler
