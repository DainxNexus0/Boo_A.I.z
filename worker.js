// worker.js - Boo AI Assistant

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // CORS
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders()
      });
    }

    // Main Boo interface
    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(HTML, {
        headers: {
          "Content-Type": "text/html; charset=UTF-8",
          "Cache-Control": "no-store",
          ...corsHeaders()
        }
      });
    }

    // Avatar
    if (url.pathname === "/avatar.png") {
      if (env.ASSETS) {
        return env.ASSETS.fetch(new Request(new URL("/avatar.png", request.url)));
      }

      return new Response("Avatar not found", {
        status: 404,
        headers: corsHeaders()
      });
    }

    // AI chat
    if (url.pathname === "/api/chat" && request.method === "POST") {
      return handleChat(request, env);
    }

    return new Response("Not Found", {
      status: 404,
      headers: corsHeaders()
    });
  }
};


function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
  };
}


async function handleChat(request, env) {
  try {
    if (!env.OPENAI_API_KEY) {
      return json({
        error: "OPENAI_API_KEY is not configured in Cloudflare."
      }, 500);
    }

    const body = await request.json();

    const message = body.message;

    if (!message || typeof message !== "string") {
      return json({
        error: "No message was provided."
      }, 400);
    }

    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-5-mini",
          instructions:
            "You are Boo, a friendly AI assistant. Your name is Boo. Never call yourself J.S. Be helpful, clear, calm, and direct. Keep responses easy to understand.",
          input: message
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return json({
        error: data?.error?.message || "OpenAI request failed."
      }, response.status);
    }

    const text =
      data.output_text ||
      extractResponseText(data) ||
      "I couldn't generate a response.";

    return json({
      reply: text
    });

  } catch (error) {
    return json({
      error: error.message || "Something went wrong."
    }, 500);
  }
}


function extractResponseText(data) {
  try {
    let text = "";

    for (const item of data.output || []) {
      for (const content of item.content || []) {
        if (content.type === "output_text") {
          text += content.text || "";
        }
      }
    }

    return text.trim();
  } catch {
    return "";
  }
}


function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders()
    }
  });
}


const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#08080a">
<title>Boo</title>

<style>

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  background:
    radial-gradient(circle at top, #25164b 0%, #0c0a14 45%, #050507 100%);
  color: white;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  width: 100%;
  max-width: 650px;
  height: 100vh;
  max-height: 900px;
  display: flex;
  flex-direction: column;
  background: rgba(8, 8, 12, 0.88);
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 0 50px rgba(130, 70, 255, 0.25);
}

.topbar {
  min-height: 78px;
  display: flex;
  align-items: center;
  padding: 12px 18px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  background: rgba(20, 15, 35, 0.9);
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  background: #191421;
  border: 2px solid #b98cff;
  box-shadow: 0 0 18px rgba(170,100,255,0.55);
}

.brand-name {
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 1px;
}

.brand-sub {
  font-size: 12px;
  color: #b9aecb;
  margin-top: 3px;
}

#messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.message {
  max-width: 85%;
  padding: 13px 16px;
  border-radius: 16px;
  line-height: 1.45;
  white-space: pre-wrap;
}

.boo {
  align-self: flex-start;
  background: #17121f;
  border: 1px solid rgba(190,140,255,0.22);
}

.user {
  align-self: flex-end;
  background: #30205a;
  border: 1px solid rgba(190,140,255,0.25);
}

.composer {
  display: flex;
  gap: 10px;
  padding: 14px;
  border-top: 1px solid rgba(255,255,255,0.1);
  background: rgba(15,12,22,0.95);
}

#message {
  flex: 1;
  min-width: 0;
  resize: none;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 14px;
  padding: 13px;
  color: white;
  background: #0d0b12;
  outline: none;
  font-size: 16px;
}

#message:focus {
  border-color: #a874ff;
}

#send {
  border: 0;
  border-radius: 14px;
  padding: 0 20px;
  background: #8b5cf6;
  color: white;
  font-weight: 700;
  cursor: pointer;
}

#send:disabled {
  opacity: 0.5;
}

</style>
</head>

<body>

<div id="app">

  <header class="topbar">

    <div class="brand">

      <img
        class="avatar"
        src="/avatar.png"
        onerror="this.style.display='none'"
        alt="Boo"
      >

      <div>
        <div class="brand-name">Boo</div>
        <div class="brand-sub">AI Assistant</div>
      </div>

    </div>

  </header>

  <main id="messages">

    <div class="message boo">
      Hey. I'm Boo. What's up?
    </div>

  </main>

  <form class="composer" id="chatForm">

    <textarea
      id="message"
      rows="1"
      placeholder="Talk to Boo..."
      autocomplete="off"
    ></textarea>

    <button id="send" type="submit">
      Send
    </button>

  </form>

</div>


<script>

const form = document.getElementById("chatForm");
const input = document.getElementById("message");
const send = document.getElementById("send");
const messages = document.getElementById("messages");


function addMessage(text, type) {
  const div = document.createElement("div");

  div.className = "message " + type;
  div.textContent = text;

  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;

  return div;
}


form.addEventListener("submit", async (event) => {

  event.preventDefault();

  const message = input.value.trim();

  if (!message) {
    return;
  }

  addMessage(message, "
