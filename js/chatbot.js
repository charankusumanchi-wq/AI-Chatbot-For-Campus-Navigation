// chatbot.js — Pragati Engineering College Campus AI Navigator
// Calls the Flask /chat API endpoint for all responses.

document.addEventListener('DOMContentLoaded', function () {

  const input = document.getElementById('userInput');
  if (input) {
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
      }
    });
    setTimeout(() => input.focus(), 300);
  }

  // Staggered sidebar animation
  const btns = document.querySelectorAll('.place-btn');
  btns.forEach((btn, i) => {
    btn.style.opacity = '0';
    btn.style.transform = 'translateX(-10px)';
    btn.style.transition = 'opacity 0.3s ease, transform 0.3s ease, background 0.2s, color 0.2s, border-color 0.2s';
    setTimeout(() => {
      btn.style.opacity = '1';
      btn.style.transform = 'translateX(0)';
    }, 80 + i * 40);
  });

});

// ── Helpers ──────────────────────────────────────────────────────────────────

function getTime() {
  const n = new Date();
  return n.getHours().toString().padStart(2, '0') + ':' + n.getMinutes().toString().padStart(2, '0');
}

function scrollToBottom() {
  const c = document.getElementById('chatMessages');
  if (c) c.scrollTop = c.scrollHeight;
}

// ── Render a message bubble ───────────────────────────────────────────────────

function appendMsg(text, who) {
  const container = document.getElementById('chatMessages');

  // Hide welcome banner on first message
  const wb = document.getElementById('welcomeBanner');
  if (wb) wb.style.display = 'none';

  const row = document.createElement('div');
  row.className = 'msg-row ' + who;

  const avatar = document.createElement('div');
  avatar.className = 'msg-avatar';
  avatar.textContent = who === 'bot' ? '🤖' : '👤';

  const content = document.createElement('div');
  content.className = 'msg-content';

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';

  // Bot replies may contain emoji + plain text from Flask — render as-is
  bubble.textContent = text;

  const time = document.createElement('div');
  time.className = 'msg-time';
  time.textContent = getTime();

  content.appendChild(bubble);
  content.appendChild(time);
  row.appendChild(avatar);
  row.appendChild(content);
  container.appendChild(row);
  scrollToBottom();
}

// ── Send a message to the Flask /chat endpoint ────────────────────────────────

async function sendMessage() {
  const inp = document.getElementById('userInput');
  const msg = inp ? inp.value.trim() : '';
  if (!msg) return;
  inp.value = '';

  appendMsg(msg, 'user');

  // Show typing indicator
  const typingRow = document.getElementById('typingRow');
  if (typingRow) {
    typingRow.classList.add('show');
    scrollToBottom();
  }

  try {
    const response = await fetch('/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: msg })
    });

    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();

    if (typingRow) typingRow.classList.remove('show');
    appendMsg(data.reply || "I didn't get a response. Please try again.", 'bot');

  } catch (err) {
    if (typingRow) typingRow.classList.remove('show');
    appendMsg("Connection error. Make sure the server is running and try again.", 'bot');
    console.error('Chat API error:', err);
  }
}

// ── Quick-ask from sidebar / chips ────────────────────────────────────────────

function quickAsk(place, emoji) {
  const inp = document.getElementById('userInput');
  if (inp) inp.value = place;

  // Highlight active sidebar button
  document.querySelectorAll('.place-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.place-btn').forEach(b => {
    if (emoji && b.querySelector('.place-icon') && b.querySelector('.place-icon').textContent === emoji) {
      b.classList.add('active');
    }
  });

  sendMessage();
}

// ── Clear chat ────────────────────────────────────────────────────────────────

function clearChat() {
  const c = document.getElementById('chatMessages');
  c.innerHTML = `
    <div class="welcome-banner" id="welcomeBanner">
      <div class="welcome-icon">🤖</div>
      <div class="welcome-title">Hello! I'm your Campus AI</div>
      <div class="welcome-sub">Ask me about any location, building, lab, or facility at Pragati Engineering College and I'll guide you there instantly.</div>
      <div class="chips-row">
        <div class="chip" onclick="quickAsk('Where is the library?','')">📚 Library</div>
        <div class="chip" onclick="quickAsk('Where is the canteen?','')">🍴 Canteen</div>
        <div class="chip" onclick="quickAsk('Where is the fee counter?','')">💰 Fee Counter</div>
        <div class="chip" onclick="quickAsk('Where is the hostel?','')">🏠 Hostel</div>
        <div class="chip" onclick="quickAsk('Where is the seminar hall?','')">🎤 Seminar Hall</div>
      </div>
    </div>`;
  document.querySelectorAll('.place-btn').forEach(b => b.classList.remove('active'));
}