// HTML Elements
const startBtn = document.getElementById("start-btn");
const animationSection = document.getElementById("animation-section");
const leftTyping = document.getElementById("left-typing");
const rightTyping = document.getElementById("right-typing");

// Texts for the left side
const leftTexts = [
  "Sorry Adrita 😔", "Bou Jaan ❤️", "Sorry Jaan 💕", "tmk Sere Jabo Nah Jaan 🥺",
  "Please Forgive Me 🌹", "I Love You Jaan 💖", "Tumi nah amar lokkhi pakhi","jaan goo","bou goo ar korbo nah", "Love You jaan", "sona pakhi goo","Moyna pakhi goo",
  "Abar Hobe Nah ❤️", "Adrita, Rag Koro Nah 💕", "Jaan Amar Sob ❤️"
];
const totalLeftTexts = 100;

// Texts for the right side
const rightTexts = [
  "Sorry (English)", "Lo siento (Spanish)", "Je suis désolé (French)", 
  "对不起 (Chinese)", "ごめんなさい (Japanese)", "미안합니다 (Korean)", 
  "Извините (Russian)", "Maaf (Indonesian)", "Desculpe (Portuguese)", 
  "Perdón (Filipino)", "Üzgünüm (Turkish)", "Scusa (Italian)",
  "Afsorry (Afrikaans)", "Przepraszam (Polish)", "Xin lỗi (Vietnamese)", 
  "Maafkan Saya (Malay)", "Sumimasen (Japanese Formal)", "Je regrette (French)"
];

// Start animation when button is clicked
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  animationSection.style.display = "flex";
  startTyping();
});

// Typing Animation for Left Section
function startTyping() {
  let leftIndex = 0;
  let rightIndex = 0;

  // Typing for Left Section
  function typeLeft() {
    if (leftIndex < totalLeftTexts) {
      const text = document.createElement("p");
      text.className = "typing";
      text.textContent = leftTexts[leftIndex % leftTexts.length];
      leftTyping.appendChild(text);
      leftTyping.scrollTop = leftTyping.scrollHeight;
      leftIndex++;
      setTimeout(typeLeft, 100);
    }
  }

  // Typing for Right Section
  function typeRight() {
    if (rightIndex < rightTexts.length) {
      const text = document.createElement("p");
      text.className = "typing";
      text.textContent = rightTexts[rightIndex];
      rightTyping.appendChild(text);
      rightTyping.scrollTop = rightTyping.scrollHeight;
      rightIndex++;
      setTimeout(typeRight, 100);
    }
  }

  typeLeft();
  typeRight();
}
