// scripts.js
// Mencegah klik kanan
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Klik kanan dinonaktifkan!');
});

// Mencegah pintasan keyboard untuk membuka alat pengembang
document.addEventListener('keydown', function(e) {
    // Menyaring pintasan yang umum digunakan untuk membuka alat pengembang
    if ((e.ctrlKey || e.metaKey) && (e.key === 'I' || e.key === 'J' || e.key === 'U') || 
        e.keyCode === 123 || // F12 key
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) // Ctrl+Shift+I
    ) {
        e.preventDefault();
        alert('Pintasan keyboard ini dinonaktifkan!');
    }
});

// Fungsi untuk mengenkripsi password (obfuscate)
function obfuscatePassword() {
    const password = document.getElementById('passwordInput').value;
    let obfuscated = '';

    for (let i = 0; i < password.length; i++) {
        let randomChar = String.fromCharCode(Math.floor(Math.random() * 25) + 65);
        let encodedChar = (password.charCodeAt(i) + randomChar.charCodeAt(0)).toString();
        obfuscated += encodedChar + randomChar;
    }

    const resultElement = document.getElementById('encryptedPassword');
    resultElement.textContent = obfuscated;
    document.getElementById('copyEncrypted').style.display = 'inline-block';
}

// Fungsi untuk mendekode password (decode)
function decodePassword() {
    const encoded = document.getElementById('encodedInput').value;
    let decoded = '';
    let temp = '';

    for (let i = 0; i < encoded.length; i++) {
        if (!isNaN(encoded[i])) {
            temp += encoded[i];
        } else {
            let asciiValue = parseInt(temp);
            decoded += String.fromCharCode(asciiValue - encoded.charCodeAt(i));
            temp = '';
        }
    }

    const resultElement = document.getElementById('decodedPassword');
    resultElement.textContent = decoded;
    document.getElementById('copyDecoded').style.display = 'inline-block';
}

// Fungsi untuk mengacak pesan
function scrambleMessage() {
    let message = document.getElementById('messageInput').value;
    let scrambled = message.split('').sort(() => Math.random() - 0.5).join('');

    const resultElement = document.getElementById('scrambledMessage');
    resultElement.textContent = scrambled;
    document.getElementById('copyScrambled').style.display = 'inline-block';
}

// Fungsi untuk membuka pesan yang diacak (menggunakan pesan asli)
function unscrambleMessage() {
    let originalMessage = document.getElementById('messageInput').value; // Di sini menggunakan pesan asli
    const resultElement = document.getElementById('unscrambledMessage');
    resultElement.textContent = originalMessage;
    document.getElementById('copyUnscrambled').style.display = 'inline-block';
}

// Fungsi untuk menyalin hasil ke clipboard
function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    });
}
