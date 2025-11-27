function scrollToForm() {
  document.querySelector('#form').scrollIntoView({ behavior: 'smooth' });
}

/* -------- Bulle et Chat IA -------- */
function toggleChat() {
  const box = document.getElementById("chat-box");
  box.style.display = (box.style.display === "flex") ? "none" : "flex";
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const msg = input.value.trim();
  const chat = document.getElementById("chat-messages");

  if (msg === "") return;

  // Affichage message de l'utilisateur
  chat.innerHTML += `<p><strong>Toi :</strong> ${msg}</p>`;

  // Réponse simple IA
  chat.innerHTML += `<p><strong>IA :</strong> Merci pour ta question ! Nous te répondrons rapidement 😊</p>`;

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
