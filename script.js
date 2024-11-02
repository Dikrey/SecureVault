const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");
const sendMessage = document.querySelector("#send-message");
const fileInput = document.querySelector("#file-input");
const fileUploadWrapper = document.querySelector(".file-upload-wrapper");
const fileCancelButton = fileUploadWrapper.querySelector("#file-cancel");
const chatbotToggler = document.querySelector("#chatbot-toggler");
const closeChatbot = document.querySelector("#close-chatbot");

// API setup
const API_KEY = "AIzaSyDMAKjYTnoMBvI8nf0jZP3gaq9wew7wMvQ";
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

// Initialize user message and file data
const userData = {
  message: null,
  file: {
    data: null,
    mime_type: null,
  },
};

// Store chat history
const chatHistory = [];
const initialInputHeight = messageInput.scrollHeight;

// Create message element with dynamic classes and return it
const createMessageElement = (content, ...classes) => {
  const div = document.createElement("div");
  div.classList.add("message", ...classes);
  div.innerHTML = content;
  return div;
};

// Generate bot response using API
const generateBotResponse = async (incomingMessageDiv) => {
  const messageElement = incomingMessageDiv.querySelector(".message-text");

  // Add user message to chat history
  chatHistory.push({
    role: "user",
    parts: [{ text: userData.message }, ...(userData.file.data ? [{ inline_data: userData.file }] : [])],
  });

  // Custom response for "Siapa kamu?"
  if (userData.message.toLowerCase() === "siapa kamu") {
    const customResponse = "Saya adalah Artificial Intelligence (AI) buatan Raihan_official0307 yang siap membantu Anda.";
    messageElement.innerText = customResponse;
    chatHistory.push({
      role: "model",
      parts: [{ text: customResponse }],
    });
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    return;
  }
  if (userData.message.toLowerCase() === "Siapa kamu?") {
    const customResponse = "Saya adalah Artificial Intelligence (AI) buatan Raihan_official0307 yang siap membantu Anda.";
    messageElement.innerText = customResponse;
    chatHistory.push({
      role: "model",
      parts: [{ text: customResponse }],
    });
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    return;
  }
  if (userData.message.toLowerCase() === "siapa kamu") {
    const customResponse = "Saya adalah Artificial Intelligence (AI) buatan Raihan_official0307 yang siap membantu Anda.";
    messageElement.innerText = customResponse;
    chatHistory.push({
      role: "model",
      parts: [{ text: customResponse }],
    });
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    return;
  }
  if (userData.message.toLowerCase() === "Kamu siapa?") {
    const customResponse = "Saya adalah Artificial Intelligence (AI) buatan Raihan_official0307 yang siap membantu Anda.";
    messageElement.innerText = customResponse;
    chatHistory.push({
      role: "model",
      parts: [{ text: customResponse }],
    });
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    return;
  }
  if (userData.message.toLowerCase() === "kamu siapa?") {
    const customResponse = "Saya adalah Artificial Intelligence (AI) buatan Raihan_official0307 yang siap membantu Anda.";
    messageElement.innerText = customResponse;
    chatHistory.push({
      role: "model",
      parts: [{ text: customResponse }],
    });
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    return;
  }
  if (userData.message.toLowerCase() === "Kamu siapa") {
    const customResponse = "Saya adalah Artificial Intelligence (AI) buatan Raihan_official0307 yang siap membantu Anda.";
    messageElement.innerText = customResponse;
    chatHistory.push({
      role: "model",
      parts: [{ text: customResponse }],
    });
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    return;
  }
  if (userData.message.toLowerCase() === "siapa raihan") {
    const customResponse = "Raihan_official0307 adalah seorang developer yang membuat saya. Saya adalah Artificial Intelligence (AI)  buatan Raihan_official0307 yang siap membantu Anda.";

    messageElement.innerText = customResponse;
    chatHistory.push({
      role: "model",
      parts: [{ text: customResponse }],
    });
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    return;
  }
  if (userData.message.toLowerCase() === "Siapa raihan?") {
    const customResponse = "Raihan_official0307 adalah seorang developer yang membuat saya. Saya adalah Artificial Intelligence (AI)  buatan Raihan_official0307 yang siap membantu Anda.";

    messageElement.innerText = customResponse;
    chatHistory.push({
      role: "model",
      parts: [{ text: customResponse }],
    });
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    return;
  }
  if (userData.message.toLowerCase() === "Siapa Raihan_official0307") {
    const customResponse = "Raihan_official0307 adalah seorang developer yang membuat saya. Saya adalah Artificial Intelligence (AI)  buatan Raihan_official0307 yang siap membantu Anda.";

    messageElement.innerText = customResponse;
    chatHistory.push({
      role: "model",
      parts: [{ text: customResponse }],
    });
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    return;
  }
  if (userData.message.toLowerCase() === "siapa pencipta kamu") {
    const customResponse = "Pencipta saya adalah Raihan_official0307. Saya adalah Artificial Intelligence (AI) buatan Raihan_official0307 yang siap membantu Anda.";

    messageElement.innerText = customResponse;
    chatHistory.push({
      role: "model",
      parts: [{ text: customResponse }],
    });
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    return;
  }
  if (userData.message.toLowerCase() === "siapa pencipta kamu?") {
    const customResponse = "Pencipta saya adalah Raihan_official0307. Saya adalah Artificial Intelligence (AI) buatan Raihan_official0307 yang siap membantu Anda.";

    messageElement.innerText = customResponse;
    chatHistory.push({
      role: "model",
      parts: [{ text: customResponse }],
    });
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    return;
  }
  if (userData.message.toLowerCase() === "Siapa pencipta kamu") {
    const customResponse = "Pencipta saya adalah Raihan_official0307. Saya adalah Artificial Intelligence (AI) buatan Raihan_official0307 yang siap membantu Anda.";

    messageElement.innerText = customResponse;
    chatHistory.push({
      role: "model",
      parts: [{ text: customResponse }],
    });
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    return;
  }
  if (userData.message.toLowerCase() === "Siapa pencipta kamu?") {
    const customResponse = "Pencipta saya adalah Raihan_official0307. Saya adalah Artificial Intelligence (AI) buatan Raihan_official0307 yang siap membantu Anda.";

    messageElement.innerText = customResponse;
    chatHistory.push({
      role: "model",
      parts: [{ text: customResponse }],
    });
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    return;
  }
  if (userData.message.toLowerCase() === "dimana saya bisa hubungi developer") {
    const customResponse = "Anda bisa hubungi Raihan_official0307 melalui email: raihan.website00@gmail.com atau melalui kontak sosial media seperti Instagram: @muhammad_raihan0307 atau Telegram: @raihan_official0307.";

    messageElement.innerText = customResponse;
    chatHistory.push({
      role: "model",
      parts: [{ text: customResponse }],
    });
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    return;
  }
  if (userData.message.toLowerCase() === "Dimana saya bisa hubungi developer") {
    const customResponse = "Anda bisa hubungi Raihan_official0307 melalui email: raihan.website00@gmail.com atau melalui kontak sosial media seperti Instagram: @muhammad_raihan0307 atau Telegram: @raihan_official0307.";

    messageElement.innerText = customResponse;
    chatHistory.push({
      role: "model",
      parts: [{ text: customResponse }],
    });
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    return;
  }
  if (userData.message.toLowerCase() === "Dimana saya bisa hubungi developer?") {
    const customResponse = "Anda bisa hubungi Raihan_official0307 melalui email: raihan.website00@gmail.com atau melalui kontak sosial media seperti Instagram: @muhammad_raihan0307 atau Telegram: @raihan_official0307.";

    messageElement.innerText = customResponse;
    chatHistory.push({
      role: "model",
      parts: [{ text: customResponse }],
    });
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    return;
  }
  if (userData.message.toLowerCase() === "dimana saya bisa hubungi developer?") {
    const customResponse = "Anda bisa hubungi Raihan_official0307 melalui email: raihan.website00@gmail.com atau melalui kontak sosial media seperti Instagram: @muhammad_raihan0307 atau Telegram: @raihan_official0307.";

    messageElement.innerText = customResponse;
    chatHistory.push({
      role: "model",
      parts: [{ text: customResponse }],
    });
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    return;
  }
  if (userData.message.toLowerCase() === "dimana saya bisa hubungi developer kamu") {
    const customResponse = "Anda bisa hubungi Raihan_official0307 melalui email: raihan.website00@gmail.com atau melalui kontak sosial media seperti Instagram: @muhammad_raihan0307 atau Telegram: @raihan_official0307.";

    messageElement.innerText = customResponse;
    chatHistory.push({
      role: "model",
      parts: [{ text: customResponse }],
    });
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    return;
  }
  if (userData.message.toLowerCase() === "dimana saya bisa hubungi developer kamu?") {
    const customResponse = "Anda bisa hubungi Raihan_official0307 melalui email: raihan.website00@gmail.com atau melalui kontak sosial media seperti Instagram: @muhammad_raihan0307 atau Telegram: @raihan_official0307.";

    messageElement.innerText = customResponse;
    chatHistory.push({
      role: "model",
      parts: [{ text: customResponse }],
    });
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    return;
  }
  if (userData.message.toLowerCase() === "Dimana saya bisa hubungi developer kamu?") {
    const customResponse = "Anda bisa hubungi Raihan_official0307 melalui email: raihan.website00@gmail.com atau melalui kontak sosial media seperti Instagram: @muhammad_raihan0307 atau Telegram: @raihan_official0307.";

    messageElement.innerText = customResponse;
    chatHistory.push({
      role: "model",
      parts: [{ text: customResponse }],
    });
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    return;
  }

  // API request options
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: chatHistory,
    }),
  };

  try {
    // Fetch bot response from API
    const response = await fetch(API_URL, requestOptions);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error.message);

    // Extract and display bot's response text
    const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
    messageElement.innerText = apiResponseText;

    // Add bot response to chat history
    chatHistory.push({
      role: "model",
      parts: [{ text: apiResponseText }],
    });
  } catch (error) {
    // Handle error in API response
    console.log(error);
    messageElement.innerText = error.message;
    messageElement.style.color = "#ff0000";
  } finally {
    // Reset user's file data, remove thinking indicator, and scroll chat to bottom
    userData.file = {};
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
  }
};

// Handle outgoing user messages
const handleOutgoingMessage = (e) => {
  e.preventDefault();
  userData.message = messageInput.value.trim();
  messageInput.value = "";
  messageInput.dispatchEvent(new Event("input"));
  fileUploadWrapper.classList.remove("file-uploaded");

  // Create and display user message
  const messageContent = `<div class="message-text"></div>
                          ${userData.file.data ? `<img src="data:${userData.file.mime_type};base64,${userData.file.data}" class="attachment" />` : ""}`;

  const outgoingMessageDiv = createMessageElement(messageContent, "user-message");
  outgoingMessageDiv.querySelector(".message-text").innerText = userData.message;
  chatBody.appendChild(outgoingMessageDiv);
  chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });

  // Simulate bot response with thinking indicator after a delay
  setTimeout(() => {
    const messageContent = `<svg class="bot-avatar" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024">
            <path
              d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z"/></svg>
          <div class="message-text">
            <div class="thinking-indicator">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>`;

    const incomingMessageDiv = createMessageElement(messageContent, "bot-message", "thinking");
    chatBody.appendChild(incomingMessageDiv);
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    generateBotResponse(incomingMessageDiv);
  }, 600);
};

// Adjust input field height dynamically
messageInput.addEventListener("input", () => {
  messageInput.style.height = `${initialInputHeight}px`;
  messageInput.style.height = `${messageInput.scrollHeight}px`;
  document.querySelector(".chat-form").style.borderRadius = messageInput.scrollHeight > initialInputHeight ? "15px" : "32px";
});

// Handle Enter key press for sending messages
messageInput.addEventListener("keydown", (e) => {
  const userMessage = e.target.value.trim();
  if (e.key === "Enter" && !e.shiftKey && userMessage && window.innerWidth > 768) {
    handleOutgoingMessage(e);
  }
});

// Handle file input change and preview the selected file
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    fileInput.value = "";
    fileUploadWrapper.querySelector("img").src = e.target.result;
    fileUploadWrapper.classList.add("file-uploaded");
    const base64String = e.target.result.split(",")[1];

    // Store file data in userData
    userData.file = {
      data: base64String,
      mime_type: file.type,
    };
  };
  reader.readAsDataURL(file);
});

// Cancel file upload and reset file data
fileCancelButton.addEventListener("click", () => {
  fileUploadWrapper.classList.remove("file-uploaded");
  userData.file = {};
});

// Handle outgoing messages when the file input is clicked
fileInput.addEventListener("click", () => {
  fileInput.value = null;
  fileInput.dispatchEvent(new Event("input"));
  fileUploadWrapper.classList.add("file-uploaded");

  reader.readAsDataURL(file);
});

// Cancel file upload
fileCancelButton.addEventListener("click", () => {
  userData.file = {};
  fileUploadWrapper.classList.remove("file-uploaded");
});

// Initialize emoji picker and handle emoji selection
const picker = new EmojiMart.Picker({
  theme: "light",
  skinTonePosition: "none",
  previewPosition: "none",
  onEmojiSelect: (emoji) => {
    const { selectionStart: start, selectionEnd: end } = messageInput;
    messageInput.setRangeText(emoji.native, start, end, "end");
    messageInput.focus();
  },
  onClickOutside: (e) => {
    if (e.target.id === "emoji-picker") {
      document.body.classList.toggle("show-emoji-picker");
    } else {
      document.body.classList.remove("show-emoji-picker");
    }
  },
});

document.querySelector(".chat-form").appendChild(picker);

sendMessage.addEventListener("click", (e) => handleOutgoingMessage(e));
document.querySelector("#file-upload").addEventListener("click", () => fileInput.click());
closeChatbot.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

// scripts.js
// Mencegah klik kanan
/*document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    Swal.fire('Dinonaktifkan', 'Tidak Mengizinkan Klik Kanan', 'error');
});*/




// Mencegah pintasan keyboard untuk membuka alat pengembang
document.addEventListener('keydown', function (e) {
    // Menyaring pintasan yang umum digunakan untuk membuka alat pengembang
    if ((e.ctrlKey || e.metaKey) && (e.key === 'I' || e.key === 'J' || e.key === 'U') ||
        e.keyCode === 123 || // F12 key
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) // Ctrl+Shift+I
    ) {
        e.preventDefault();
        Swal.fire('ANDA MAU NGAPAIN?', 'Tidak Mengizinkan Klik Kanan', 'error');
    }
});
// Menonaktifkan klik kanan
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    Swal.fire('ANDA MAU NGAPAIN?', 'Tidak Mengizinkan Klik Kanan!', 'error');
});
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
        Swal.fire('Memblokir Ctrl+U', 'RaihanProduction', 'error');
    }
});
let userName = ''; // Variable to store the user's name

function updateClock() {
  const clockElement = document.getElementById('clock');
  const dateElement = document.getElementById('date');
  const greetingElement = document.getElementById('greetingMessage');

  // Get Jakarta timezone time
  const options = { timeZone: 'Asia/Jakarta', hour12: false };
  const now = new Date().toLocaleString('en-US', options);
  const timeParts = now.split(',')[1].trim();

  // Set the time
  clockElement.textContent = timeParts;

  // Set the date (tanggal and bulan in one line)
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = new Date().toLocaleDateString('id-ID', { ...options, ...dateOptions });
  dateElement.textContent = dateString;

  // Get the current hour in Jakarta timezone
  const hour = parseInt(timeParts.split(':')[0], 10);
  let greeting;

  if (hour < 12) {
    greeting = "Selamat Pagi";
  } else if (hour < 15) {
    greeting = "Selamat Siang";
  } else if (hour < 18) {
    greeting = "Selamat Sore";
  } else {
    greeting = "Selamat Malam";
  }

  // Update the greeting message if the user has submitted their name
  if (userName) {
    greetingElement.textContent = `${greeting}, ${userName}!`;
    greetingElement.style.display = 'block';
  }
}

// Function to show the modal when the page loads
window.onload = function() {
  document.getElementById('welcomeModal').style.display = 'flex';
  updateClock();
  setInterval(updateClock, 1000); // Update the clock every second
};

// Function to handle the name submission
function submitName() {
  const name = document.getElementById('userNameInput').value.trim();

  if (name) {
    userName = name; // Store the user's name
    document.getElementById('welcomeModal').style.display = 'none';
  } else {
    Swal.fire('Error', 'Please enter your name', 'error');
  }
}

  
  
document.querySelectorAll('details').forEach((detail) => {
    detail.addEventListener('toggle', (event) => {
        if (event.target.open) {
            console.log(`${event.target.querySelector('summary').textContent} opened`);
        } else {
            console.log(`${event.target.querySelector('summary').textContent} closed`);
        }
    });
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
    if (resultElement.textContent.length > 0) {
        Swal.fire({
            title: 'BERHASIL', text: 'Pesan/password anda telah dienkripsi', Text: 'Silahkan klik Copy untuk melanjutkan'
            , icon: 'success', confirmButtonText: 'Terima Kasih'
        });
    } else {
        Swal.fire('Dibatalkan', 'Tidak ada teks ', 'error');
    }
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
    if (resultElement.textContent.length > 0) {
        Swal.fire({
            title: 'BERHASIL', text: 'Pesan/password anda telah dikembalikan ke normal', Text: 'Silahkan klik Copy untuk melanjutkan'
            , icon: 'success', confirmButtonText: 'Terima Kasih'
        });
    } else {
        Swal.fire('Dibatalkan', 'Tidak ada teks ', 'error');
    }
}
// Fungsi untuk mengacak pesan
function scrambleMessage() {
    const message = document.getElementById('messageInput').value;

    if (!message) {
        Swal.fire('Error', 'Harap masukkan pesan terlebih dahulu.', 'error');
        return;
    }

    // Encode pesan asli ke Base64
    const encodedMessage = btoa(message);
    const currentUrl = window.location.href.split('?')[0]; // Ambil URL tanpa parameter
    const shareUrl = `${currentUrl}?message=${encodedMessage}`;

    // Tampilkan URL di elemen
    document.getElementById('shareUrl').textContent = shareUrl;
    document.getElementById('shareUrl').style.display = 'inline-block';
    
    // Popup success notification
    Swal.fire({
        title: 'BERHASIL',
        text: 'Pesan anda telah dienkripsi. Silahkan klik Copy untuk melanjutkan',
        icon: 'success',
        confirmButtonText: 'Oke'
    });
}


function copyScrambledMessage() {
    const shareUrl = document.getElementById('shareUrl').textContent;
    navigator.clipboard.writeText(shareUrl).then(() => {
        Swal.fire('Copy Berhasil!', 'URL telah disalin ke clipboard.', 'success');
    });
}




// Fungsi untuk mengembalikan pesan terenkripsi dari URL
function unscrambleMessage() {
    let url = document.getElementById('unscrambleInput').value;

    if (!url) {
        Swal.fire('Error', 'Harap masukkan URL terlebih dahulu.', 'error');
        return;
    }

    // Ambil parameter dari URL
    const urlParams = new URL(url).searchParams;
    const encodedMessage = urlParams.get('message');

    if (encodedMessage) {
        // Decode pesan dari Base64
        let originalMessage = atob(encodedMessage);
        document.getElementById('unscrambledMessage').textContent = originalMessage;
        document.getElementById('copyUnscrambled').style.display = 'block';
    } else {
        Swal.fire('Error', 'URL tidak valid. Pastikan URL mengandung parameter pesan.', 'error');
    }
}

// Fungsi untuk menyalin pesan
function copyToClipboard(elementId) {
    let text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        Swal.fire('Copy Berhasil!', 'Pesan telah disalin ke clipboard.', 'success');
    });
} function copyToClipboard(elementId) {
    Swal.fire({
        title: 'Apakah Anda yakin?',
        text: "Code akan disalin ke clipboard",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjutkan',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            const text = document.getElementById(elementId).textContent;
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    Swal.fire('Copy Berhasil!', 'Code anda telah disalin.', 'success');
                });
            } else {
                // Fallback method for older Android devices
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                Swal.fire('Copy Berhasil!', 'Code anda telah disalin.', 'success');
            }
        } else {
            Swal.fire('Dibatalkan', 'Tidak ada yang disalin', 'error');
        }
    });
}
