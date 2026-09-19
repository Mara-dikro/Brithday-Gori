const intro = document.getElementById("intro");
const birthday = document.getElementById("birthday");
const letter = document.getElementById("letter");
const finalScreen = document.getElementById("final");

function show(section) {
  [intro, birthday, letter, finalScreen].forEach(s => s.classList.add("hidden"));
  section.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function confetti(count = 90) {
  const container = document.getElementById("confetti");
  const pieces = ["#ff6f9f", "#ffd166", "#7bdff2", "#b8f2a4", "#cdb4db", "#ff9f68"];
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.animationDuration = (2.5 + Math.random() * 3) + "s";
    piece.style.animationDelay = Math.random() * .8 + "s";
    piece.style.background = pieces[Math.floor(Math.random() * pieces.length)];
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(piece);
    setTimeout(() => piece.remove(), 6500);
  }
}

document.getElementById("openBtn").addEventListener("click", () => {
  show(birthday);
  confetti(55);
});

document.getElementById("continueBtn").addEventListener("click", () => {
  show(letter);
});

document.getElementById("wishBtn").addEventListener("click", () => {
  show(finalScreen);
  confetti(140);
});
