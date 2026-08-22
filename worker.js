export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders()
      });
    }

    // Main app
    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(getHTML(), {
        headers: {
          "Content-Type": "text/html; charset=UTF-8",
          "Cache-Control": "no-store",
          ...corsHeaders()
        }
      });
    }

    // Avatar
    if (url.pathname === "/avatar.png") {
      return getAvatar(env);
    }

    // Chat API
    if (url.pathname === "/api/chat" && request.method === "POST") {
      return handleChat(request, env);
    }

    return new Response("Not Found", {
      status: 404,
      headers: corsHeaders()
    });
  }
};


// ========================================
// CORS
// ========================================

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
  };
}


// ========================================
// HTML
// ========================================

function getHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <meta
    name="theme-color"
    content="#08080a"
  >

  <title>J.S.</title>

  <style>
${getCSS()}
  </style>
</head>

<body>

  <div id="app">

    <header class="topbar">

      <div class="brand">

        <div class="mini-avatar">
          <img
            src="/avatar.png"
            alt="J.S."
          >
        </div>

        <div>
          <div class="brand-name">J.S.</div>

          <div class="online">
            <span></span>
            Online
          </div>
        </div>

      </div>

      <button
        id="menuButton"
        class="menu-button"
        type="button"
      >
        ☰
      </button>

    </header>


    <main>

      <section class="avatar-section">

        <div
          id="avatarContainer"
          class="avatar-container"
        >

          <div class="avatar-glow"></div>

          <div class="avatar-ring"></div>

          <img
            id="mainAvatar"
            class="main-avatar"
            src="/avatar.png"
            alt="J.S. responsive avatar"
          >

        </div>

        <h1>J.S.</h1>

        <div
          id="assistantStatus"
          class="assistant-status"
        >
          Ready
        </div>

      </section>


      <section
        id="chatContainer"
        class="chat-container"
      >

        <div class="message assistant">

          <div class="message-avatar">
            <img
              src="/avatar.png"
              alt="J.S."
            >
          </div>

          <div class="bubble">
            What's up? I'm ready.
          </div>

        </div>

      </section>

    </main>


    <footer class="input-area">

      <form id="chatForm">

        <textarea
          id="messageInput"
          placeholder="Talk to J.S..."
          rows="1"
        ></textarea>

        <button
          id="sendButton"
          type="submit"
        >
          ➤
        </button>

      </form>

      <div class="hint">
        J.S. is ready when you are.
      </div>

    </footer>


    <div
      id="menuPanel"
      class="menu-panel"
      hidden
    >

      <button
        id="closeMenu"
        type="button"
      >
        Close
      </button>

      <h2>J.S.</h2>

      <p>
        Assistant controls
      </p>

    </div>

  </div>


  <script>
${getJavaScript()}
  </script>

</body>
</html>`;
}


// ========================================
// CSS
// ========================================

function getCSS() {
  return `
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
  background: #08080a;
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  min-height: 100vh;
  overflow-x: hidden;
}

button,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.topbar {
  height: 72px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  border-bottom: 1px solid rgba(255,255,255,.08);
  background: rgba(8,8,10,.92);
  backdrop-filter: blur(12px);
  position: relative;
  z-index: 10;
}

.brand {
  display: flex;
  align-items: center;
  gap: 11px;
}

.mini-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.18);
  background: #111116;
  flex-shrink: 0;
}

.mini-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.brand-name {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: .4px;
}

.online {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
  color: rgba(255,255,255,.55);
  font-size: 12px;
}

.online span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #42e879;
  box-shadow: 0 0 9px rgba(66,232,121,.8);
}

.menu-button {
  border: 0;
  background: transparent;
  color: white;
  font-size: 25px;
  width: 44px;
  height: 44px;
  border-radius: 12px;
}

.menu-button:hover {
  background: rgba(255,255,255,.08);
}

main {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.avatar-section {
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px 15px;
  text-align: center;
}

.avatar-container {
  width: min(250px, 65vw);
  height: min(250px, 65vw);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

.avatar-glow {
  position: absolute;
  inset: 8%;
  border-radius: 50%;
  background: rgba(255,255,255,.09);
  filter: blur(30px);
  transform: scale(.9);
  opacity: .65;
  transition:
    transform .25s ease,
    opacity .25s ease;
}

.avatar-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,.18);
  box-shadow:
    0 0 25px rgba(255,255,255,.08),
    inset 0 0 25px rgba(255,255,255,.05);
  pointer-events: none;
  transition:
    transform .2s ease,
    border-color .2s ease;
}

.main-avatar {
  position: relative;
  width: 86%;
  height: 86%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  z-index: 2;
  border: 1px solid rgba(255,255,255,.14);
  box-shadow: 0 10px 50px rgba(0,0,0,.45);
  transition:
    transform .2s ease,
    filter .2s ease;
}

.avatar-container.active .main-avatar {
  transform: scale(1.035);
}

.avatar-container.active .avatar-ring {
  transform: scale(1.08);
  border-color: rgba(255,255,255,.38);
}

.avatar-container.active .avatar-glow {
  transform: scale(1.12);
  opacity: .95;
}

.avatar-section h1 {
  margin: 0;
  font-size: 25px;
  letter-spacing: .8px;
}

.assistant-status {
  margin-top: 5px;
  color: rgba(255,255,255,.52);
  font-size: 13px;
}

.chat-container {
  width: min(900px, 100%);
  margin: 0 auto;
  padding: 15px 18px 25px;
  flex: 1;
}

.message {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 14px;
}

.message-avatar {
  width: 34px;
  height: 34px;
  flex: 0 0 34px;
  overflow: hidden;
  border-radius: 50%;
  background: #111116;
}

.message-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bubble {
  max-width: min(620px, 78%);
  padding: 12px 15px;
  border-radius: 16px;
  background: #17171c;
  border: 1px solid rgba(255,255,255,.07);
  line-height: 1.45;
  font-size: 15px;
}

.input-area {
  width: 100%;
  margin: 0 auto;
  padding: 12px 18px 18px;
}

#chatForm {
  display: flex;
  align-items: flex-end;
  gap: 9px;
  max-width: 900px;
  margin: 0 auto;
}

#messageInput {
  flex: 1;
  resize: none;
  min-height: 48px;
  max-height: 150px;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 16px;
  outline: none;
  padding: 14px 15px;
  color: white;
  background: #121216;
}

#messageInput:focus {
  border-color: rgba(255,255,255,.28);
}

#messageInput::placeholder {
  color: rgba(255,255,255,.38);
}

#sendButton {
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 15px;
  background: white;
  color: #09090b;
  font-size: 21px;
  font-weight: 700;
}

#sendButton:disabled {
  opacity: .45;
  cursor: not-allowed;
}

.hint {
  max-width: 900px;
  margin: 7px auto 0;
  text-align: center;
  color: rgba(255,255,255,.3);
  font-size: 11px;
}

.menu-panel {
  position: fixed;
  top: 70px;
  right: 15px;
  width: 230px;
  padding: 18px;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 16px;
  background: rgba(18,18,22,.97);
  box-shadow: 0 20px 50px rgba(0,0,0,.45);
  z-index: 30;
}

.menu-panel button {
  float: right;
  border: 0;
  border-radius: 8px;
  padding: 6px 9px;
  background: rgba(255,255,255,.08);
  color: white;
}

.menu-panel h2 {
  margin-top: 15px;
  margin-bottom: 5px;
}

.menu-panel p {
  color: rgba(255,255,255,.55);
  font-size: 13px;
}

@media (max-width: 600px) {
  .avatar-section {
    min-height: 300px;
    padding-top: 20px;
  }

  .avatar-container {
    width: 210px;
    height: 210px;
  }

  .bubble {
    max-width: 82%;
  }
}
`;
}


// ========================================
// JAVASCRIPT
// ========================================

function getJavaScript() {
  return `
const chatForm =
  document.getElementById("chatForm");

const messageInput =
  document.getElementById("messageInput");

const sendButton =
  document.getElementById("sendButton");

const chatContainer =
  document.getElementById("chatContainer");

const avatarContainer =
  document.getElementById("avatarContainer");

const assistantStatus =
  document.getElementById("assistantStatus");

const menuButton =
  document.getElementById("menuButton");

const menuPanel =
  document.getElementById("menuPanel");

const closeMenu =
  document.getElementById("closeMenu");


// MENU

menuButton.addEventListener("click", () => {
  menuPanel.hidden = !menuPanel.hidden;
});

closeMenu.addEventListener("click", () => {
  menuPanel.hidden = true;
});


// TEXTAREA

messageInput.addEventListener("input", () => {
  messageInput.style.height = "auto";

  messageInput.style.height =
    Math.min(messageInput.scrollHeight, 150) + "px";
});


// AVATAR ANIMATION

function avatarActive(active) {

  if (active) {

    avatarContainer.classList.add("active");

    assistantStatus.textContent =
      "Thinking...";

  } else {

    avatarContainer.classList.remove("active");

    assistantStatus.textContent =
      "Ready";
  }
}


// ADD MESSAGE

function addMessage(text, type) {

  const message =
    document.createElement("div");

  message.className =
    "message " + type;

  if (type === "assistant") {

    message.innerHTML = \`
      <div class="message-avatar">
        <img
          src="/avatar.png"
          alt="J.S."
        >
      </div>

      <div class="bubble"></div>
    \`;

  } else {

    message.innerHTML = \`
      <div class="bubble"></div>
    \`;
  }

  message.querySelector(".bubble").textContent =
    text;

  chatContainer.appendChild(message);

  message.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
}


// CHAT
chatForm.addEventListener("submit", async (event) => {

  event.preventDefault();

  const message =
    messageInput.value.trim();

  if (!message) {
    return;
  }

  addMessage(message, "user");

  messageInput.value = "";
  messageInput.style.height = "auto";

  sendButton.disabled = true;
  avatarActive(true);

  try {

    const response =
      await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
      });

    if (!response.ok) {
      throw new Error("Bad response: " + response.status);
    }

    const data = await response.json();

    addMessage(
      data.reply || "No reply received.",
      "assistant"
    );

  } catch (error) {

    console.error(error);

    addMessage(
      "Something went wrong connecting to J.S.",
      "assistant"
    );

  } finally {

    avatarActive(false);

    sendButton.disabled = false;

    messageInput.focus();

  }

});

  `;
}


// ========================================
// AVATAR
// ========================================

async function getAvatar(env) {

  if (!env || !env.AVATAR_URL) {

    return new Response(
      "Avatar is not configured yet.",
      {
        status: 404,
        headers: corsHeaders()
      }
    );
  }

  try {

    const response =
      await fetch(env.AVATAR_URL);

    if (!response.ok) {

      return new Response(
        "Avatar could not be loaded.",
        {
          status: 404,
          headers: corsHeaders()
        }
      );
    }

    return new Response(
      response.body,
      {
        status: 200,
        headers: {
          "Content-Type":
            response.headers.get("Content-Type") ||
            "image/png",

          "Cache-Control":
            "public, max-age=86400",

          ...corsHeaders()
        }
      }
    );

  } catch (error) {

    console.error("Avatar error:", error);

    return new Response(
      "Avatar error.",
      {
        status: 500,
        headers: corsHeaders()
      }
    );
  }
}


// ========================================
// CHAT API
// ========================================

async function handleChat(request, env) {

  try {

    const body =
      await request.json();

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    if (!message) {

      return new Response(
        JSON.stringify({
          error: "Message is required."
        }),
        {
          status: 400,
          headers: {
            "Content-Type":
              "application/json",
            ...corsHeaders()
          }
        }
      );
    }

    const reply =
      "J.S. received: " + message;

    return new Response(
      JSON.stringify({
        reply: reply
      }),
      {
        status: 200,
        headers: {
          "Content-Type":
            "application/json",
          ...corsHeaders()
        }
      }
    );

  } catch (error) {

    console.error("Chat error:", error);

    return new Response(
      JSON.stringify({
        error: "Unable to process request."
      }),
      {
        status: 500,
        headers: {
          "Content-Type":
            "application/json",
          ...corsHeaders()
        }
      }
    );
  }
}
