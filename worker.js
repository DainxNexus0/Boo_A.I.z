const INDEX_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Boo AI</title>
  <link rel="stylesheet" href="/styles.css">
</head>

<body>

  <main class="app">

    <!-- Boo -->
    <section class="boo-header">
      <img
        src="/BooAiz.png"
        alt="Boo AI"
        class="contact-icon boo-image"
      >

      <div class="boo-title">
        <h1>Boo</h1>
        <p>Your AI companion</p>
      </div>
    </section>

    <!-- Main Navigation -->
    <nav class="main-nav">
      <button id="booButton" type="button">
        <img src="/BooAiz.png" class="contact-icon">Boo
      </button>

      <button id="diaryButton" type="button">
        📔 Diary
      </button>

      <button id="dadLensButton" type="button">
        🐻👑 Dad Lens
      </button>
    </nav>

    <!-- Boo Chat -->
    <section id="booSection" class="section active">

      <div id="chatMessages" class="chat-messages">
        <div class="message boo-message">
          Hey, I'm Boo. What's on your mind?
        </div>
      </div>

      <form id="chatForm" class="chat-form">
        <input
          id="chatInput"
          type="text"
          placeholder="Talk to Boo..."
          autocomplete="off"
        >

        <button type="submit">
          Send
        </button>
      </form>

    </section>

    <!-- Private Diary -->
    <section id="diarySection" class="section hidden">

      <div class="section-header">
        <h2>📔 Diary</h2>
        <p>Your private space.</p>
      </div>

      <div id="diaryLock" class="diary-lock">
        <div class="key-icon">🔑</div>

        <h3>Private Diary</h3>

        <p>
          This space is protected.
        </p>

        <button id="unlockDiaryButton" type="button">
          Unlock Diary
        </button>
      </div>

      <div id="diaryContent" class="diary-content hidden">

        <textarea
          id="diaryText"
          placeholder="Write whatever is on your mind..."
        ></textarea>

        <button id="saveDiaryButton" type="button">
          Save Diary
        </button>

      </div>

    </section>

    <!-- Dad Lens -->
    <section id="dadLensSection" class="section hidden">

      <div class="dad-lens-header">

        <div class="papa-bear-icon">
          🐻👑
        </div>

        <div>
          <h2>Dad Lens</h2>
          <p>Dad's principles and perspective.</p>
        </div>

      </div>

      <div class="dad-lens-content">

        <p>
          Dad Lens is a perspective you can choose to look through
          when you need another way to think about something.
        </p>

        <button id="perspectiveButton" type="button">
          See Dad's Perspective
        </button>

        <button id="sendToDadButton" type="button">
          Send a Message to Dad
        </button>

      </div>

      <div id="dadLensResponse" class="dad-lens-response hidden"></div>

    </section>

  </main>

  <script src="/script.js"></script>

</body>
</html>`;

const STYLES_CSS = `/* =========================================================
   BOO AI
   Emo Princess / Fantasy Valley Foundation
   ========================================================= */

:root {
  --midnight: #0d0920;
  --deep-purple: #211238;
  --purple: #51356f;
  --lavender: #bca6dc;

  --silver: #d9dce8;
  --silver-soft: #aeb4c7;

  --gold: #d9b765;
  --gold-bright: #f0d58a;

  --ruby: #8f1830;
  --ruby-glow: #c52f4d;

  --glass: rgba(13, 9, 32, 0.72);
  --glass-light: rgba(255, 255, 255, 0.08);

  --text: #f5f1fb;
  --text-soft: #c9c1d8;

  --shadow: rgba(0, 0, 0, 0.45);
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  min-height: 100%;
  font-family: Georgia, "Times New Roman", serif;
  color: var(--text);
  background: var(--midnight);
}

body {
  min-height: 100vh;
  overflow-x: hidden;

  background:
    radial-gradient(circle at 50% 10%, rgba(124, 91, 161, 0.35), transparent 35%),
    linear-gradient(to bottom, #17112c 0%, #2b2142 45%, #172b2a 72%, #0b1818 100%);
}

.app {
  position: relative;
  width: min(100%, 1100px);
  min-height: 100vh;
  margin: 0 auto;
  padding: 24px;

  background:
    radial-gradient(circle at 20% 80%, rgba(143, 24, 48, 0.08), transparent 22%),
    radial-gradient(circle at 80% 20%, rgba(217, 183, 101, 0.08), transparent 25%);
}

.app::before,
.app::after {
  content: "";
  position: fixed;
  pointer-events: none;
  z-index: 0;
}

.app::before {
  left: -10%;
  right: -10%;
  bottom: -40px;
  height: 260px;

  background:
    linear-gradient(135deg, transparent 25%, rgba(24, 38, 38, 0.9) 26%, rgba(38, 57, 50, 0.9) 48%, transparent 49%),
    linear-gradient(225deg, transparent 25%, rgba(17, 29, 30, 0.95) 26%, rgba(35, 52, 47, 0.95) 48%, transparent 49%);

  opacity: 0.9;
}

.app::after {
  width: 7px;
  height: 7px;
  top: 18%;
  left: 12%;

  background: var(--ruby);
  border-radius: 50%;

  box-shadow:
    0 0 8px rgba(197, 47, 77, 0.65),
    210px 120px 0 -1px var(--gold),
    540px 70px 0 -2px var(--ruby),
    760px 190px 0 -1px var(--silver),
    900px 90px 0 -2px var(--gold);

  opacity: 0.65;
}

.boo-header {
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  gap: 18px;

  margin-bottom: 20px;
  padding: 18px;

  background: var(--glass);
  border: 1px solid rgba(217, 183, 101, 0.35);
  border-radius: 24px;

  box-shadow:
    0 12px 35px var(--shadow),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(14px);
}

.boo-image {
  width: 82px;
  height: 82px;

  object-fit: cover;

  border-radius: 50%;

  border: 2px solid var(--silver);

  box-shadow:
    0 0 0 3px rgba(217, 183, 101, 0.18),
    0 0 24px rgba(217, 183, 101, 0.2);
}

.boo-title h1 {
  margin: 0;

  font-size: clamp(2rem, 5vw, 3rem);
  letter-spacing: 0.04em;

  color: var(--gold-bright);

  text-shadow: 0 2px 12px rgba(217, 183, 101, 0.3);
}

.boo-title p {
  margin: 4px 0 0;
  color: var(--text-soft);
}

.main-nav {
  position: relative;
  z-index: 3;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-bottom: 18px;
}

.main-nav button,
.chat-form button,
.dad-lens-content button,
.diary-lock button,
.diary-content button {
  border: 1px solid rgba(217, 183, 101, 0.55);

  color: var(--text);

  background: linear-gradient(135deg, rgba(81, 53, 111, 0.9), rgba(31, 18, 55, 0.9));

  border-radius: 14px;

  padding: 11px 16px;

  font-family: inherit;
  font-size: 0.98rem;

  cursor: pointer;

  box-shadow:
    0 5px 15px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.main-nav button:hover,
.chat-form button:hover,
.dad-lens-content button:hover,
.diary-lock button:hover,
.diary-content button:hover {
  transform: translateY(-2px);

  border-color: var(--gold-bright);

  box-shadow:
    0 7px 20px rgba(0, 0, 0, 0.35),
    0 0 14px rgba(217, 183, 101, 0.12);
}

.section {
  position: relative;
  z-index: 2;

  min-height: 480px;

  padding: 20px;

  background: var(--glass);

  border: 1px solid rgba(217, 183, 101, 0.25);
  border-radius: 26px;

  box-shadow:
    0 18px 45px var(--shadow),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);

  backdrop-filter: blur(16px);
}

.hidden {
  display: none !important;
}

.chat-messages {
  min-height: 360px;
  max-height: 55vh;

  overflow-y: auto;

  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message {
  width: fit-content;
  max-width: min(80%, 650px);

  padding: 13px 16px;

  line-height: 1.5;

  border-radius: 18px;

  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
}

.boo-message {
  align-self: flex-start;

  background: linear-gradient(135deg, rgba(81, 53, 111, 0.9), rgba(42, 27, 67, 0.92));

  border: 1px solid rgba(192, 174, 220, 0.28);
}

.user-message {
  align-self: flex-end;

  background: linear-gradient(135deg, rgba(105, 78, 120, 0.9), rgba(55, 36, 75, 0.92));

  border: 1px solid rgba(217, 183, 101, 0.28);
}

.chat-form {
  display: flex;
  gap: 10px;

  margin-top: 16px;
}

.chat-form input {
  flex: 1;

  min-width: 0;

  padding: 14px 16px;

  color: var(--text);

  background: rgba(7, 5, 16, 0.62);

  border: 1px solid rgba(192, 174, 220, 0.3);
  border-radius: 15px;

  outline: none;

  font-family: inherit;
  font-size: 1rem;
}

.chat-form input::placeholder {
  color: #aaa2b9;
}

.chat-form input:focus {
  border-color: var(--gold);

  box-shadow:
    0 0 0 3px rgba(217, 183, 101, 0.1),
    0 0 16px rgba(217, 183, 101, 0.08);
}

.section-header h2,
.dad-lens-header h2 {
  margin-top: 0;
  color: var(--gold-bright);
}

.section-header p,
.dad-lens-header p {
  color: var(--text-soft);
}

.diary-lock {
  display: grid;
  place-items: center;

  min-height: 340px;

  text-align: center;

  padding: 30px;
}

.key-icon {
  font-size: 3rem;

  filter: drop-shadow(0 0 10px rgba(217, 183, 101, 0.25));
}

.diary-lock h3 {
  margin-bottom: 8px;
  color: var(--silver);
}

.diary-lock p {
  color: var(--text-soft);
}

.diary-content textarea {
  width: 100%;
  min-height: 340px;

  resize: vertical;

  padding: 18px;

  color: var(--text);

  background: rgba(7, 5, 16, 0.62);

  border: 1px solid rgba(192, 174, 220, 0.28);
  border-radius: 18px;

  outline: none;

  font-family: inherit;
  font-size: 1rem;
  line-height: 1.6;
}

.diary-content textarea:focus {
  border-color: var(--gold);
}

.dad-lens-header {
  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 25px;
}

.papa-bear-icon {
  display: grid;
  place-items: center;

  width: 72px;
  height: 72px;

  font-size: 2.3rem;

  border-radius: 50%;

  background: radial-gradient(circle, rgba(217, 183, 101, 0.18), rgba(81, 53, 111, 0.4));

  border: 1px solid rgba(217, 183, 101, 0.45);

  box-shadow: 0 0 22px rgba(217, 183, 101, 0.1);
}

.dad-lens-content {
  display: flex;
  flex-direction: column;
  gap: 14px;

  max-width: 700px;
}

.dad-lens-content p {
  color: var(--text-soft);
  line-height: 1.7;
}

.dad-lens-response {
  margin-top: 25px;

  padding: 18px;

  background: rgba(7, 5, 16, 0.55);

  border-left: 3px solid var(--gold);

  border-radius: 12px;

  color: var(--text);
  line-height: 1.6;
}

* {
  scrollbar-width: thin;
  scrollbar-color: var(--purple) var(--midnight);
}

.contact-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
  vertical-align: middle;
}

@media (max-width: 650px) {
  .app {
    padding: 14px;
  }

  .boo-header {
    flex-direction: column;
    text-align: center;
  }
}`;

const SCRIPT_JS = `const booButton = document.getElementById("booButton");
const diaryButton = document.getElementById("diaryButton");
const dadLensButton = document.getElementById("dadLensButton");

const booSection = document.getElementById("booSection");
const diarySection = document.getElementById("diarySection");
const dadLensSection = document.getElementById("dadLensSection");

const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

const unlockDiaryButton = document.getElementById("unlockDiaryButton");
const diaryLock = document.getElementById("diaryLock");
const diaryContent = document.getElementById("diaryContent");

const saveDiaryButton = document.getElementById("saveDiaryButton");
const diaryText = document.getElementById("diaryText");

const perspectiveButton = document.getElementById("perspectiveButton");
const sendToDadButton = document.getElementById("sendToDadButton");
const dadLensResponse = document.getElementById("dadLensResponse");

function showSection(section) {
  booSection.classList.add("hidden");
  diarySection.classList.add("hidden");
  dadLensSection.classList.add("hidden");

  section.classList.remove("hidden");
}

booButton.addEventListener("click", () => {
  showSection(booSection);
});

diaryButton.addEventListener("click", () => {
  showSection(diarySection);
});

dadLensButton.addEventListener("click", () => {
  showSection(dadLensSection);
});

function addMessage(text, type) {
  const message = document.createElement("div");

  message.className =
    type === "user"
      ? "message user-message"
      : "message boo-message";

  message.textContent = text;

  chatMessages.appendChild(message);

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const message = chatInput.value.trim();

  if (!message) {
    return;
  }

  addMessage(message, "user");

  chatInput.value = "";
  chatInput.disabled = true;

  try {
    const response = await fetch("/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: message
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Boo couldn't respond.");
    }

    addMessage(data.response || "Boo didn't have a response.", "boo");

  } catch (error) {
    console.error(error);

    addMessage(
      "I couldn't reach Boo's brain right now. Try again in a moment.",
      "boo"
    );

  } finally {
    chatInput.disabled = false;
    chatInput.focus();
  }
});

const savedDiary = localStorage.getItem("booDiary");

if (savedDiary) {
  diaryText.value = savedDiary;
}

unlockDiaryButton.addEventListener("click", () => {
  diaryLock.classList.add("hidden");
  diaryContent.classList.remove("hidden");

  diaryText.focus();
});

saveDiaryButton.addEventListener("click", () => {
  localStorage.setItem("booDiary", diaryText.value);

  saveDiaryButton.textContent = "Saved ✓";

  setTimeout(() => {
    saveDiaryButton.textContent = "Save Diary";
  }, 1500);
});

perspectiveButton.addEventListener("click", () => {
  dadLensResponse.textContent =
    "Dad Lens is here to help you slow down, think clearly, and look at the situation from another perspective.";

  dadLensResponse.classList.remove("hidden");
});

sendToDadButton.addEventListener("click", () => {
  dadLensResponse.textContent =
    "The Send to Dad feature will be connected separately so a message is intentionally sent to Dad. Your private diary stays separate.";

  dadLensResponse.classList.remove("hidden");
});

showSection(booSection);`;

const BOO_IMAGE_BASE64 = "iVBORw0KGgoAAAANSUhEUgAAAMgAAACpCAYAAABu8HJhAAEAAElEQVR42qT9949lWbbnh322Oe76cOltVWVVVle1ff26n3/jqRm6eaRmRJGghiQ0EEWBIPQvSIAA/aDfJAESSEGEzEAiOZyhNBpv38yzbctmVfrMiMzw1x6/jX7YJyIjqrKqSSkaieqMPHHi3nPX3nut9TVL/PSnP/V0X845bt68ycbGxsm3WCwWPHz4ECEEAEII3nnnHdI0Pb3m4OCAZ8+eIaUEQGvN3bt3iaKIL35NZzMeP36EEOFaKQR3794lSZLTa1682GF3dxcpJd5Dmqa88847p/cHePToEdPpFCklzjnW1tZ44403AA8InHN8+umn1HWFEOGaq1evcunSpdN75EXO55/fRwiB1hKtI96+83b3e8J99vZ22dnZQUoFQBzH3H33LsIbsDXWtDx7/JDnO/sM1i8Cnl4v49133z/3vh88eMBisTh9vePxmDfffJNXz95y795n1HWNEOH1X758kcuXr55eU5Yln3322enfvfe89dZbDIfD0+8dHx/z5Mnj09crpeTu3bvEcXz6nra3t9k/PEDrCJwjSyJu37yG1BohFULGPHn6jOl0ihDgrGVzc5MbN26c3sNay6effkrbtqev9/r162xtbZ15vQWfff55+JHu9d65c4fBYPCF1/uk+6w9Sinefffdc7Gzs73N3v5+eHbekaU97t595zQmAR4+fMB8vkRKcRoPt2/f5mxsh3h49Xy/GA9VVfHZZ5/h/emSQH8pggVf/eXB41//D6d/xLlf8OVL/cllX/mrTi45eaivu1/4/ut+WnzhdZ0sbL70faU0kVbkqwWPd56zWq1oq4L3v/XdMw9fdK9HIPAIkzN9/FOa1Yyf/+zn/N5PPmC2rPnur/4237twFSFhPp/zt//Wf8P0+Ig7b7/L93/ww9MN4au/xGue6fnvCSFOA+nkGfy3udfZ93KygUUCZLNgtvuU+eoIXqwRaY3Sit5kC9kK4tbjdB8vFPzC1/81H+bXBlV4r+c/5y+8r7Mfnv/iZ/n1z+z/3y/92t/x2vfpu0csXh/Q3Z+vvMEX7iV8WGriK96td+DF1z/Ukwf7dVecez3i1f9x1rC3/Zg/+Ed/h08//pCnT5+ws7tP2hvwH/zV/wn/7r//V7vXavG2JBWeUeywywN+/qMP+Zt///f48NEes8pgjGFn/4i9lzt4BPc++YQnjx/RyxJ0lPLv/JX/gB/+2m983Sd7+n5OFkE41fS5Z9a2LXVd4r1HSoWUAqXOB66U4ny4nLlPkS85Otjl8b2P2X/+kO1njzjaf4FvDUoKBqnm5oUJVy9vceHKZdIowRCh0jXEMAKufc3i+wWf99dc578U9OKLyyf876sW0GkMnr1GfMWm+otey/l767Pf+Kpgc879wgdxdlf72hPkzJv5ut/pvcN7gffu/8ff6XHO4ZxDKo3SGq0U8+NDth9+ytNPfsInH3/Mh/ce8mJvn6IoSaKIsWj5g//6/4o8esLaxgVEJLmy0UcqzydPHvPJZ4/4g48f8fRghYxipLSMBn0Ujg9//Ies8pzlMscZg3eaqir5z/7T/yNJmvLmnXcwxrz29Uqp8EDbVlRlyWq5YH/3Od55jg4PmE2nFEVOXqxwzqFVRJIkfPLBT5isrbO+scnFi5cRSuOcRUcaISRCeO598iH/4O/8LT742Y852t+jKQu8d6zyAiElaZJQVhXetlxd63Prwpi3blxkMsi4dv0KWxc3aR/v8yLfY3L72/RGm6fP/etiw3uw1p2Gq/+KzzB81ufj4kvXOIeX4msyh1dxEO7hvzZuXnePk/dzcmoJQCyXy3OXHh8fk+f56VGepimbmxvnVuTe3h7GGIQIL3gwGDAajU4flHOO/f19rLXnHp7zjizLWF9b73aM8PNfvN9oNGI4HJ7+rDGGvb290x3Le8/GxgZJkpxeU5YlR0eH4XV36dCFCxeIk5RiOeXBxz/n4ScfsPfsAdfGGQ93dvkb//RHbL/cJ00i3rpymTuX1ljXNcKUyDjjl3/zt3n3m98gz+f8k3/4z/jjT5/y8c6MWWUZDnooPGvjIb0sQwtBWVaUdYX3njiJsRaWZU1R1fzmb/0W/8v/1f+aLM1QWlPXFTvPn1HkOcfHRxwdHbD/YoflYoZpatq2BSCJY5IoQkmFcRYA68PCr8oS60JADPp9lI5QOiLOMi5cvMLtN97kk48/5K/9X/5ztp89QUvJxmSA1pLZqkQCEodUERcmfd7Y6GPrilVVU1vPxqjHxfURly9f4sabt7l54xp6chk27uD0gM2ti+gzJ9h0Oj0XOzrSXNi8APJV5nFwcHBaB3jvybKMjY310/hyzrG3t3caO957xuMxg+Hg9B5t27K/v9+l6a/i4WxdXBQFx8fHiK5uFUJwYWvr3Kk8ny9YLhevXq/WXLhw4VzM6rMFE8Dh4SGr1QqlFM45lFIMBsNz1zx79oyyLM8tkLOFonOOJ0+enBZwJ7uH844kjs9d673nyZMn54qntcnk3DV1XZPn+enx6L3j8uXL566x1rJa5Sil8Hi0VAwGA/aefM4f/N3/mocf/4zFbIbxnj2d8rsffMaiqFhfGzPOYn71nWu4+Qv6WnHzvW/y3vd/mcvXrrFcLPmjP/6AP/jkGX94f5eytSRxxPPnO6yNR9y+fo3j6RRnDLFWCOdx3rPMC4ROaZzHS8nf/Xt/n7/0l/8tfvO3fpsHn9/j5z/9CZ/f+xhnDFoJtBT0s5T1foYcDtCRQgpBax10n4N1Dm9NOB29Q6+NsC7svFmWnj4b5zyHzx+w/fAexhh+69d+le3bN3n65AkH+3scHB5TNy1aKfpZRCQFNyYa18CirLDWU5QNy6Jk93DG0519/vBnn/PmW7d5/9vvce2NgsGFW/SvXSZKzxfcy+USpRTgybIew9H52NnZ2WG1Wp02K9I0PRdfIXYe0zTtaXytra0xPHNNVVWsVvlpSuq958qVK+eK/7ZtT38PHqSS9G/dOlf8LxYLlsslWuvTw+BsTHU1iP9SYSuEOJcLny2ATmuR7prX5Zpn87zT/wLCiy/nl/7873tdhnl6P3GyE8nX/k4pJVJKlFJU+Yr/53/6v2Xnw9/HFXOMtTzbP2Zae/ZmK8rGsrW+Riw9b18YkdTHNAq++cu/zDvf/haD8RpPHt7nr/+Nv8+Hj/e5tzfHSY3EMJvN6fd6/PCXvsPhwSG2behJz9Ygpp9m7B6vKIxgZ75iWbakaUJdVfx//l9/nZ/84T9n+9lT0iRhfW3CcDSh38sQgDEW5y22NVhjqa3FGotzjqapKcuSJNZdSuLJ0gRvHdY58kUovpVSxFHCqJfSSxzGGJRUvHnrKvNvvMP2i10ODo/Y3Tvg+Ytdjo+PQ/fm+RGfmpY4UmyOe9y6uM6qaCgay4O9OVm0ZO/wgJ998DHj9XV+8IMf8v2jF9x493uML72BUDGie/ZfbCScjZPwWXPu8/66eDhNeb5wTai1xNeWB6cxKl5lHl/8kmdOmPOxG+Jdf6mY8eI0r3TOnakBzge8tfZLb+Dk306+/8U3F+7nv/QmXuV+Hute/0ZP/t0j8M6dHrfnF2koWlcH23zwu3+HRx/9lNVihlSSwscc1ZI7t27gHzxACMGkn2KrFZlZMpps8dadb3L91lXiSHO8v8c//yf/gk+eH/PouMR6QZGv8M6ipeQ3vv9t5vt7LKZz7ty8hGxWXF7rsbE2YJwpnh/kPDtY0LYGZxrGWcTO40dIa0jTlH6aIF2LqXJmdU5ZtSyXK6y3OGvxzoIQKKlOFz94nFEIERocbV2B90RxRKQ13nryImflPEKAsRYlBHEc49sBo36fN65fYm2Q8sPvfpNVXrB/eMyz7R0eP9nm+cs9qvmCoqqYrypM67iwOcIITeHA1jWlWXG8Knm+89/wD//ZP+c3fuX7vP+9H/LuD/8MUkRorbHWYq19bUH86rMWXxkPzvnTf3vdAhEitJnPxs/r6qAv/uzrrjm5z5cL+C6+Dg4O/NnTo64bjGkR4lVfOuR2ITjxnrquz+WIcRyfye3C6ivL8tzOjwfnPZHWp5jHycN5dW1IF+I4Quvo9P7ee6qqOveQkzRBdb3+kzrl2aPPeP7xj9i998eYxQHjQZ9ZXvGyEPz04S51Y5BNySSLsE3NRj8iES3vfeMOv/pr32PYz5BRzM7OHj/96AF/dP8ljw5LqsYgnOXg6BjvPD/41l1iDatVhfGwNe6T+opxKuhlEdYrtqclf/tH9+n1+/SVZ31twnvvvc/li1tkaUykQjpkjKV1FjxESpOl8enmcrKrOeew1qEjDd4jhERKQV1VeBxJFGO9RwBtXWONRelu87IWicDZliRNiNM+QgjGkzFKaaomNA3ysmI6W7C3t8/9Bw948Ogx6z1BFMcYr7mwPsQ5x2jQZ7EqaJuafhqRRBFv3rjOO3ffYXTlDcbX3+b2O++TpBnehZrzbIleluXpezvJ+89iYM45qqo6jQfnPEmSoLU+tzmfxMPJ95IkOc14vPdYa0/T9pNOcZKk506Ktm1pmubcKZKm6fkT78c//vHpArHO8cYbt9lYfwUULpfLM+BU+HDef//9c29qf3+fJ0+eIuWrN/3Nb37zXEF08jWbzbh///45YOi9997rgKxXeWoA58I1WS/j/ffOA2/3799nOpt2+S48u/dzPv+Dv0ez9xRpC9q2pTde5+nM8LMnh1jjWMsiLg4SpK2JaVC2Jh1P+O//D36HjXFGVdV89LOf8qOPnvDBbgXZiEhpVvmKvvLsH814+6232RpmHM9nzFcljXX004gbW0NcvULg2J+V7OWeP/rsCdfWR1zaXOf2m7e5ffM6vSwBF9qWznniJCJNEiKlkUKCEEjB6eI3tsV1hXgcxWitcNbRWhPqMjyxDomAd1CXJdaa0zTE42maGlO3xFrinEVJgUQiVYSMIgajMWnWw0tYLFZEUczB/j4fffQhP7/3mOPpgvVhSmUcWklGWYTAc2Wtz+1LY8aDPsPxhLXJhL1lzejqW/z5v/iXuf72e3zy2X2csV2bFu7evfsloPDhw4enQaqU4v333z8XO8+fPz8Fjp1z9Ho93nvvvS/HwxngeHNzswOOX22qH3744bla9/r161y+fPlcbfPxxx+HxdkBdfpLeaDnSzVHWJkn/WrxmvzyJP8PoFoIbPeVLbaTWiH83FfnhicLRIiAoMovgFVaa5SUPPjZH7B8/GOuxiW7ouFwuSK3gu2m5t7OlKZuuHvtErfWeiyneyTakgjHeOMi3/3VHzJMJc55nt7/nIdPXvB47mlUxuVhj/ligXQNSnjevnmV9SxiOZ9j6oZeErHeSyirBhHFrFaC/cM5i8qxt6hZ76Vcv3SRq1cvcePqJUb9LDz0WJOlKbEO7edIKbTqinITUhMFaCVwLkbgsdZhjUM4j5CCVMakA4kTAYXHi7AbxjGm9jjXIkR4dkopXKrQOpxaZVnRNCWmmSMELGeH6DihNxgilMbblrduX+fq5Ut893sz7n32GR999hlH2/sIPE1VMupFrArJwZGnLkt2Dpe8/Zbk3ZuXKet9fvRf/u/Z/cb3GL3zKwidvDad+uJnffL/v5x2cYr7CCEQp3HxKrUWQpzWP69Lp5xzp79HSPHaa05i82yqpb8ErIgvgzX+HBrqvwKh9eeO0l8ExrxaZK+/9vSa7s8Xr5BKYpqKR5/8mKtpw1FU8+P7n7E3XXJYwsxlvJi/QEvJd++8wcXIYfNjRrFHO0c2GvNLv/p9Ll3axDvLs/uf8eDBUz5+kfPZ7ophGjNXltY6hHdEOmJj0KNaTmlbQ5ZmGOfopzFNa/j86R6L5ZK96YLpqmKQJXzr7ptsbG5w8eIma5MxWZoSxQlZHII+1hpnQ9oZK0ljDJEKO2DTNrQW2tagRKitpBS4tiXqOlrKOaxpiaMYD0gl8EJRNI44jWmbhrZtiaXCYRGekH55j4pjvHcUeY5qWuqqJF8tETqi1+uDsyRJxs2rF3nj1g2+/a1v8kc/+YA/+ulHHB4e0hqLFjDKNDcvrZHXlh9/+DmLVc5v/+BbbEwmPP70R3z+/IDv/tl/Aykl1pqvjocuGL4SyOuuOdsk+mI8fh0G96rw9uDFL2Bo+LObsD6zygTeeVpjulw3HEVn8z8hwFoT+vRn+tBa6w6D8CilaVtzDowRomv1OofW6hxXqO0wkLNg0un9ujSsbU+uEaHoXi3547//N3h3S+GrFQ/vfUxjBX5wke3pjCd7hyRxzH/vV7/PiJp2ts+lkUY5xcKm/Jl/4y9xcXPEcnrIZx9+xM7OAZ/tzPgXn2wzqxrevn6RYX+d3YNjdnYPef83f8hvvX+bne1tdqcrjlcNB7MFeVUjdMTudMXLoxmLvKKtK964coELF7fY3FhjfX2dNEmJtCbVEbLb/aqypmkbokiTxSmtN3jnadoWL6Cq6/C8pEArjXDgTGjPOmvAO6RStKbGtQ2+bfDOIm2D0ill09C2TSicjWM0GjErcuqyxFhLYwxl3TJIE/Cew8MpUaRZLVfM5gsm4xF5vmQwHHH96kUubPwW3/nGW/z0o8/4o598yHGeM3tyhJCK79+9jmPF7t4e//SPP2A8XmdzmPGTn/4D9hYlf/Zf+0uk/SHW2dPYOdnZdRTSS49HSdVhQP5MxgJKdxmFBCVlgBAQIPzpCXISpye1iDHmNKKsDc9KaY3g1YkVruG0bjlp+Z502kTTNOeW0YsXL0IupxR4T7/f70hqnCOG1XV9etRtbGxy8cKFc8fZw4cPX+Eg3ep1LoCA165dO7diHz58SNM2yK6DcfHiBTY2Nk9PpaZpePToUcA3lGZ6uMcH/+LvMqh2Od5+jKlz0qzHymf8w4+3ebS9j/fwg2++yzvrA+zyANoCU6/QkeJX/uSf5N1vfgNfr/j5j37E8f4hVQv/+PMD/snHO2iteefaBYRr2TueM8tb/spf+C3WVcvh4SGTrU1eHC54vj/HKsWitrycrtibzmnKinEseO/uHb733W+ytRkALCUlWkkSFSG7TcaJ8EEmcYSzFuc8ddPQ+lDE1lUVUlBrSZME2hacDRtQU3f1hAyNb29x1jBKJUO1oHGO54c5UkYMegNAkGRD5suCxarAWsuyKGmahiTW9HsZx/NlqF8AqWPSrEeWpURxRL/XZ21tjcFgwNF0wfMXL/nJzz/ixYsXCG8Z9SLeuLxJGktKIo5Ky5uXt7i1Nebh9h7j63f5d/7D/4SkPyLPi1O2xHg84cqVK1+InQenG6L3Z+PhFS726PGjsMZESOevX7t+rrZZLBbs7Ox06ZRHCsmtW7fP1boHBwccHBycbsRJknD79u1zEIX+IuPWe48xBtm1yLz3X2LlOutpjUVKh3cewflrQtfFnqLjQojTohQ4d+1JK8+ceSBCiHPXWGvDruoshwcPWe18xvdujTG5ZRR72rri6csj/sFPHvDhs32ubm3w9vUrvL0xYPryObbJsaYi1pJf/t4vcfP2bfLpPi/vf8rqcB/TGlpSto9XbG1tYk1L3TT4tuJ4nrO1dYksilhMj1iuclQckSgY9TSrVlBWFcu8QJqGtUzSy1ImaxMmkzFRpGmbBqcU3inapqU1LfgA9ikVIaUIuEddhWckBc46qqIgTWIiHbGazjFtgyAUykppvG2oqgrbNPTTjKSXsbP9goGas3FxQC81bG1eIetlKFtRFvsUFETS0ktTsljTWo1zktaJQDmpPbZt8W3FommYziVpEjEeDCjyJRsbG8RRzJs3r7K1scnHn3zM9HCXF3u7PNk94OLmBsd5ybxsoG1RwKULm2w/v8//6X/zv+Da3W/xS7/+pxiN1zDGfikeQtyE2AlpmUUI+YVrDMbYboFYvAsZzNlrpJTdPQQeUCLE6Bdj2RgTwGXvcc6eW0CvJyv+AhKa9x4hA01dCokT7mvBv1dAoUCK1/fF/ReAmtcWcjiq6Tbp/AGbI0OsBY1PmEl4cTTns5dzfv74BbWBS2sTbowyDnee05RLrG1omoa3b1/nG+99g0EvZuf+DsViSts0QERhBcfLhrgXM1sV9GSGby1SRXzj9nW8qWjbml6aUFU1Oo3Jkpi9xQrXpQKJDrR5FcUkWUKkFHm+wnlPFmfMinl3hIc0o2kNqgPXyrJESUVZVbRNS6wUtm2p0giFQHrCAiJA51prXFsTqXCCFGXB0XLJH/zsM0aJ5f333uTiOsi9x8RRzMbGJq7Nyee7bO/NscaQxDFZkrIxmZCNtjjMA46RlyV1WRILR+Ucy8IyzysGWUpR1AyGfSaTddY31vneD37Ahz//gNY49g/2+fjZPofziivrPYp5QzFP2JvOmZaWt/p9tj/5Yz6/f59//z/8T4ji9Cti7xWD93wTyZ+yq8UJXyog0K+PGxFOGOH9LyCK8pWYiv7vsjheRwrzr6EznwUKzy6SrwaG3Dng8YvvVWuNWO2TLp+gRc7ey30++uATaHOOFgWtHvGje9ss85pb1y7z/vWLjKhZmJqyDi3fvGq5cfMGsTLsP/qYZnFMfzRh9zhHZT0+/vSA/mjMIi/o9Xr0+3329w4Yj0Z8860bbOqWpS8oq4o0TXBScricsagalpXBNjWxkkRJQtbrEccpy7zAO4v3jqZuqarmFAW3xhLFMXmV46xj0MtoygLhQCtFXuR4aymLAi1Cbm6dI5KeJNa0ZRHawVGg7FtjsMZxnLfsHa1YFZ8y6CX86V+5xcVRw8vtp7x96xqr/ib64oQ48uhYk/Z79FJJJB1bE8FxOWL3MGIpFaau0d6Q14baOarW4Lwgby21lTRo1ja3eO9b3yHN+gj9OfufPaRuLc7UWBOR+Jr1cZ/5/JCPPn/KO2/d4sXz+/zt/+av8xf/0v/wS7F2AhR6Z3Hiix0t8QXgWCAkIYt5HVBobVeC+NOa+quIuF/F9NUnpLizNACtVadfcOH4t+4VedwHjo1Srwr3uq54/uz5q0aYEFy6dOlLKDeEQujZs2ec9o2BC1tbZ2gtnta0PH32LPzdGWYvH/P05/8CO99Buor7D54SK83nj19g4yHP8hmHi5xrFzd478Zlbq8PSHXG0fEe2y9y9qYlb7/3Pt/54ffR7RH58QHOeRrrUOmAe7s5u7mjbltWRcWbt65BW4feeOOoqxrfs2SRQoqY1rVINFcvb/B4avDFgkw50iRGJQlSKmazGcIGzMF7MN4RqQgtBa21JHGMaQuMCaebaWtsa4i0Pq3v8B7rAuDV72U4Z9BxclqQainQXSqhlWJjnPKdt29y78kL9hdLlG95vn3MnR9cJ41ypIfPHh7ywf0Drl3eoNfvsTZy/NIvvcc3f+M3mL18yB/+s99nmPVpbUIroM5Dt6p0jqY1HLFClTUOCVLTGMfmxYvceOttVmXNW3XDo2cvma1qmqqlbD1qNec33r7E44MF2zsvGE/W+Gf/4O+ysbHBv/I7f4lnz56dbopCcBo7J/HTtC3Pnj47F1/Xr18/F1+L+ZzpdNqFWWgU3bx561yw7+7u4s50RKMo4ubNm682cO9CbJ45JPS51tEpCumQku4U8Ch1nlvzqtIPb6Kqqk599qqj9f7776HU64DCKc+fP+9IZB75GqDwxcsXHBzs4puSxc4DDh99zNGz++w/f4DyoWDdmVccl5Znu8fMjSKONJfW17lzYY2ecjRtxWpZ8GSvYuUS/qd/+rfoJ4Imr0AILAojBLvLlnu7KxonWOUlUgqquuF475CyqLl+bQvhocgL+lFg1NatQypP1VpaB8pZIiHwiK4755nNl9RlzbDXwzlHXld45+klMXlVIaQC74iUQAqBkhJnHQKY9FKqpiSLY9JIY5MYYw3jfg9nW5wDYx2jXh+t1BmKj+Bbb9zgrasX+eDBc15uP0I1BWv9ESLTaBzb04J7hxWfH26zqhoGSnDv08f88MFz/sTv/Ju8+805f/wHf4z0A5SK0CrwzyIpT9kVTWt5uT9FRQm1cTip6Q2HXL15i6oscW3DB/e3KVvPz+7v8O6NTdb6Kd+4OKR3XOGyBL3W5+/+V3+NSZbwje//Gq0LGE0URXzrW986BYABtre32dvfOz05+v3+a4HC2WzWZSGWjY1Nrl69+pVAofee69evc+FMc6mqKj5+/vEXFoj/Ik74xV1f/AIRTEAdz8L84UV6zrzHcxqBrwKGvHdBwwDYfMb88Udsf/pzmuWUUabY+sZ73Lt3j93jJeiMWQXLNgRGv9cnkXD7wgbeLKmLAq2gNo7f+Vd/m1/59h1c+TLgACrGCkmxavhsZ8bjl0fIKGbYzyirihe7B7imxnvPzSuXuX5pAzurUb4iiRRVK5E6ZvflAoFH2tAA8FJ1AdtRKoyhqkpiFZR6aaQoywJrPUIFHKSqG4QUZHFCax3OtOAtQkAviamqmkE/o6wbqroijSPGwyHCeyKlUDoAjImOiNOE5XLFZpLw3bdvsZgeMFuU5GXLjQsjbFPw69++wdrWTVoHB7MFT7d3+fmTQ75x6wl/8//8n/Fn/qXfYjJKKQ5zVm0WZLjCM+mlTIsm0DoiRVG37B8ecWFri9lyRZQkDCZjbt65Q1uXXJ7O2TuYsWpanh9MGfViNiZD1jPJfjHj22+9iW1bfv6P/iZD2XDr+79N49WpZFZ9IXhkB6QGmo18DQkyoPBnyZBfBRR+HQnyhB4vz54gJ8Q/2aU9JwKWk6D9qhrklNTo3bkT5msFVieFuH+lHXfO4lyLswbTVJTHu0zvf4w93iY2FXESM+hl5Muct995n+2Xe3x8/xlp3EO4OQZBaTwXe55BrJnOluTVikhYvnv3On/uN7/Dau8xyiyYHx+Sr2pWteXZtGZv2ZIkMXEck2rFgWmx1jPLHZEQJFoy3d+l71do7Xj3zi0O50t+/uAFWkgyCaZpkTp8uMYaFB4dCWQn2qqdxzQ1sdYMexk0DY01CAmRBGMD9iTxDHoZilB4GueQKtBPsjQmixWx0njnUFohpAyLI4pIoiB6StKILEqpW8PG+gYH06esSkiimKpeMukrNtfHSBVx+8ZV3n/rFp989pDHu7u8eV2x8+wpcdpDUxLhsd6TxjEejxRdPYhHCE9eFOweHNKrW+IkIUkTkl6fK7feoG0qyvxT5nmNtSWJ3qduDF6lrBrP6tN73Ll1g16a8vnv/wNMVXD71/88SiWvB46dw3cMjdeTIF8tgtAt9V+qi0/rZue/kv17Ala6LjvSRVG8guu7G/X7/e4FCOI4OtVinCuaz3SpvtixklJSFMWXdgGAtqnpZT2EFN2JAYv5EdK2+Lbh+acfcvDkIdOdx1Cv8FWF9LCsQk2wtr5BtWb53jfX2Ns/pGgMnx0taY1j48YFFosF9x5vM+oFHOdP/olfY5xKIlcTJQnj8TrTxUu2j5Z88HxJOhhzUUVoBb1ej/mqZHY4ozWWjWFKGim09KRSMB700cKRarh9ZROdOY6mqxDIXpIgkICWQUtjnQsETQlaCqz3TFc53nkircLp0fGunGlRWlI3FVqpgJZbS380YpWv2Fwb0zQtUniU82SdkMpZi3WOum2IowipI7RUTEZDNjfW+GjnIY/2Sn7tO7ewzYpJr2W9kDipQAriQY9vv3eXj36yz9oo4vrFlCcvCgb9FBsNEXnZAZuSqvXU1qKVQDiHsZ6yqnAqYm//kGvXr4HwpP0B12+/SVPVfPDpA46WLf2kZmvNkUVwvCrxRYNQu/TSHmaY8nf+1t/ku4XjT/3Ff4umbWma+lyzpt/vnwZ5FEWsVqvz3SatT+PWdzVInufnTpA0TYPSsjsQvPfnrmnbll6vd27B6MePHgXxt3jlanLz5s3TltpiueDzzz8/1wK7e/fuKcOXTsdwFpE/cbyo6/pUunjygiaTIdcubxBFEcVqgTEN93/6R5TTY8zimL2Hn0FTMcgi9vf2yWJNqiTLVU7bGqq8YLi2RmkNwhg2ehl+54hbm2tcHQ95sbfHfLXCu4jB2ga333oTLVt6aYYzLRZYVA0fPT2k6V0mco56OWU0XiOvPeNBn1geYrsURwPCOaSA8ajPYjYnzwt6KuHKMOYjYZE4tBDEUuK8oDGGJI6wzhJHMfjQAIh0RD9LA+5jLcuyRmtFqiHWEmMtglDzCSHIej2MNfT7vZDIqnBqREmCdZ75KmeQpeg4DqIgHWjvzlrSOGV9NKJwis9ezmhJMaLPxYsJW1eGrFYrjDWUjWRvDk8GKdeubRHLliRWxEmKbwSRjmiNpW4aRqmisaJLgyWmbpAIMIaqrjmezbiwucFovIYEbr7xFnXT8KOPH7M7Nwz35vzg7pB3rm/wux89JU5irm1GLOuMWav4W3/jv6QoCn7lz/zL9MdrATy1jmvXr/Huu++exmRZltz79N6pzsN5z1tvvsloNDqnbvzss89OF9WJu8tZku3Lly/PXZOmKXfv3n1Nm1eccf/4GnuTL5984ivbwue07vjTdltbVxw+O2ZxsIc3DavZlOnL55SzI4rlgnI2w7cV6WRAvVqRDgcM+sOAvipJUzXMDo7Ia8dqVdDUFZfGQf6aKGjKnNEwZbbIGV9fJ44j2moOUUS+WrG7f8STF8fsrgw7+9tIb7mYSg6OFxSt5+HTHZaVIZKCtVEfTM3sOGeykfDi5T69XkwvTWhdYLX2lGecaLxWSBmepehscWIlKaqqQ8tjIqWomwa8J9aKtWEfYz0Sd1qkx1GEsY5Ec9pxEXiiOKZcrhgM+lSNYdBLiaKEum1J46RbTG3gaClFFkckkabfSzmar5gVllUlqBoL/pAkcmxuDBmMJqy93KVdarw5wDV9EgT4FOdDB0kIAjjZ1Zmr2gZdjifwyKSkqSuaMij9xpMxcZahewO2Ll7i6v4x23tTDleel7OcSFeMUoFtKo5nx2wqRb8/YO/oiJ/+3j+mWM35l/7yX0HH2ZnY+Wr3FvG1ph38dzJp+ApXkzOtrC/ezJ8HaEIN84udS84Y94APwivXVrS+Zv/hpzz/6Gf4pgzHnXfkh/scHB3hraOfaJ7N5yyLkiIv8E2FR+CM5Xg2ZzwZ451E4JhOp1St5NrFLS5M+jybv0Tg8TrmG++9h3SWJFZIrSiLklXV8uHjPe7vVrQqxdYVd9+5wuGiQAvJ2iAhbx2DSHHz4ia3t8bE9Zy6aZn0Ugb9Af0swQnN4axC+pM2qEV7j5KBN6RU6FLJTqHZNC1OBQ1NHEU4F9rZzjmSSOGcBCnxAtIootfLMM4ySFMmoxFFVaKjCOs8WRLjPKSJJo1Selkf50L7vW2bU1Bx1MtYGw2Itefl0RzlHPOV4cWDR6wPB1RXFHfef4Nk4HBNy+7BPt55NrdukWcSK/pIL1jmKwwC61xXvAbN/6SXsWpqwJNEmvlygUpTRBQTR5q412e0tsWNKxc4mC7ZXxV8/kLSNjVXtwbc3OqRJD2SGGzr8Drjw0c7GKG4+80PePuXfiUI6F5DoEWKX2jw8wvNhvwvjmN91qrnqxiOznmEOKGeiK+0VDm7Wv3JK7QtTT5HSihnxxRlzuGDT5ntPCHTmqYqWOUlaaxpioKyacGm5GVNXpSUSmLaQNAbjfosyioYMdQtRVWwyBucinnr0iZ1uWI86rF/XJP2BvT7fXANWhmcFdiu+aDilMaWOG+oqoaqbpgtVvT6faarkqJuWc8i4jhmPptze6Jp6yXeKIb9lLWNTQ6nS5rGsCoqhFJEUuO8w3kBzuIJu26sJd4LaucA2Tl9WJIkUDxCihDSBGsNkY5xQF5VpFGEEp5VnuMEJGkWsBYV2tpSOPq9kHdnXeqgRIIMv4TN9Q2ytEcWe1Tcx5dBZLRaNfy93/sQ1D0urP+Yu9fWSESfwSQU4lIWvHvnOo+f5yR6yGEcsXd0RNGJi9YGGbOiovWQxRqHRziL94q6bmiNI04iol6f/tiwtr7JzYtHfLpzxLSo6WlJ0zh2Xu7z3u0b3LowQB0VHE/G7E8XPHj+ko9/9Ptcuf0W6Wj9a9xQAsfqtazcTrd/IvP+qkPkPOD9mgVy586dcxdPp1MODw9PtR1xHPP222+fo7u/ePHiVHXovGMynrC5uYm1lvl83tUytwLztyn59Pf+CXtP7pOkGXsP75Hv75BPj2mURjhDWzcUy8CJMcZyPF8ipGZVVXhnWdVxqF+qmizrczzLscJzcDwFIbh9aYONXsz+7jOqpmReNGxdv4bHY5uKNBNI7xiOJkwf7lI0nixJWFUtty6u0zpYVQ3TZUXROJyHqmlYlTUXk5Tp8SGxtKyUxZmGuJch5jll3bA3L2kdeNm1r5XCeIKST4VnaLtUxFmH9Q4lE4wJnStHYJ0OshSlIsrGYL0k8YJBT7MsKnppQpL2wAcavBAhtUqyONgIAXGUgDUI5ynbhvFgiHSO9fEE5WbMlyuur48oypLh5gXyrGZW1Hz68JgPtw95bzPl/esX6cd9JmseJStuXMnQ+4aXxxVxHOOEoG6awFmKFKuiAqlI4sAGjkWg4zdVg45jlI7RvR690YTNtTGT6YqDRcUvvbFFJCFOFM9395BColTCRuxYHw4ZpJ6hqth78BF/+i/9+yxXOffu3QstYB8AvjtvvXUudTo8PODFixfnRFXvvP3KfdF7z/Pnz89JbMfjMXfv3j1XpH/++efnNOqvdTVZLBanBK4TC54vuppUVYnsujX9Xv/0+rY1tG3DZDLAmZYiDw4pq72X7BzuUyxm+GqFty2HixW6a60lccyiqFBCUrQtXoRdeF5U+KLE+cCruTEY0WqL847dgyXDwZC7Ny7TlEsELc479mYFN94ZIZyjmB1QqIjJxhZVveDZ3pRF44h1xKWNAXVZsH24YGtjA4mj2DmkbEoujPtcGveIXImwDVmWIITvcnFFUzbs7h5StQYZRSgdMIlVYxBKgQj5fhwLpFB4Z1ESMh1jnKOoW9I4EOcSHfQh7ZkiHRGkB1JAnKREUYS1Dc56rGkRSpDE4bnrKAZnybRCdtwkZy2R0gwHI472dzHOc/nSFZy11IsVf+FX3qMm5mix5P7THT59+Zyy2aaxnosX36Z3a4xvAP+Ci+OIVdHgrWVtNKBuWqSDWGmM735XHJoDrmlYrZYkvRQvA16UDUeMJ+vcvJDzk0e77E1XvH11k3mekwvHpKi4eqHHtSzhKG9Z1A2HB3tsbN9j5/7HrF9/i+VyeWo92uv1vhSTL1++PL3mhJn7i9xzJpPJOQZwVVXn3HO+kot1Xs0nvmToJgSITpn1RacSIaCtS3Y+/wRsy8GLFxw8fYgQMDvYZzqbMkrDzjcvSqqqZphm+GUBQpKlCbGOmOcrenHMQlTMi4KmtV36cUjVNmilKK3g1qWLvHllC2ULFvMDFssCgWRtNKTKc25MMrJMoeKUpy8OeLa/4GhZU7aWsmmoy4rrlza5tLXBjz95yMGiIFYSaz2p1ozjGNnG1G2LznoczZbYp9vkecWybHCd+s+aULhqJbpWpKZoHW3T0k/D5mE9VG3Y8bMk1BMnH5ZUuiMeOoSzCBnUheujIXlZ0hhDP03RShFHgbLircdpAn3+REfiQkGfJgneWjbW1vns85pnO3v88jduoqKItN9nWHkS1WNjNOCdW9f50ScTfv7hR0zvPcMIz8alTbauXmSWP2Xc10yGPeppi2ktURShXSBUKiCKYoQUVM7SiyNUpPDWUrctWZai4oSsN2BzMmRjMOXFrGacLbgwGXA4W/JyOiOJIyajEUNRI3oZmxsbXF2L+fwP/h53ogwdR8Gsw4qvNGo4BQG9+7IXyVmNx38LR5XTNu/XOSkGkPCL5MKQRzvrghGDe3WNlKFeENKx9/g+D//494njhHIxZXm4C6ahKEs0nkQK5osVRWOwDtomIMjrfsjGZMJ0uaRsDQ5JYwRF5ZjmNXnTsihKmtZiSLh5eYtRlvDk8VNiJVA43n3rBrGwDPsx2i9pK0e56vHJ/ecczEsGwxGx9ezs7pFpweWttXBPF9KrWElG/V6nwff0+z3atmRta4ujZUWcBc7W4SLHOZDO4zWUJhAuI63CrioleWOIlDn1GeslGoQgr1qMNWSdqbSQjjiKA+YAxDrCek/rHApBEsUsVyuuXLqItS2qq3nwEEcxTVMT6QTnPa7jsyVRzPpkHStjnu3scjRbMlutqIxhMkhY0T9t73///XeRMuLHH3zEx9tHfOfxS9YubHLxwjqf3HvKILtCUQ/IyxxkYHJHSpGqiKKpQWmSJAVnEdbSFDkqSbDWEiUpyWBAtsi4ujbgJ8+O+PzlEikEjfE83V+xPh5x5VLMhbU+7VHOYlVycXNMUbd8/of/iJvf/Q2EjE617V/VOT0hyXr3OqDwLJjovto9x3dNAO/RR0dH535BFEVsbm6e1iBKKQ6PDs958o7HYwaDwWlhI6Xg+PgI76FuSma7LxHA/GCP6e4LtJJIb6irglQplkVJLSHWir3ZqnNLcXhnaKczrAv64kVeEkWKqrFUxrMoGhxQVJbaON68ucY4jVjNZ0yGGbacsjXOiDQMBn0mPclaf8zs4AU7e4/Y3p/Siphll7I567l4YcJ4kPFs9whcOB0zrbh+YZONQUZfOSLRcPniJeJexvFsifWeOMtY1S2ts0QyRknZqeIESgga45BKECuFBMqqYtjLaOq62+lgFMdEUmKdJ401Zd0QKUEmI1SXdtZ1TRpFeGsRSjGdzRkNemExSY2z5tRHy0uFMS4g9L0MgSBNIpI4pSiCtVAax2xujIiAgzyiIQYhME3Ld999h+NlTnP0kPl8jrGOrQsbmHvPUcawNhnT2pYojmhdQ9k09JKA5DupUBK8M1jTILUkkSmRjvBCEGcZaW/AqJey3otYFA3LqmXUizmYlnz46CVba2O21iasypY8r/j80QveunmZQT3l/o9+j7vf/j69yQZpb9DVya8K9CwLaegJB1ZrzdHR0WlxfiLWGwwG5+qScM0rt5TTyQYdw0Q/efLk3AJ58403WVtfe8WSXM64f/9BJ9AJq+/O23eCbrn7enT/M376+/8MYVqaqmT+cpsXn37A6mifNl8inKNqKmKtKKoGYz3zpibVmiyJyGvTEfVaCh9sL721tM4zGg4Y9lOOVyuSVKK0ojQtvTThnZsX0cKhJDgcRV1z+9YtCqeYjHpoW5AvS8rS8PFnT9k9XkE0IYo8s2XOqqrp9TKO5yu89yyKgN7GSjAc9LiwPmC6sw+Jo64qirJgazJgOBmxPFixN10Gyav3SOdRnQ1fa10wYVASIT2R9MgkZlWUTAa9rj4xiEjghEDHEY2xKBk8pYy0VKYlFSmqO7HLsmQ4HNK0LbGOAslRerSOyOuGLI7wUoEIQiLTtkRJHDCYJGWQVkwmI6qVwbQCqS1++pxI9bFWo5ykn6RcuzChN77ErTs36Q961POczbUxZZtRtJ7BoE/bGqJIszHs4TzkjSGNY1ofWvrWW7R3OGOwpqWfZTRJjyTrk2YZF4YZs8JwnLdoHWOcp6gqXhwccvXiJsNewrKs+ezZIVW+5MrlS+w/fcZAOr7923+Otc11Pr332bnu6zvvvMNwODrnnvPgwYNzJg5fIsW+eMGjR49O6+csy/jGN75xvot1NhfznQnZOWOtpub5g894+fwJ7791nb/7j36Xjx884+aNW6RZQj49pjg+pC8NG2lEGimqPEc0FfnsmKqu0VKwWK7opTHOeoyDZdmwsGVH4tMUtmFeeCLlaX1N2xiyNGaRl0gl6A8yCmvBGUrnmfQzxr2UNFYkseD4cIHQMZWFybBHnzmukSzLnKZ1zErLqnGUrqUxwQxByHBSFVVDP+kYykAkBFuTIRc2RyxeOi5ubTAaJORlyeaVS6STCS8/3eZomRNF4fSwPpje+U5IVhsL1tFPQn5eV6FV3VoXOFRSUhtP01YkUXAljJQl1YpYa6SSVGXFWr+PFwKdRFRVyWAwIK9qYuUxdcVgPAEBUmsaZ4mSBGktsY5omwbbFrzz5mV+7Ve/w813v8XnP/nn1E1N3RrGG8Gfy5ka39Y0Dfzq233u3vlT3Lx5NVBd+kOuXr7E05cGYS3WBmvVfpZinUUYi9aKommwSKJYoXQ4OXEWrEEJSLKUttdjNJww7i1I4oK9Zc2wF5NECi0di2XOqsh549ZlPry/w4v9GTED+umMi+OE5w/vcfuddxFJFpwVO3z71WSB17vnnHUr+UX19pcEUycjAqSQ5KsFf+3/8L9jdXyE0orp0R7L6QEff/YZz14c8P4bN7i3/YLdRcXnn36MdC3rvT53r19iMMjwbc0qr6jznPVhxriXMZ3PEUJQtpbG1kz6GWmkIa9orCORgjQGJTRKRTw/mrEuBM5LamtpXADPlIS2cawag41j4iRibdRjfW1AU8yomqChWDWWC5FglEJV5EhvOJgXbB/MWZSGbC0iFZ6XdaB5lHWLEg5hDVIIIim4vNZnmEY0+ZIrF8ZEwhIpQRpHaKVYzpccT5cY59F4pPcYIFIB7LPWE2sJQuK8p6otUkkSrWiMQUiFluHvkQwFo/WhixVHEY0x9Do3eqUChytSESIK91NCUNaGOArdMmMMdV0T6Yi6bki0pm0qnj9/QF7O+dd/51/j8q07lMUCmfSIe33wgVKSZT1UFAdxkTFclpLBMGO1WhGnfaYHBxwdVxgX4zH0exlFVVHWddCuWEesFW0btC9ta8h6krgzEZcCjDVEUUQcJyRZxnDYZ5ItmJYt01XNZj9ibZAgBBzM5gxHA25d2+LFUcHRouT2FcG4n1C3Nduf/JTGgRtudjQm9ZU4x3n3HP+17jlfdks54Xh1hEKlNWWe87f/i/+C7Qf3+O0/+ye4e7mPHxs+czWHy5KfP9lBakUURzg8G6MB1zbWSGNFL4nIIsm8bZjnOftHR2xMRkRRQhxpDmcrWi8pjaOoDdZ4BmkUwBzCBx8pGPVTrDMMsoSiqamtC75QxhIJiPsZIkt58/ol1tfX2N/dQdE56CnN5sYm60NFfzCgPwr55ocPf8Ysr1nUjkkcLDqVUvSyhFVVc21jxKPtPZZ1yyDWTAYZZb7CNYLN8YB8NQ9u7TKiLGq2X75k/3CGdcFhQ0mJ7jy7IikDRhFH9JKY1rrwvLr3kURdOnUiExVBDxJpibEO7yxWSWZ5TpRMaDxkcYw1LdlgSFXXRFoRpT1iHVF3gWlMMHRI0xQlYO94yu/9/COWqylNtSCJIoyXZL2MybgH1hAnERcuJFy4skllSoytwAkOnx8TCY9rGg6OckR6nTiVLOsmtFDjiKptSZOQHjnrGGQJlfUIG5yTvXc472jqmizLEDKkkmmSMBwMWR9M2Z6VLKuWnvYk2QSkZ3v/mDhOuHn9Ched5OXRgsNZTqwk0ltePv4cvERvXGJw5SbpZJMw8cpxVvxnnQ2t9zPuOSceCWfBxCjSpw47Simapjl/gpzNuYRrKZoWg2TUizGtRQnFqgh1Q+sckZd45ynLCtmLeefqBdb6KdPjGdNlxWq5pG0Ni7Lm5XQbISRZHBGlGVXZYp2gNi1lZUjiYaDKiwYlJYuqDQCa9Whlqa0gN55EQlG1EGl0llBUNVcvXGD/8BhV5UQRtNZTGU+EZTQc0FQlWRYh4wHWy4B2JzF5XbFsHF544ijCtob9w2NeHM7CAxHBYTLRAlMtWZpu1IFWXNrYZO9gRpVXVEWBVhIhJcY5kAJjHc6Fk6iqG4T3YTaJBKklaaQ5XhZoFdK51lgc4BRESLSK8N4y7PUxpsG0LZXWCG8Z9HthcTUNZVkSKYnuedJogFaapq47kmKMiGOM9+wuHEczg77/kjRWlLVjtqqCdgeLBIap5taldTbWRjhrSBNNXTfMlyu2ti6xfuFNMgLzN8tSTNuCECyrkrwDCr11p54DSgucC3Y7sZboNMUaQy9OsFGEjjRZ2mNzNGCSLlnWlsZ4Pnp8wDu3LiGrkt2jOd57Ll28yLDf497zAyb9mCtbE3YPS3bvf8z6csrtd+5y7d1vAIInTx7z+MnjU2R9PB6fc+N0zvHo0UPquum6VZYLFy/x3plrqqri3r17X5R7v+r0JnFMi6d1llhLXhzNMXXJsmpOXd8DhdtxbXOD65sTbNOSjjJSLZjlOXlRMF8VWA8yiimrlkVZEumIpm0Z9gZsJSP2pivmRcmwHzMvarQSRCoijgXThWHZ1CRKsmg9vURT+tAZ0sZwfX3AfHpEHFlGuuFwVrGsKmqn8K5msr6Ot2Ug0BUN87xk1VhQkqd7Mwb9PlkUI3xQ8LWtI1YaaLqAh/lizoU3r/Ho0QOG45sht9canMAYy8G8oO10BVpKrBThyJcC6S0qUmFkgffYpqVxlqYNXrbWdbWOloFTFeuQnlhDHGnKukIC/SxCIjAmyF2NWZKmGdZa8rJCK0maOpqm7BZPTe0dGMN4MOC3v/sN6rZF6QgZaWon2Z0uqJuA2cxmM/aWM5b7Ldlsju7at8Y4Nta2uLb+FnFvhOtSkLYNHlK2bRn1+gjZLRDfiZFQGO/RWgWdS9sQJSmYFrQijiOyLMM2LZvr61w+njPfXZD1Ui6OU17uT7l9ZZ26qtg7cgyHfa5srLMsKz58tMOljSEXL6zx8PPntG3VgaoCIfSpM448o349P6HLnbqliM5mV35hipfW+oyXVic/P8N5REcxvayHEiIgxjpiuszRKiKOVec+4lA4yqLgwtoNJoOM2WwejK+bBudAKEVZVBhjqWtLZRzGBdHOvKi5OBlw6+ImLw6mlHWwcMnSHtNFhVKCSRaxm7cILzDesWwMJaCzjF4v5a2La8SuZS3VFKVhPB6xN18xWlvjxs0bIBWu9WTDCbP9I+argrIOtI7eoE9V1SgBoyxmlAR6SxQpKEPKtDEZYZuaw+mUi1vrSDzeWNrWYq2jdkGfEjpJktq6zp/KEymBElGgm3Q1TT+JWVR1MIrWQcQZ6QjjPEIo6saQpRFKhNZ31WnTW2PI4qDviJTGtC3OGaIkpTEty7Km3w/zSuqmobUeV1Ss9UMb+O033+jMw4NhmgVmeUNZtyRJQmMMdWuo2jD2II5jsJbIWwZZHLQtWmONOQ0ma01opRoLzp5qWk5MEqQMOpzWGFAKJUIKVlcFSInQmiTLyLI+434PLRa8PF6RadiaZNRNzXFr2dxY55P7T/nV7w0ZZ4qDZcuDnUO+/70rPI53qeqG1eEB+9tPWLt09dX4uo7+9JWjErvBTV8HFAZSrvjy+IMkjhgN+uFNCtCRpm4to35GMs9PxT1X11KurY1YLJZMpUdZQ7EK3KTjxRJHcJqoa8eqbClbh1KWJPb00pjtowWbw4w71y9zMJtzuJhztKjIK8PmOME0BukdpQktU2M8RJqsl1LmJZuDPluxR7kSJQVKK3YOa375h3c48YRJen2y4Zi9Tx5xMFuxqlrKWuK0ZDzss1zmSOCt6xfZ3j2krNuToozrFzd4ayIpq4LR5ph+v4dxHtoW64O7R9U0aKlQUmIA17n3aWGJ4gjR9d61FnhnyaKToltR1IbaBA8m5xwowbKsiaXAixbrwXuDFtBGirTfpzUGb1ucS3DWMByNWa5WHC2XbEwmtMaSZhlCKhySvG7wzmO9RSloyxadRAityaKYoihBCXSkSJVg3O93VkM1WtAtfoGxnto62iZIg53UpMM+ylraqsJWNULpcFK2YZZJ0usFM2xrMU1NkiRBGxNHTLY2GWQp1eIyF65c5t1vLtBxgmkainyFbUr2Dw54sDNlfRBzPFvgTDild2cF08NDVKxZrXIe/uyPcVHM+oXLp+P6nHv9WIWTTlXwWxBfAhLPuvGElCxUKfr582edfYrg4OULjg/3qU2LVIqrV7bYP14Qp0lwN3EOrGe6avnVd97gymTAcrFk92jKcpWzLArKxpIkUdAyqIBSl7XlaLEijqMgeGksz45XLPKKi5MhAhEKdyRlY6kaQy+STA0sunlzm+MBrWnpKUU/jhjGBukE2oeBnEmvT9NUzBcwiA0XL6xxvPeSfJWzrFr2Fy3J2gaLVYHoCZJYU9QN93cOWC4LyjaQ2LI4om1b0qhHovqs8oosS7l06xaL2RwdJ3z+9CVagYiijoulkUKQZQmRFFStoXE+FNHdeIET7KITGgftoWuDGYKUtEAca+JI4QnsXO89QgUAsZem6LQX3GWVQiAp6xYrEorWspivGFtBUZbIrfXgm9vLqOuK2WpFmmYUZYsV4YRfFTlFldNLEuI4YjEt6aUxWZriVETpHEmcYCOB0xH99fRUD9KalkgINtMg0DqezUIK3TQsVgVIjVaSpgElBUezKUmsKRuJxDJJJVk/5kb/Kr/0nfeIlcJYS1EZvHfsHxxRG0O+WnKcLzDOIWKNiTKeHy5BKqbHBygVs354wMNPP2a0dbUb5fbKXO7ZiTNON5v5woUL5wzQ27bl6dOnZ1rBghs3bpwv0g8ODk9F8bPpLIy3KmuOj2e8eWUTpSXTvA59fQQ3JhMyrZmtCq6Mh6RxzGg44GA6Y1U1eBTVsmYy7OFWBbPFkkhHbI56HK3CHJDKWFqhyFs4Xh0A7tQ/tjFgO3PhqrEY70mSiEG/x9HxMTfXx0TecjyfMZsfsr4+xNYt33rnOoN+StPUOBMTacVqPiUvaxweKwReanpJwt7RcbDJGWQ0raN1grbbUa5sbdA6j1UxngalIi7dvsvj+59jjMWqPp/vHOEIXSelI6RSuI7G3pFFER7SSGG8wOIDbca54M8b6WCiB3hrsM4TSY2xnjQJRX9rDLHW5HWDdZ4k7THIelR1Q13VNHWLcg7ZNmw/fcqk36MtlzR5RZEoYiXJF/MgxEJ1czmgrCuiOEI6y7DfYzSeIDvbHCMkRulwspkW0yHitDWz5ZTZ8RFFUZFXFXlZo7RkZ/+YjbU1lPcsi4LZqqRsGuJIhw1VCKqyxjqL7Xyf+0kSNgIvGA364UQvK5y13Ly4QaIVG2tr3LhxjYN9gZMSRHjGR7bHfL6kcBK7yokfP8ImA27eeZesPzwHFD5/vnNuytT7771HHCfngMK9/b3TIUVZlvHee9dfDxTKrl05zCJ6keLBw+fc3Jiw8+KA5/vH1MaTasH6aMgP775BT4BtAh29qSqyKGKlI4wDh2dVNgxSTT/W7E5XlMbT78U0jaU0kkhAa4KBcqygbUOBHOmQhtRdQSiA0aAXGKzWcXk8QAnLwWJGlMQcLyu0VmxsKIxpmPQEdbFifnRAVRQsi4plHtIGZwxZLyWJFPvHM1aVZthLmS/zU4rChbUxP3zvDj23RBrLZH0NaxqUb5FRyot5GWxXtQQHjbMoA0hJTLDfb60jiYJUteosVbPOn9cLQdMakjicOkLqoCCMJLYblGOtw7YVOs1CS1dKqtWSJl+RZSkISb8/ZL5asjW5yKTfRxCEVFJGbG5ukeiQSw+Hw9CVWq1YFCU4SdTvkyUpWT9jPB5h8hWiLXCmol2WPD+csn84Be8o65rpsuB4ERwirQOlOjNtKVFS8NmjZ1hjaYwNBf2JN07nUZXGMbGSoAKHr6wqlOhRtw2rvOLFwRFV0xLHMY+3d/HCk8URm2tjNI4rFzdJ4gSlBMVyyCIvaIzHS8Xi3qdMVzlVU/Pud3/Ales3T4cvnXXPOTGk+1Ja1Y2HODFJ/xJQeI60JQWRVvRTzaKs+eDhNnuHM45nK4bDjF//4S+zt73NJw+3+cFb10jTmO2jozA6zFgiEThGaM+gl9IUOa01SKmw3lGULb1EMZFRZ9fpqVXKclUQxRpc0Iv3k4TWhkIpFgJvDFUFOM/VzTVMmzPsZ+RVQ9E4bFUxth7vDIP+AG1zbF2ydfky/rOX1K1j0s9ohKesGtrWcO3CJqkW9GJNa9rOv1VweXODRHgiDBeuXEIqRaI1UdJjVVp2ZznTyjDsJyghQAlirUjimKKug+FCpNFaUzUtWZp2HmP+1FbGOIdvLKNBRtsYtNQkStI6RyolXkhWdY0QktY4RKzwOibr99Cn9WHM0WLF1WtXEd5TVxVVVbJY5ti2Jk40rbGoOAIVpt9euXaVy7FiNZ+RRZrdvR0++emPqaqK+XzFqqxY5CVFY2hNGAFXty1KyK7+DMzhvGrBeUwHbkZKozpLHteNOEhiTVkHtkJeVigpSLQ+daev6+ANJrwDKxhloTunk5i8CTyt2c4BcaTZOS66wtujpGSQpaRJRO/lLlcvblKsljx/9pDf/cd/nzff/Rbf/eGvc+HyVVQ3bOhktsxrnRXPjHl7rbNi4MN7hFSYOg/dEGd5/OIl24fHwUxNBaHK5w8fc/PKJXoaFnnBpBcjRMiZJ/0eaRyzN12ihUN6y9WL6xwcT2ltSxIlrMqWqm4oW0vrBYMsZlG1JFFAZIdZijMmdFesp3Se0bhPHGsOjhdcHA25tD7h8mBMvpxxcHyMKlY8PWhJ0gGj4aAzII4YjNeJxhdw/mesCotVjn4vJtOKl0cLrHNsjcc0TY31ISW6cmGdS5tr2HqFly3jtTWOj46xzlJWNfOV4enOHo3ztC4MuImlIgozIQI6Hoe6xJiKKIqo65osTZBK4hz0Es0gTUJXxYZdv2gsrROoKKW0hI6akCyriiTSFMsKrTW7B4ekUcSg1yPPCzyeR0+fE3eWQ2kSodOERml0OmAymQQHeDz9NOJg5ykHR8c8ebZDHEU82z2gbj11a3AejGlpjemUjRrjgmOKEpI0jhBI8rIOhEwZ+GQGj/M21BEmwAFJErMsqkDhP9Haq4Dyh/upbrxDFQp/D7UNht5Sym5BBqhBeE8kQiMjIPOSRZ4zK0LdsHM0Z9zPWBukDHspey+e8eTBPW7eucvWlRu8eeddtI7w3pHneTASOYOgj0ej01NGa81isTi/QIJasBuHNRlROk/eWoSFoqwpGoux0BjHdLHil7+1ye2+Jj8+4NH2Ed44HIJFWbI27HNFjdg7mrN3NGWxXDHqZYwywf68ZH2QksYZjw+nFLXnIG+IVDgGtfcUVY0NY69w3jPIEqJIc3C8pDGOfhIKwZ29Y3zbAIK8bKnqliSRpFnCweE22UaPpD/iaL5ie/cQhKSqKw73j7l+ZYsr6yM8gt15wcu9fYwNR++NrU1clVNTMhpp9l88J+0NkErTH455cbTLzt4x/ViRxjrYInXajNpahAyDMxGSXhw4WqmOcEJifSAQGilRWgR8w/vgCKPCcJnpfEHUjYQW3dCcthYorZmvVkSRxgmonUEKyebGOlmahPQjikj7PdY2NqiNpVguqRdHNHXN0WzBdDpjZ++I48WKqm5xnYs/AtRpShQaHr040OZN12io6pqyqkOKeMYY0HdZR9O2p50j7x1NGaZkSecxbRvGwLVNl+s76safyrJjFab2SiGJ40DWnOcF/SztMjRH0zRorTrWgicRIGVgIbTWcDRfMssr1kY9hnmBKXOOXj4lHq6T/8af5F/+i3+ZwXDMxx99SNUJpqy1XLt2jXfeeec0/suy5NNPPw0Nps6m4ZweJE1T/vy/+hf4Z3/nb7AxSKjrlqNZwdGq5eHBklg4nj78nDvfeocrF7c4PDxmZ/8A0Q092Z+vQt8/zRj1LUVds300D6TCKBS1kYRxllCZmrr1GGdBWFzn6J0bh8chEawP+xyv8jArHEi1xHlL0xgSJbGtI0kS3r2zyTffe5e2mLK3zHHjBCVg+/k2+4fz0CUyBiktRdOyORnSGMez/WOq1oYevwgipl6s0UrQ1BULUxDFMa0NiHfroGpqemnwxW2MDQsCRRolGOeI4piiNqRRQtm0eAJqL5UkjRWtMdTGvBrp0OElcRwTRZphP6OXBdfzNImJoqjDIFTnDRDa2lmWkWY9kjQj6Q8Dsk7LbH+Xn/78Q5bLMEe8ag2LMgyrdNZQd8EcsC5FXtUM+1kIkLoOwqu8xHbjGVxVBdxAECj3MtRKJ1iBdTaMcugWjDsR1HnfkTiD5FgIkCLMMwF3alFbdO1jbw1l1/XKkmCVpKQmigP20rTBQDtJYrz1xLFG4JDO0UsialMzX1iWeczBvESrXca9jBfPnlLlOb/zb/97yBPnRSlQqA7r+LKvgjwjmjq3QHSk+PXf/FU2xwkHu7tMd3eQO/vYrOX9jcu8e22LSHgWq5yVM/TTBC0li7qlNYHpiW3ZO14ySGOSWBKpiLquqFtB3jTUTUPTiZL63rOwLrQegdI6HFB1Th9l21I0JgzqsZaLkxGpUsRZyu7hPnkdLHUub6yh8OT5inE/I1/lwS1eSIZZBrMSqRRb4z55WfD5smDQ76GV5OK4x8FsRaQV1y9dIFMgbQsqGEznqwUy6bMqW5682KeqC5Io9P3HgwGrqgEV4VHdKObw2i0OGYW+usSzyovAtfJQ24A293sZSZrSz9JgfJbGIV0iKDbpQCsvAKUZDntEkSZJU+I4pqoajqdz6hcvSWhZzac8PzgGEVE7ODye4XFoyav0RnZyYGOwdQMCjld5x4gNoy2c9afq0FDcgu0sZl9ZcniM7cwRHAhCgX5OnNTVDOLEP806bOf1rNTJRKkgYTDGnjJ0rXU4IcJmaMO0s3AfQaw1VpjT4Uw60jSt7SyTPM5UNEawtOBkiiobfvfv/E0Ejm//yp8MKtjge/OLba3EmQXigTjpc/tbv8mFN75DMd3nn/7X/3dqOeaH3/4h3/3+LzF9/pinH/yIxYtn7O+F4ZjrowEjIVmVNc/3D4mjmBjJbFWSNaKbrBQz7kGawNGyohWSyoQWYCwlltDdqHz3wIE4SViVNbGWWOOoLSRa0TY168OMfpFh8Bwtlow3tiiKgqYsmIwGKBMkusI5hIpoXE7dGnanS5xQ6EjT1jVZHKGMpGktSZoy6WW4pqQ3TtmYZChpqZ3AWs/O3iF/9OHnaBWhdILUCVUbdCkOQZporAu5fFHVlE1D1dpX5tJShWcTR0yiiH63MJSSp0XwSVojpEQrTZYlaKWYrI1JkzR0ZYQgSyN2nr/gwecP8d6xWCxZljWruqbxAtu2oUao6pC+KcWqrIOJhfNdIHeLj9AsEQisC1iARBDWZyABnnT4nAecCU4tHRXDe4GQISVRhJrB43ECtAi1yulM+66zJk4kws7inQsTtlw4ZaUQeOvC628brA38rljHpxtNoJcIYh1kuFJKtNbdieyJtERZS7GYMY8iJoM+/+T//dfpjzZ49zu/jDHtl3zbBK9e21mMUb8a8Xx+sLrur/Pbf/l/zJ9LUm7cuh0cOn74Kxz/2m/wD/4f/znW/JjD/X2OTlw9gM3xkKKoGQ573NgcB35/WVFUNUYrGgNbo4xZ5fC0NCi0dzRti9IaaS2VDTnuoN9jtlgQS0npQ0q1NRkzGPTYn+1RtYayaRBKMy8aHj95wuVRxHDQQxjJYrGkbltmZYuQMOonXLp6mdI4jmc5w0FGUdY8O5jh8WyNR1zeXCdrD1gsl2xsjMIp1ElfV0WDVAk61pStQ1ChtCSOBcZK9qbzMD+DUPDFcbANyrLgERXGsKnOjlWcGi1bH1B4LRVRooiiwFeK45gkiRkOBzjnWS0WPHnyjMPDI/Ky5Gi+pGrCEBzVDf6s65A+1U0IgKbbsX2HDOsupahtWIwhRQrGEEKE1aIlYeyFAOcFmZaUrcX5V12sV/M2QkqkwsDibhhQpw7tLgu2RmA6KyTvCbt411XystPOQJAbK1AdmOcRSB3Si9bZYMfqPdKERYCQ1HWDJGBlQgTWt5WS0SBjVdYcHbwEPNe31vjgj/85v/Gn/yyTyTree2azKZ988indoAGiKOKdd846oXDWm/cLk3YAvCKLU9KsR9tUVE1N6xxexpRNS1GWNB1qLKUIPk690BHSSnJxY8SgjFksAkjV68dYIHMljeuo4U4gnMHiGSQxdVExGfSJIhW0DzqirRomSUw/jcnLiie7hwhssNDRCXXdsKwrLg5G6DimtS1lWbIsChZl1ZkSi6CfUDFRYiib0OMXQtA6uHPjOj3RUq6mEMHRdM7mxgClYmbzJQ+f7eAlFG2LVBF161muapxvQ+0RaZI0zDHXOrR64zghjuNuXHWYueLpSJeCgHFoRZpEDHoZaZqg4hQVxVRlRa/XoyoLPvzoUx4+ekpjPVXTkCQJSkfYsqIsWhrjQj1kQrHbupCqSiVPgUvrPVGHW1hnKYNNDMZ7UtX5deHRgLGcdpdiD7ULwepNWBSp63QezqGVQHfewx576vEcTpgwCMdYH7hpeAJjJ+zZkQ7XCiG61M9jWoeXndxVy+5Uk3igscEZRkrV2aHmpFGEVAFbClakoWtWNy2jfsYiL5keHaCEp99/zoc/+n3+7L/yb57ak+b56nS8R5ZlnTfvGRzkq2wZT+efnwwt6VxMnLMYZ1E6oqgbZnmFl5K8qNAqcJBWeYkCkjghUQ6tQl46Xa5opUZ4WLQgXPBbinTMqqpZNQYHYddVkslwwHSxwnnHWj+jl8T00442vqg4WLYMxxG3vKOsSvIyxtgh+7OSCxsRSdbHdAMwx70Bq7JmWRp6SUpZNwxijegnTFcN3777Fj3Z0ujQfg4CgYAf7Lzc5tHulFnjKGqPVAalQks31gHc1FGEUOG/cZp2NvqSxli88bRYpA6M6V6sGQ36DIfB3G40GgU03np29w+4//Gn7O3vM1usmK+K0xn0wywhlpK6aiiqGro5fnnjTuaWhbRVBxQ7lgovPaVxwewA6MUKgad2LqQy3c4dK0ljPaobq+d86G7hHL1u5z4h/KVaUluPFZKqdSgPk0zRtA4rA5Do8d10Xkkkg+G2tRbjw8boO77eycLRMoyxFl1nKupoOs47tA8dLOcc1oBVDt0NRW2MwXtxSpKUCpIoxGZrDMNej1XdUlc1j58+4w9/9x/zg1//LcZrW2cm4sqO7Cj54rQ27fFnqI5fVmHZM0Ci7wYnbly6gn33fV7s7dEezKiaFkfQjSRRjPUK5wyzRUlrHf1YBOfE1lG7AEBJKaisYF7UnJ2efTJfo25tR7eQVA2s9VM21saUs0MiHdHLEnq1YW1tws1r1/jgx894blZc2egzGQ9RUcLB8SGtdchYsns0oxYRVkhu9TOk15Qt5GVDrBXT2RSbBbWjaWricUYcp9SNY1m2bM8aGi9YHyQkUTeXA4mOInQUoaIYHUfh2LcuzPpwtjOTk/SzlEG/x/r6OkmWYY1jmec8fPI8TO6dh8mx+8fHweZ0NMBZx7DfDyIqY2mKMGtkfxHUmINIobwj0aFbpLQMaZfWIGU3X13RuhZ86D45PFqF2sCdpFcEsZp3YSOMuvrCWksv1tTGI5zAy5NUKSTqugumSS9FC0fpBGXrqCqDFISOZiTRKsSS6tr3rltsrvvjuzER0nXZRxROBE9wnJTOd9N3wwL2TqCU6Lp6gbouznCsjGlJIhVMR2S3oOsapSMePnrM7oudsEAA5+yZuP/y2A4dRfGrgsV7BoMBaZp0PxBe/IsXL0BAXax48fQpT+59ytPPPqKqw3CXnnUsiwrhFKlWOJEibY2kpY0i4kixrBq0CEd83p0UQkr6UmCAafe9zcmoE6+UwbjBhN1sczKirhtm82UYziMEwyzCNSVHB/u8ffsGTx895fGzPb7/nbdZVo6PPn9GbRXCOpZFy9I2XLu0Rd2GWRxlY8gbw6gXU9YNz18uWZcrBplGCR+GfMoeVVVzcRRhhCSJIpA6IOxJjFQRBmi8o6oq8AKpFIN+n8l4TJolDHoZsY5xQtEfjFgVK3Z2X/CzDz9hvlyEZkQc0++lZHEcSI61oW2CFCBvTAAhBVwYSi4NE7bnJZWxpEoQ61edmeBGE2gT1nVqTO9RHmrnaYwn6lSM/uygGCnIvUf5QCmyNpw4qVa01oAQlG2LVoFKk2pBJCVlC/1YsirD5CslBNZxWqRHUrGsgy49WGv40yGdJzF2NiZ9V8CH1DCwoU+6f6G37HDGEcuQMksZ9DlF3RIpAaHFgBZh9KvppqXVZUma9djf2+eTDz9gbesKznuuXLl6blG8fPnyNYIpf+LG51lfX2c8Hp9eMJ/NuP/gfsjt2gYVZYw3NpFKg3NkkSLpZaz3M/YOZ0jn2VhL0cTM6op5YShaz9YwIY1ihr0eR0XDy1UV9NnWkDpPIgSNgI3JkLZp2DueYWwY1HhtfcytS5vUZUkSKUSW4rwl6w9JBkOuXb2KyQ/41ntvUMxnSOkRSmG9ROqIVWVBRzjTkFc1SaQZpTE4R+vg2qWL3Lh8kXG1h1lMkcOE0WiIdZ6yMrTdbqZ0jI4T0jgORtPI4CwIQZ3oPDeuXeONN98kS5PAV8JzfHTE5w8fk9cNj56/YHtvHyUClTxLI9ZHEdI5fN2wLBvqxrJqA/aSRQqpFJUxeCFYlA2X1wbMSsO8bsmECAN7lGTZOIQPQqwkUhSNx/sQyI21JFphrCONFUpAS9dp6trJ1kGqQsrVdGlXHEXYsqXtaoEw3RjWhwl5WZOowJxtuy7jqm7REnpRFFrm3RxFpSRta4iVoApJBKarXU9GGBjTdbisD9Np8YiTk8aJ7gQJOIaxjjhSwUQCmAz7mCaQIp0IPsxWQNMaxqMBjcnxtqWuKh4+uM+b3/gWm5sXuXr1yrn56x999NF5259Xo6ROWlznRe7uRDctBU7CajnHWUu+ynl5eMyqDF5VwgeXxbapKeo6vBgvMCjK2qBqGGWCsjqmaCypCw9uZWFpLNZ7RoNB52xRBHavCwqwybDPlQsXMcsZjoCsVq1l0Iu5cvUadV1y/coVeqJheaypi4rGdo2E1hL3RiSqxVcts/mKK5MhsRL0Eo0WcGljnXGWMtEZeamJo2CjKaMEa2pmeYVUil4vQykdzKaNw+AwQnPn7Ttsbm6hENy8dhXvHQcHezx8/JSHz3d4uv2C3aM5/UGPONIkcYQSgoGUrIpuo/AOYxxOhNQoU5LcOmpjyaIIrxWNsRStJ69aBrGkaEOaESUaKSVjHTHPK1pj6aeaNA408izW+IZuxEKgcESto3AeKzxxJDvDPEWixCkbII4kxrYoEaZlhRYwTHoJkVRY6+jFmlUdgrKxgX09iCOECw4ttbP0YkVlHGkUOnje2TAJF49yoBSnxbrvOmDCu86lMixIJ4ImJKgBPUZA2Zgw/1wF0+yyqLtTJWx8xnm8c6RJE9rdTUsyjsmyrhAX/ktA4TnCohDo07+cIW2ddXcQUuCdozEt5WLOanpIuZozn80oGkPeOoxzJFojEVihWRjLsDehzVdYIZmMBhRVzaxsQ7cFGCQxeV1TWocXgVUZRZqqDQq1WIfemzGd+s60VGVOoiR12zBdLEmGE+7cvklkl+w8e8alzTGT9Q3aumD/cMqLwznzoqWqFjQdGp9lCcN+yuHxnHnR4Dta+moxZ60nGQ0HCKFoGoPyipd7BxytSoQK4jHpg4DpzWtXaYzh5ptvMRqPKPKcomz4v/0X/xVPd3YoG8NsWTAeDehlCRvrY7QIz3JZVKzKhn5XTJ8gurGWKA8qkiROQCvJW0vZhrnwCIERsKhasljRiwLAJjrqrAZ6kaJsDGVt6CcRtbNYD4NYs6gaVNd2jaU4JespETpRkQptZ/AoQajHTBMIqCbUDlIIeknCLC9JIk3rIG/Cbm4cJEqQSo+XAVUP07ZAIBlkEdYLqrym8AEzcsK/qmnUCVrXddhsGF6kOhNwYwK+Ek4bh+2IogGraTHeobxAtKH4iOOYRAdcqa1asl5gIG9dvPLaMWxnx0GflBz6xEjLe4/ywbaxaZozs6ZdUKoJQRqnwf5GK4rVCvnTn7Dz4iXzLjikD5aZXoXdv58l5FVwOXFeEInQzWqdwwhBL9JYLIW1eCXxOKwJ2mGkoKxbJHB5bUiqFUYKDo6OWJUFFo9B8PjJU96+OiKJBEVVYBsY9IPx2IltcNW1QLMsDp6+dcPhfMX+PEcLWBsNwy5FGAa6sbWOFIan2/ssW1DZiBuX1rlx642gw0hSBsMxKkk5Pjrkw3s/Zv/wiLpp+fTBkzDGLku4EEX41tDmJVUT2rEGAtcNwUAKlJDEGhoLjfX04jAlN1KC9SjCFy15Y2itJ1KhAVCIEEz9SLJ0nrqxTAYpedUE+oWgc/mw9JKIogm7d2uCzauxnqhLbTygfDgh+rEir01nVuc70C9Qak4auEprGtuNHkAwrQMT+gRQHCYqmDeoCNcxpKMkRtU1qZZM8xZjA+VEehilCZUxwen+pGj3IPFhhLZ7tTBPrLC0DM4pUgTtUNVaIhGKbDp8xFhJL/UM+hnWOYq6wauIty5d5p33v4nuVJ8n5MUww6V5ZSx3Upvdvn373Cra3n7O8+fPO/DJ0+/3effu3dDeNS2r2TofTo9Zv3CJS1ub1Ispm/04tPicpW0se8dLZvMCYy2VDUBS6zwNoFRoWR4XJYlSNDZQFNIkxnanSdM9KecCMW3cS+mlKftlgfMWLzQOw6qosW3Dw88fsjaIWF+7gMTx/MURB9MF88KE7o4QjNZGeO9OLT7DjiW7EQ+a5WrBhSRGpRGDyRqfP9lm5nuo9QnJKiEbTzhYhPdkVxWHD56wd3DIcjmnLHLqqiKOIlIlaY1lPlvRtKH7pDu3dqVUSJ9iSdkalq2hH0WUjWWYalaVRXSEPu88/UhRR4bKdHwmFyZTOe9Zli2jVDNMNMZYmqZGS0ltIIm6QlVJ0jghrwuckIyyhLwyNMaTRgIlOqmwC/iJ7Hx6fbdZaAW1CxrvNFJUTegOVVVDrCRl21IZFzY65xhnmlg6dJyyKEPQT/oZTWsZ9xK0VlhXBycX57g46lFZT9u2RErSqVwxznduVx0Q2S0MJU5k5eEUbKwgU6ClO52Aa7yjNZIsViQ61FcH8xzrFVEc81f/Z/8x3/r2d/Hes7+/xyeffNLhLJ40Sbn7zl3EGY6W/qJ4/WTAy2kdAmgdYW2wc/Hes/dimyf3PuPJw4fkRYlxjkVRg5DILsgHg4y6cUQdBOuBeVkFEMcFPyIlBbENb0oKqOoGCzRN0BH0IsUkVggXgMdwvMJ8kZMb6KHJkpi3b97g2aMHSNcwXFtnvirZP3x8OnI6ixKs9RjTcnV9GPhjRRU4PkLStg2bF8dIX6B0zHyx4p/+9AGfbs8Yrk14eXQc2rYeellCUdesioq6acK0JxtcR4pVjfWCwthQUCoV/KBOgVdHohS+q78qY7GuZRQp6tbSjxVF2dBLo8CsdZ5MCVIJebdIpLX0ojDevmotk36C6UYnO+/I4gRrWuI4QmtF1dRkUfDqyqJA8HOEYIpVoPx4ggVS1bTUNgRbFge/qNa29NKYvCOIChNGHZSNYdmEkXGRVmRY4g4FXxQNR2XLMFHBiFt50lixqAyNDXSXSRpMKxZFRaICWVTIkFJ2qATGhQ5cHOB9WhcKeCEFqQrTlZs2nKa2SxWt1yRaIlyLaQUFNaN+Bkrzb/+V/4Df+BN/9lwJcVYL4n2gu3x5RuFrRqf5Tgt+1kb+xOx9vHmBG3fuUJcrHj24x/50SdE4Gtd5WBko8zIwOJVCEna+oQ7CqaWDVd0wPzmCtWTcT7HW8fx4EexzvGdzkHG4rEIO2VriKEUMBmzZhuqoIE0TUi0QvuHb79+ibA3jtQmLZRFm63Xgk5WCumkRIRlGCcHFjTFPd6cME0msFNPjQ5IelDH0dcS1rTE/eviCn/9sj35Pd0Wd5HiVY9pwMlnraeoS68KpF0tBLAWjLDB7q8aEwrZDpe2JaUDYmbDC0VhHLYNVp3eGXqo7lJpQkxnLxiDD5g1VR+hzPgB+VWNwXbep7OjmWRyRO3PaycorwzBLMcucQRrjraMILEN6kaZ1bTg9pAhMXR/IhFkcYYwjVoq8De4n40R3ZMpQF1kPifC0bUMv093gIcNhGZD8Sb9HL4mIRBjNsCwNaRLRuuCiclw09GNNLAJ5dVWbAFwKgQ06cJx1tM6fnhxSCGIVdP1Kho/FOIDQ0coiSBRkaYLqRGsew7/0r/+b/NX/+H9+JsbPT576KsBcvs4exXW1iLWv3CFUZ2+f9Ppk/T5lviRfzmisp3Gh22KcpWgdSEWWRGghsG2YILVa5uR1S90R5HpRGCVde89gNKKfZSzL+qS/FtwYixrhPWvjEdPFktF41HVYBFJFbG2u8+btTepyjneGS5e3iCJ5OujGWuinUWgLmjbQnIUkyxLmq7J7X2EgzvraJCjkTMvL7ecU+Yr1UUKcReznhuPKcpg3HCwq5lUwO+s0T8jutLOAwQeBUqwY9mJaFzT4At+lAaEmCtOlwoeeG4f1nixNibVCK0GWdNoLpdBKc2GYBR/dDg/wztFLo5B/a4nuHOOtDYN5vLUkUiKlYlHWSCGxbUs/iVEnLVwVSJLtGV6WUop+pFF0nl9KsmxNoJI4T6IlSmlqB8Mk0P5HaURjAo2ktEHfv5HFDJIIKRzeW4raMsxiqo6FOy1DoyHVgmGigs2UCv89GajhOrd90dUbnbNrwOQcNF7Q2MAZ09LRiwRZolgbD4mioKGRWvM7//a/y7/3H/0nRFFybnphGIfgz41N+BJQ+PDhw3Ntrn6/z5tvvHnO+eHhw4dnjH1hsrFJfzikbi3LokFIFZz7GkPROpo2pAGDLCEW4R7ehN2ysqEWKYyl9Z40jsLMu8WS0tgTFg9SCOrGcKGXovHEScTyOKj7jhc56XCTKBasb40YijG2tdRlRURM2zZda1ohhaaums7KyFPUoQHR2mBlqkTYNWezGQNlKBuFEOaU2jHqx0wLc2r2JrsuUOtCQR11wy298/S1oHGeZd3SFwolJL1Ek1cGvEULidCSfqwoW4d3DtPVAdPKoJVk3M9wNlBZJKHuaJ1BKcE4VhStQyiJ8ZAIsEpT1AbpPU4EOkY/iSkqgyRMnZpXNgjThOp4UxJjTRjh7KEyBiE8xjkyrUi1DKIt7GlKpIWgn8YkWnFY1IzTmEEUeGXBIVLiHawaS6olo0Rj2wYvPF4GRaITEtMaGqCfJWhvSDoMqawMkRLU9uQZd4g74QFJKYijwBbWShCrMKxIdlqVuJvC65xlOl/gEXzvB7/C/+iv/kf85p/6c3gv2N5+3nX9Qiz3ej3eeuutVwi8NTx48IAzvBL0vDOXDvx+y2RtwtramfEHiwXPnj07/btSkq0rV7jzre+R5yWL4h8ynR4jgLxaEKlgXDxIFLZpWTnoxRFxBLIJ8+uklKRCIdrQijTGsCw7Y7XOQt9HYUerjX3loG7DzrvKG5SqMV5wOF1wbX0N2gaEoi6WLOYLqsYwzRtKJcJ02KahrFqe7R9z5/olxr2Uw6rtSHkWREhp8qoiiYK2o58mJJHsxpqFHUd1FAoPwZ1dhNcbFspJkemYVZ5eR98eJMGYQXfcn0gppLDIFlYuYA6th+OyQUvJIAs1UxRLhpnGGI8XHuE1XoSAjUSYWBVHwVAujRWmCU4oqVZE/YyybnDd1C7lLEkU4V1LL1LkTXAZyaLgnILzZEphJVgTBGu9JGJZlshOpNXrCnUtJZNEMS+arpYyxFHQjUggkYIo0gjlUQiiOAwWfXm0RClJDKRYYiUYZAnGgNYCWXtGScTs/8vYfzXblqXpedgzzPRzmb22OzZtZbmu7gbQMAIJOkmQCYYupAgpcKE/oHv9Gl3risEIKYLihUgqSIIgCIjdALq6qyozq9Idu/2y0w6nizH3znOyqkFlR0VFR57KY3LNNcf4vvd9nsHijSURUGSKbILpOefJk/iFRiC6UIREA8dHGU/PjyIPIM34X/8f/gn/5//L/zW6Hacv/++++5au6+PS2zuqqmK5XL63KPzu2+/eA1m/c0mPbNU/ZAsV06Lw/qhVzZccP3mKxzMMfawoSkmeaRSacRiRwTErFN5JCFE7lsg4Grwv09w7sPdtj04zQjdMkYk4ycil4DRPqcoC62JwzYwjdZWTrlZ89OmPcNbiug4l4PzpKYddgxCBm01LniU0NtAPY/y2ETEGcmha+tHipniG8/FXU5UZXRuZYOM4TkellFTLCI4jILm/EBKpgUJiPBNwQUw7HEVnPXvvSKUkIUo8xfR7Hp0n17EAZJ1nCFGb0Du4afo46cpSBDIGCfW0LPOBIjgGr/Dexb62hDxP8d7GJd8UJi0SzV3nCTLQjJ4qURSpph8dUniUVgTjSbWgHeM38cMKQilSnUR+l5BoCYsiehBH5zmZ1TTD8PBW1mnKrNC0/USmkZJExg3/fdx9vW1I04Rm6JjlMclQJBOjGEPwjjpPaEdHcI5SS1ZlNP7eHOLI3vrAMD2EmsAsT8mk57OnS/7J/+Yf8u/9wz/jpvX8l//tX3B+dvbwcDAdF+8/x/GF8IfJij9UD75HNfHe80P7dPwNTuEaBD4YDrsdQ9/z01/8KYfdjr/+5V9yc3WNLTL2+5Z2NIwuTp8S4WJcIjZmOATLwXvMFNFQ1nG+mHO3OyBEDCoyXTgF8RuS4NBakyUxOi6k4sOPP0bi+OWvv2Y4TRiaA1/+7pLzR8cczXMEkdCSCMlh6FEyja9t53HWxQZkCAQfpiiExhnL0ayOXKxwH56U6BBvC/dubuHDFISLl/JEKlpjcQIyJZEIiirhMHy/GDXjGOmKxGmg9XE+clSkbHtLO/2ErQvctT1HwZPPZuRlypubDYsyJdfxjH4YPFbEEOC+HziflZhRkKUp226M3/JCUJc5XkiaXcvdYWSeRniBVjHkmGrJYOPR5v4DoaRAqqh3M9aRaEEwgVqJuBNLE6yL+5QyVWx7E98wwdPZGNJ8dLokTwTOjhR5zvWuR+mEbTNQpDoS9Muc4CyDF/H4l2l2vacZDDOtKFKFwjMYz7Nl1OG92naIAJmEWZHw8fkc5UcK4fgf/sWf87NPn3L8wU+oqpyX33xFCBYh9IQaFQ8KNgH44H5PZn5/9Lq/iwgh0KvV6r0HZBxH3tWyGWM4Xh2/NxYLUnL2wUeU8wVBSJzzfJf9lm+/+4ahH8hETLAErbDese0Mg/E4JOdHNfvbHXmqmVcFeZaRKBXLT/deRHH/eouFGu8dRTHDlTndYMnqOT//+Wf8s//mv+buzVv6H5/wR5+cst6PfP4vPueLF1fcdTFKfQ+JNmMM/5VZwtPTFde3OxIRP/BlVZPpkaZfR3RoXlDkKexaqrxgdJDKeDa2IaCmvgKOqVMvKBIdMan3MXHnOSqySNMYDN3oaY0lD2qa7cc3dp4m1HnCy01L5+OksLUg2xHCnsfHS07mJbs+wrxzJVG5wPnYoJNCchgMqypjGOORtR0Mg7TURYF1juMy4+oQ2DYH8iS+HVSwaCHpvScVEkIcR482GqISFdE9FoEWUfOm05SySDHjSCrjsMGHwCyLjK/9YDkqUuZ5gjEDZZZFqahWbPcdqdYUMrCa1SQSesv0Z5BycxhoupFZem/q9bFGoCSzMuV600S4hggs0ohV+ubthqfLjL//0w/QMvDi5WuOP/iMNFFcfvc7/vW//O/55Kd/KyZ2Q2A2m1GW5YOL8A8p2O6vFw9vkI8++ui9p+ibb77h5cuXD5zS5XLJu+STcRz45S9/yeGwB2NY7xs++NFPkEJwdX3Jvu35xU8/5fWrt7x8fYV3cfz5yZNTPvvxc4bBEL78Fp2lbJseZx3r/hB3KDIWZrRWVKlmLgRVpjk0DVVekGrBq5st/ugZ/8l/9l9xe/WWj85K8lrx6Ycrbm8P7Pd3vLje8duLkafPjvE2noHzNKHrB2wIvLxeM1hPJiAR0RsxBMPQDSgkw65hVlXMygHdtZPB1ZMKRZHFUakLse/gQ4j/4lxATy0+A2jnMS6wLDSnZcZGRIWEmr6lrPPMMx29FwKOi4zXhy5urr2nQyB6y3C14fnJjDpLOXRxG61U1CmsbTzmWR+pM965GO57mEBG8EO721Mlml3XkoiAFYq6yCNuyEZugHFRBNRbS5EItJCkScp1c5guX2qKL0U5aZAh4kBDvJMNxpEpxXGZ4axFEMfnFkE3NiRKUmcZiQokAgYTd16pTmisYNcOHFUJZipMzfMkMsGUZnvoyFLFPJVsRs8YArmLbONuGro8OT2KMiIff+46FfzFP/2vUMVi2vJLfv7zn5Fl75MVv/r661iY8vdkxT96f4r1h5rr4h0i3Q8XiVIqlNLkeQFpxsmTZ6jwmMUi+riF+i2LcEX+dMV22zHstvzRp4948vgx2+2O1armR0+O+We/+g6DJM1SbIio/PC91YcqVTCMZIkkSyIKc2wPdMZxc3XH9tXI//zvfMJnJ5rHRxlD23IyEzw7SVlVkiJR7A89F4cRoTWJHimyBDMazBBj1zbAYC1vLy/JVjk/ev6MzeUbQoDtoYnf8iGSWGSIZ9N9N5AnGiUlxlnyRE/phug6um/3xTGpY9N66jyhTCQyjR393sUHZHAe50fKJNIsZ1pN40tP7wPeespccbc7RMeKlhgXpg65pco0d82AVILLTcssVxRaUabpA+eqyDRKQJFINm1cPloTF5wyGBIBQUmKLGE39LjpjN+Mhmo+px0tmVYs6gJrImBbJwm+H7k7jNwX2wcHR1XGalYwjoYshge4meI8J4uKQz+QJyndBNuYVxXNYDgcDjyZ5+x7Q5anVIlkNBaPwg4jy1lJ1w9x3EfcP1V5SpFmnM1KNrs9y0Ly+GyB6xsenR7x+Vff4Zs7ut0dxeJkQgiFHzIZpghLfODvqwLvjnrlH9yO/EBL9UMCtpiqjVJpquURZ8+ek1cVMlGc1g6s4Z//y99wog3/8b/zY169vuX/+V//BTpL+eDDp3z1dkM3WpazgtE52n6YIs1hOsbFi1qWahKtcR6cGTGmJ0zKsb/7p7/AWMeri2surjZ8/tUFf/nFBb99uaYdLUUiSXUcBbbdwP7QcX23J0sSyjRG0/sQaFzMfR3ajrZpI7xCa8bRYIyZykVyClTGHJpzNtLTRYxxp0oivSeRgTpTrKo8fqCVoNSSbrC0FhBTC1EK6lTfVzUJQlHmGWd1wSpT1ImOsQwCm66nyAsQKl7qvUdIBUSI92oWu9c2BK72PYcxTrS8IHbJrYsPg3ekWk/5qBCzTiK2+7SKQLskiTEXMamW7URkOa1zlDckMpAnmuAdt4ceKaPbJGJpJUdFGiHW1lIUOZs2Vgs+OV3S9x3gongIWJQlznoIjkfLgn76dc7ThF0zMHqBdXFxao1ltI4ikVRaMRjPrunZty1llrCoy0i/94Hdeo33FiETDrsNu5s3k+3qb1Kw+Yf/3GOV3nuDdF33e09VnucPP1BKyfc/Jm6CsyxHKR0tQnnGdn0TWbrBUGrLX37dkMvAP/4PfsZ//c+/4s1+4Oxoxp/+yad8/fUL1re3fHA6x+kE0Zv4lvJ+IuvF7M04Bkbr+OxpHPHaoUFrifCe41nJP/j5h/zyX/0PbHZb/mJ9YJzohIO1vFp7hE4JAbIsZQyxp4yA1awkGDM16eIeQAoYTeyx51pPD6jndDljPUTpZu9sfIWHeDHXMkQskXGUSVx4Nb0jiJjOrVJNRqyESiDIuB1u+pG6yOm6/qGKbIFUCJZVEW21h45EK/rB4ELgYr3nfFERRCwCBesZkQQT24RlphksOGO5PvQIoUiUoBkM5agnX2KMs7ejpSg1wxhTuoEIr7s//iWTokFLQdePUcA5LV6V1CRKcrOLSYVZkSOV5nyeY0zHrMxZHxpOFrOHoOvpvOJyvWfXjTxa5NR5jhDEwUmSkiUp19s9UipWVcbm0FCU2QSJSxDegvfUZUIVFLp3XB1iegEk15uGjx8tKYqMw6Gl7UfSNONwaBDJvXNFI5VmGIb3Eus+BPK8mBRsniRJaNv2/ajJu8op5z0ffvABH3zwwfeFqe2WX//m1/ECPZVmfvKTn5DneaTeDT1vX2dsb654++p31NrTNAP/4d/9iFdv1nz5ek2eJvx7/+hPGPs9v/rN73h6kvLoyYrPL5poBBoNwcdOsJLx260ZLcss5ac/+RlPT494/e0lRQFny5yL3qK95f/4v/wHnBcj3339gsW8ZrDw+XeX7P/NK97sHVIG9u2ASjLyTMc3hx1JdOxjxA+8x44DutBc3W45qaI/ZDkr8EJyspqjpSBT8oEKcv/qTab+zGAswccllvGxL22spUwVxZQ5G6yPSB8laPoIn3M+oHAUUpHK6IlsxpHjeYl1jiFPudodOFiP2jecL2uS6Q1a6rhgs9awzBOu90OMpoyGm0PPR8ez6PawlkwnKCnJpGfP/XLPkE47qCLPEd7GMlWeUaQKZy3rpqHUkjyJ/79MIhRvc+h4cjSnLAq23Yj3I8WUYMgSSZGmNG3Hqsq43re8Xrf8/PEyBjIHiw3xqD4MA4fRkWUpJ3VB0xxAQppIMqUjnkdENyIIilyzrBK2XVSFLxUcLefsu5HHq5LFYsbJ+TmHq308VmY5P/mjP+HxJz8D4IsvvqDv+wcF2+PHj9+7c/R9xxdffPGwEAeBfNfy+aDSeuc/9w/Gu7Agpe7VuZ4szyhmM8zYo0PPEFKqJ495/qPn/Jtfv0QpwY9/9AhFw1dfv2V3aLFovrluuNoecN5j3ffbzfsP49NFwS8+fMTxfMa33/6WPI/HE5UVvLjdMTqFt4G/9We/oBsMT5+e8NmHp0jhyVQglXHxmejo3BvGSFnvBsOu7WKsJARMgH4cQQqC0pMLUJFqwW6CvRWJRoYYnDPeE4QgTTSzItLXhYgmLDeRRCK9RNKOjv0QE69poklUjEqkiWKwPhalhAQZ7yvDOFBmKc46Cp3weF7y47MVVZrQmsCuMw8ADaUUWgSqLGqUTxclhZbM8xRPYNOPlKmcUtixskuwU6sw/l5EfIWQylibdVMcRgZP63zskSSKMC0zA1H088HZiuN5xXq3R+IjkmlWxeVbWUxyIWgHy9tty2ePjqgyyabpHv7ME63JtGJZZjyeV0hrMM6xqCrmWc44jhxGR+tApxknywWPVguKWHCnNZ5DN/L6+m7KjymqqiLRSbQGOzvFR9wDYundz3nsAcoffN7Ve5GrGOn/ATzrb/7r9/+e0glSRr3v1duXWDPgdMZnP/8xv319RycFOhc8eXaC9YKr9YFExU7EdoyKhK4fJ6mJByKVUEzR7mE0aOE5Xs5jDzrPGaxj1/a8fPWGl9++5L/8f/13XNwN3Nmau8ZiBsO3Fw2eiNSRAtyUQnYBmn7AWBMpgVPKdjAuLuqsAx3RPfk0Sjx0I0rGtGkiIJ1gCPcj8NjnUAipcQEG6zHTqPqejNibmFFLsxwlY/svSxJCkLE621uMDxhnEXjKTNOPPf3QsyxSni+reCFve/ajjfT3fsQTGVQRDi2pUj2RFwSbNi5dc61wdupfSEk2KbY742gGN7UbA6liCmA6xnGkMZ4iSSZKpGJ08fdWlTmLquBqs8cGy1EZP+SBKFLNkgQpYLCO1+uG58uSVZ2xGyyj1LTORxi6s1RFxrLMyZTgMBjyNCdVim4c2PXjQ9FqGCx3ux3DOOCDQ6vYck0TzbzK2Gy3+CBJswxjxzh9neW0fY9O839rGPEPX8G/36RLNX0bKake3gr3wa37WfH9G0MpNT2d8V+Kd3GpEhDc3lyz2bXcbTuGZs/F9Y796Dg4yWxecnm7Z5Q5g4PlcvaAkRETClPKuOnWCkbnuT70TCsdHp2sUAJ2bc8wDCwSyayq4gdhs+Ooznjzzdc8/eRHQKAuVIyluKgEOz+ax7tH8BzPomosTMck8TC5U/TW0QyGJE3RSnJ6PGc5r0nxLPKEairZBDchc2ScDqm4gaLIUo4XMxIdj1WFlszyjDrXeGcnCWa8W/XjSJIoyjxl9LDpRkYbHgKiZZaghGS9O0QEUq6pEs22i27C3nq2E/MrTxQhxCiJ9fEo5yeOVJEmVBPrt8ySiIPVkS5yGAx+Kkd5H/+sci0fEELCx/RCM1iETpFSMS8y9l2HdYZHixnHdUEInk3bs6xrcI5cStb7ntN5xXGVMprIIXPGMksTMinjdE0KtIhv+jzPmJUFUkXpUJlnCALbfcswjBw6w5urG/aHhuBiV6jpDCrAIk8jjd4Y8jxjXuZ8/OSED58/pV6evBNEfP+Ncb/Xe/c/95/z+8+6/unPfvbe03N5ecnbt796WLmXZcnPf/5H7936v/vuRRTeTH+4T5494Y//zt/nP/u//9+oMhfLQ1kKSYq1lvms4leHAbIlxaxGpBn90BGCp8hyuq7FufvWmCBXEoGnKgtu7zaYvaUfe7abLua4UkWRZwiRIbTnuK55dJxz+dVvQKUoFZgVGSLL6Xc9WZJESIALrOY1v/rmTYxBTH1nQgxS7pqOfsg5NJJZVbC53lJkEeRm24F5kUKIMRLrPZ0NaBG1B3KSzVjnmJWxgWmHDustZaJJS4VzTPHrqUQ2GnrjKVKNVpp+jDm1VV3EzNC04d51Hc55zucFxke0qQtT1VXHO4hSmiADWmog9jo27UihJYuyJIxdhDcET1kkGG+56y1VqlHTkSJPNLmSdFYwjANVppAoFnXJYbSczwtciPjYRVWxnDJj+z7KRhMZ81jGw6qqyLTHec/1vidNNKtZ5JFVVU2ayHgf0Jqm7dA6/hk44VlVJcPYsZnSvJ25L3jFP48i0xw6Rzta1ruGT09L3Dhi2g7TNhQ6/tnLdM53336Lyq4JIfDBBx983xgE7u7u+NWvvv+sp2nKT3/60/cv6e8uTu6fqL7vH/5HeZ69t1yJOuDxwTcdiPGNP/uH/4j86DH92GOubzmZl+z7SOJ4++aGQ2/QdLzZwZGCtusRiOiIEDwghobRksYvZIqiZDGbkbo9i6qkt46AR0g47A+cHRcERmbLFWePl1xfXIKMHRQvBf1oaPuBcfpmOJ5VESM6xJBdoiTWOUZjMaOjyDSzKsU6S6Iznj065u7llrpIuNtG5lOmFWkSp0HCQaoEszxlMI5dP2KM4XZrSFUkKTajZTAerSTH8xk60ewOHc3ocSEuwoSM2SobAneHFmMtq7pATHXTZAJAex94vFry+vpu2qEE1k2Pt5Y61fgQH2wnBOtuYNNbjsrAAqizDEegGRVNb6jylM0wRJ2A1ljrKSfCoAvx7aqkYl5VjCEONIL3fHO1pi5yPjw9ik7KwZGnOg4CAowets2ItSPOR3ZvlmjSRHJ36FmWOc5ZWi+nfk2LVirevbxFeofCs+5H9m30jcxLydnRLP4enKc0nrtuTaYF4+gYraFpD3Rtg20b1puWi8trUlswjiMiaBCBJEn44ee97/uJrBiDpD/8+/Jvoirek71/ePeIN3z5kFURkzAxz1P+vf/oH4Ou+OTZGV+/vOTQjTw6O2bTBsp6htKSxfKIpjdTmWqCHU+gACHhvhozKxIen64QAnb7Pdd3Ww7tEMFJAUZrWR96gkyZzzLGfiDLSkBhQ0ydGjuS6pgKPrR9nPH7eLYenKe/Hw74aEoKQZAqSVnmHJoWnKXIEsR0Nu+MozHxPF8mCk3MK+26gSzVHNcFp3XJaV1SpZqjXLNIk4jc9I7Nbk/wnqpIOZoV5Gk0LsngWdYVZaopJujCoYs+jiyJRaQyi0eO3eHAajGPJisdaZdKKdIkwY+GTMBqIjAaH9i0kTpjvSNPE+ZlNjkUIzxuMD6OeFVcRFpn0Tpu94s0im4O3YjCc7Xdg4APz49indp6qiJDTRVYHwLbQ/9AaVw30RTlg+PQ9SzKIpLxEQzG0nZjRJoi2LUdfd9NW/bI/zmqUk7rlMeLipO6Qk0CnWBdrAGnGjHBPkJwtG0MqiZZvBPFdYW6rxj9wb3ew+dYfJ/F+rc+IN+fx8L3rcIfIOIffkyIkQYCdIcDT5+d84/+4d9nt284mufMs4RCS169vcAFwYu31yyqnFwrqjyLj8IUY4eJVaumy1cdlcaZlvR9hwsSnaTkWYIDkryIVV6pePHNd7x6fc22jQrlKpcxeTrGPoMxljSJmrDj+Zwqj3IWwqSZDoKySJnXBdt2oMxz0iyLJHTrMcYy2rh460bLpjOoJGM1q6jzJC7pdg37ro9cKCV5ejTjuMwoEom1nsEGBuvZtT3N6GmMoyxLHp8sSbSMKNSqZFnmzLJk2ukEMilJFeyaLhayRLzPnNU5szxDS40NMVuU4EmkZzYlZUut2fUmylOFZHdoOF+ULOsy+kokGOsjCG9q743Wsx8MiRQkSnDoBgZjpqqBY1nEhO2311t64xiGgdFLemO43MSMXW8ch36MRbJMQYBnxytWVUGQkc2lZfSxEDz9MKC0Yl5XDC6w6wa6bqDvR0QQnMxKjBm5uotSpiKR1FOqoK4yjAmMoyFIcN5xdnLErCop8wTn7fdpXsQfvJDff0H/oQdI//a3v33vB8/n8/esO8Mw8OWXX773dD19+hSt9TtmnoZvfvtrNjfX7A8tIxWPH+fg4KMPzvjdm2tUIhnGkavbTXRwT1IYKWIZRiDIJtTPrhsi81Vrijy20uxkg93sB+6amJI9fbwksXdIPPP5jIt1w+dfX/L2bkBnGqU1pos2pdHYuCzEc+i6hySuANquIwRB0zne2pFltuXZkzNu7nboJMG66HdHCqyx9KNh4x3zPEUKwSKPk5vgA62xXO8aNvuOWapikldIWhNj5vHo4lBS8HbboKalYp0o0sFSakGWKHbtwKgFq7rGuhEtA8M4cjBQpwlHuWKWCIqk4O7QchCSpjdRsOngpC64Wu8JQrDvDcdVwdB7sNGb0o2OOlFsBktrPUc6etyD8PTWsEgUUsWHr84Eo40P/ulqycvrOwZjqdKC3gqsGcg0k7jUMjjL8aJCicC8KkmnGIcNgcE4kglPMvoIh8h1hBC2Q0w810WGFFDmGUdlFmP3NrCs46AFApmMi9DRKrZNy4+eLsiKgqAFi+MlZZnjhobnT8+pjx7jvefN2zcPhSnvHXVd8+Mf//hh52Gt4Xe/+937D8j3TrY4QTk+Pn6frLjd8n2pKm5+P/roo/cuO22z5ebtC4oipzOOr97e8tMPT8jThNuba1Ra8cknn3Czb+l7T9t33Gz2ERyQRFDXUV1S55Ku7+lCBC4bY7i6ukKrGGnwo0fLwCKT2HGgKnJmPmNVJATg6m4XR8iD56RMOLRmsphK6jTOwreHFmMjcFlMYIBd09P0Y0zKKpgvl9zc3hFEgpaS/WDpjCVRkfea6jgFGa2nzPXDF4eXkVKeqkgsHH3UW2cq1lqNdczLjMHFvFaZJ9PdxdAMlpM6RyBZNw2pnnCtquW4rPDIuJuwnnU7YK3kvE5JgkV5z74bSJI0BhYJLIssPsj7BkHshCsibd35QO+gVpAIQTtE/UQg7oYgRkes9/TGk8moayuLgje3e/pxZFmmaKW53TYsCj2RD+Ndskzj0a9MU+ZFgghxoDGMhmEcUILINFaShY7pgUPXUiYKIQNmGFgWGWeLGustIWiUsIzGMQwjRRXxU6mPtt1+MNggqGY1d9fXHJ0+Zew7DvsBc9hSP/8MgBcvXtB13TSJdcxms/c+633f8+23372zbRdoKcV7Hd0fHqm+L5rId+xB79MX290a2+3x1iCAq/Waf/gnz8jrc756ueF6veXsycBPf/wZf/WrL+n62JFWWk1mKk9dZlSZYt92CKDIUhazGUN7S9N2HB+vkN0Q07RERdjJyTlyu6WepchshnEvkcJzXCqaztDYMIHvHCJEyFogRuoTLadkbcxqjc5Sp4pUBnKtKeqaTTOQpSm1FrQiYEPskAjig+AAEyK93Lvo/860Rsl4tm6MY9OOsbdd5WRpFomR08QrhMmK5D3WxY4MUjAEwdA7pPRshz3jOHK6qMh9pAne7Xu63rAOjjzRZEpMzhKN97GS2vYjs6ribt8whngh1krSDwOF0syKjKFt0FJMI/eInnXOUyU6KtRELD71Qx977zrSTIpUxnGsdazKKPs0LpBlGUIqBgMhOPJETkfYeKSUIUaB9t3wQPEcRkOqJEfzCklsZ5Z5OmW8xqiWBpqh59B01GXJ+eqIl3ctjuiFnFUFSkmG0cZ9mpBxo/7NG373yz/n+c/+blz6ie+X3z8M4f6hz/pUmAoPSq345Ii/sURyv4l8oC5O/93st1y9eoEdPfvDgVmZ8+xsyTKLF7FXl2uGbuT4dMmqLnn15oIkTaZ/5vu/uOBj61BLwdh15D6iKJu2j8RAE9gNHi8Ubd9R+QAypR/GyX8HuRJkZcbYOrbdELmtNk47EiXJs4SuN3gZ48xaxJ8zS1IeH2dUZY5zBtGOzMuC0zpFBYsJIdZsbcSQH0YX+9zEyLe1/TTuVKy7gb2xpEnC8XLGrCwiGqgb6MeB3hiMi783PR03gxAcrAMZXYxJIjl0Iy+2HYfRcTYvSbTmtEpJJNw1hh6HFoFMSbohdi66wSJVoJ/eoM0w4kNJlWd0bUPQkjqRmKldZ4J4gEOvypzOmAl6HY8iLnhSkZDrWGJyITJvlRwjAmiIHaEwGrwIjINlWUfx0DA6Bhcbpft+5KZ3OJmz3e0wZiRTcTAidEeqa+Z5Ri6Ihq5uJNNRl5EIyBPiiD/RcUp6u4utz0xjxoG+aajTGdiRk5MTLt9e8cW/+hf8vf/V/5766Hy6M7uHPsjvO9PF78Eb9LNnz34w4u14+fLFw45DCMHz58/fW9VfXV19H40XcPnqW27fvsHpimEceXJ2zNu3d/z5m9fkWrE5tPzmN7/h5HrJdtcgJseFiGqj2DMxFpfEvraXgWWVM6tLxk1D38UAnvH37j5o256Lq2vyfk1V5XSDox3GuEuRUBYpVkuKsmR7aJjVJfXEmxJCUmlJIiF4HwWYMuZ/gnMcLRdcvH0TCztFTlHksIvjyCJP6EdL048UmqgXcAEvBFYoRhdoRgMCzpZzTpdLlJZc3NyxPzRxIRfATiTz4OMGe5zUEkmSUGQ6crGIyNBmsFy3hroM+K5DK8WHZcqySNmZ2K3QaRbV2dN+KguePMlYFhmji28+rRRKpzTGsx3ieFN4HyuyAhZlyuW2p9KCXW9hiJyAIlVTsStjsLFZaCbf+bZ1LObVBDoQ3O0b5nWOVoJ925MXBcEHtsbRiwyfRPznfHWMcYZmv2ccDbq3VHlsIGIty6qMWoaJAXBII2Q9TDWC1azk25ttnI7NzvDGcljfoE3D9voCM0Q0UL+94Zf/8r/joz/9dzk+Pubk5OS9L/2XL1++AyQRPH36NH5G7qEN5+fnv1eYur6+joWp4DlaHvHZZ5+992P+6q/+imGyM+lEsb+75OrtG9TsjMubNXWh6ZqWLqRU82OuDt/gm4G8LKJWSyqkcpPJK0zVVoEI09M9LSQjMscipCYIST8OtN2ImfoaPki22x3bu5xtDy9e33Bo+giJcwbv9ZTuTGi7nuNZFaMmxlKKyKLVOk7KrHNoHY8TXXtAijgm3I9DjImHQDc6kgCpjKG8KtPkiaYZHeve0I0j12Ns2R3PSh6fHBMIXF7fYNuWWkGPoHHh3nUTvySmerH3Mb4SpT/JRIeHVSFoB8tusBxXBZv1lispeTZPOZtp1p1k141kZQmtnyDPgda4aMQVkCfJA6G8GQY2rWGRQp0nCAJFqti6OD5N05zQG2a5ph0Nq7oiMlLiL7JMNZ0z7DpLXeXTKFTQGxuZVl6wH0fKLBp6vUq53W5wmGmkOgk5lSZdHbPdbLnaNZF9pvO4A5qo9c57ijRFGRuVDiHWlx8fzXi+HxmHDW9uNvztT89jnEZA3+yZ1+ckSYJGc/3mJfWTK3784xiyfVd18Pbt2wlY7cnzgl/84hf/9sLU/RksRtB/P8Pybl9XShmJHlrFHNbQs2tbnj1+xqIQDN4z9C12mpGPQWLsMN0Lomb4/q8sSUh0YJxoG3e7FuMCp6fnfH71Ajm5++ZVyiIRNG2HEIKz0yWnq4ojUfLt22ter7cYbxCjZz9E8omeoG1N17KYoG77EOIlT4ALhq5tkcwYh56rm5uJKasJxtGOjk1rGUM8thSpQoaAJpI2rAc1sWxtCMyLjCfnp6RpyuffvsD2PYtEYKYlnBZgp6i994FZmfP80Tl937M77Om7HjOOdD5+cI2FWa7p25atc2RaYN3IxT6wLC1dZxAype26+FB5T5pqrImK6mEYGIylvE9HaMFpHUORdZbRTT/vTRslM5mWPF6WJHhOq2z6QAeu7zasZgXejEglUSq2RTe7BpTCIzg/OWbfdKRJrFKrNOPyzRWl8HgJIskIQkeCjbHkSc7RckHfdAzWc7tekysQIcOaKDfqTBOHHXkZ397DiA0CSZS7Xt4duD0uebIsCR7GrsdlhjRLCdZjjXmPovh7/SYpIKjJ4x7+7WTF8EB5j5vb+xLT9//A7zGXBLBDz831FT/52c/48tsLjHHkeUk/bDlelHzxzWUEpAlBmmVT9qmNit0JoR8InB/VyOD55KMFf/X5N3HSMgz03nO8mFNVOT4peH19S5FGR4SxI88/eIRkpMozPnx8zK++foEjxh9UmhNGy75po31piAsvKSSDi3cKDbjgsD7w9uaWH53k5NNZvUxnLNKa52dL+uaAFZJ1E+8DJsQj1eAihG1RpAjjaJ3nZFGzms95fXVN23QcpQJLoPPgVUzQKiBJYjDydLnkf/e/+I9AwO16zbfffMtX333Dm7s9vYh9DZUmzLI0nsWzjOBNrAYoiU40ViTU6cjNrmeeJbHTYj1Sx2HIOAwYHS+/Ck8lFLvWkGea0Un23cht7zmtBcsipet7EqXJtUClKt4jvMDbkbzMsL2JbhBrGa1HIaK/ZL8HqQjOYhBcX10zdB0//fQZSb3g4mZDUJr93Y6Ts8cc5xE0t19vEGMXBT02fkmWVYWUiqbtWe861vuGfdOTJoLlvMK4uGRMpmVqNzq6fmTeHFgeC1SSUBYwdC3Omj94MXfeTVvEe8f7DwpTN7e3938/Ap0Tzenp6cO0SinF9c3194bs4FkslxBis21784a3L19wPl9SZHdoKXl9dcuTRcr2bsvN7TpCiHWs6rbjgWG0KKWx1j7MzNIk4fpmw+36QKklcjIRJUmCkoFD22KEiYBsGzXBx8dLXNhxu9uTdNC0LeNoIvUjFbS7A9YLjucVbtokex9pi3MnJ18FGGPx3jGaOKu31pClsSshUnATDTHJNEd1ySxaLqcFXVxy3jU96y6iNBdVFRnGN3fMU0mRSg7W07lAkRfR1mpdRCUV5dSx2PHhkzOOF095dLLi9eUFudozuECRpaRKREXZBLsTStNah+wGsjSLCegy527XMVo7qRYc3RDYGYf0gTKR5FWOTKISIZJLYhNv9J5lkZKrmBEbx4FqMUeG6Bxsh6hV01Iw+ngPKVONR1JkKaMzcfFqLamC+azmuu15/MEH/KPPPuOzH31MUVX8q7/8Nb/+8ndUnWEMgrxa8jhXrO/uuHzb44Sg9wE52kigdI7d/kDbjxEJFAIyxA/649WCb9/2aK04Wy2pihIhPbc3N9Snz9lt9+x6S/U4cHx8zG6/53A4fO8hCYGz07PpwYldp5ubm4eFeECgv/vu24cJhveeTz/9lONnx+/tQb748otJ1RWPVn/8x3/8sAf5truj26y57hPWmx3jOPKv/vpzqr/9R7x+ccemdZN/JEKw78/czkZHdphQM3/vb/+Mf/0//muG9RYHLKoCa0YOIdB2HUkSvXupVqzqDDMMbO7W5PsNj1YlV+sDV3cbnPfMcsUhBOqyoB/NtFU3HJ2fID307YgkEgCVVvhMRfpj0A+jSuFcHL2Ohjd3By5aS22hTlOcCwy2n7bO8QHpXdQUnyxqlrMZXduAsdRZlL50NiBVtN2G6a0cvGcY4ij5//uv/4rvvptT5zl5VYJUlKlm7D1KKboxHu2U8DhrGKyLujIbKI0hzSpmdcFJnXG77xmF4HhR0/QjjbV0E8hh33QoGYWaTA7KRCl8EPz08YK2ayK2aDqrF1nCrhti+24y9l6tDzxeFlgfsMZixzhEGb0geMNqVfDqZk0oSpZHK6QUXF7eUFcNT87P+PbVW0K4Y72+47iuOCtTnp6ecPnmDf1oaLptnC7KiF0CyX6Ede9IARECwnvKRCERXN8ONL1DKcliUVEWOakWDH1P1wykieT58+f8+vMvaZvmYVH49Olz3rUb9H3Pr371q/c26vr+fMnfkJeP8kX1cLMXckLzTH9dvfqWXEt26w3XN7cRCBcEX339mucnRwgHvQtc7zvGcUAKQZYlsQcyBeA+Pj/CW4sKkXcrdIxvj9YxPz7i7o1lMa/IyiW3+0NsAiI4NB3lk5J+MNRlHidhwZMoyNGMUpDkOVUet+G7Q8u8yDDWYgZLY8GHkaM6n8Z/U7guLygTiZOai82035iqwE3XomREcSotSJMM48D2A6315Gk8e982LamEItd0o8OHGAiyLn4xRFf6FA50nheXN9xstyzKAu88m+02BimtR9sIibtqRj5YlggkVaHZtD3b3uILjRj25HnKclqiXe96Gis4X1ZkWvLm9sAwDHREmqF3kWwYvIsVA+PZHxr6vuN4OWdsDc4Y3raedXPgaFbHznfb8WhZse8G7pqe41lBXeUED74dKdMEY2L5aewH/uUv/5rlYsmj0xOKvGA9mXvbvsfawNurSxb6NMZ7tEJPnkQpBUWqmFcFZV5y7gPrzuBdYBzahx7RrMg47Ha0fcwDaq1BQFkV/OSzj/j1l99ydlTFKPs7e5B3FCC/twe536xHy+27Fts/mL2aGoUiRHCBl+8ZRft2T5YmUOZkRUmgQ2mF0JqT1ZIyS7jrXhFCEwHK3k8d9+/vN9d3B/7f/+W/INewNR6UZNd0EYJd5FRlASIGFGMkwFFphU4ytIJ2v0cm0HYj/eBItIo0viSlrArWTYtOEsbRsDEjrY3xitRbchW1ZMZEZQBCMPY9Y2uYz5dI4kRKWotXUOQ5SkSOqwByIXBasOniHF1IhZxSwsYHRhOnWuKhlEb0G3qPs5YwZdmcHbHjwNANU+98JJn8gdZ6chFIEhUv24nE2UipNwK2neF0OePybsv5PKdONUOqaJqWbVCo4Ci0jN/wgphEDoF2dFTeEVwAqdh1BzIFgzG0/UjvUq52DbMiwxiLwzMvUkZrebEZ+OhkgQiObojMrsfLnEM/0o9jlCcNDic160PLoXuD1glKqpj4tiOg2ex23JRJ7JYUCaeVnvhjkGWaLMmwIRCsIQmOIQjysiY4y82+BeBkkaA1eCHp+5EsS9nvmzidEoKxOWDNENcU3sc9k/d/+LP+g2dAV1U1BbXiA2Kt5XA43AsLGceRqq7emxU3bcM4RjOPNQNIEWPxVY3z1wyj4Xq9pco/wQ8DtZb85Okjzk6O2W83KKmiZD74yT+ieLM5cBjiGLAk8qq2+wM+nFOWM7zt2bZ7NrsDeLDDyKzKOT+veLHbRaG8iBMfJhr4vh9YN3HeX6Y6PriJwltHreJmWQpBO4wckWOMZX9ouL2D5axgMSu42Gw5Wcx4clSj04Q0SUDKGI6bgm7dOMZQ5egi55dAqgRFEo9J+yHCD3rr6EM3ITvj2zPi+z2phExLgrNYPOkDeT76MXICx1VJJSxFnnFzGGL8PwjqsqDpRmSw7PZR2DMOhnme0HUDUgSkCBGfGjytC2gZH4ree0IQnCzmzOuKu82awUNQijxP+bCMxuO2G6Kdq+9px0CZKYzpYv3BRjNukSRRgWAdd21HYwVJqpB4vIiinCGMjCbigvphwFnDYadJjxY8ParIZVSBF0UxJbwVbT+Q5poyEfS9YW9GhE4RSrJrBmZzR5bGhz9NU6pqhihKzNBwaAf22y279Ya8KB6oPPdL8cOheXiTjONIVVXv5Q71T3/60/dGW9988w0vXrx82IMsl0t+9k6pyjnHr3/1q+idVrDfbHHOo4TidttG9xuwaVq+ff2WD08W/Ad/+mOyouLKp3wno7disG5S/U6XfyFYVPkDZn/Xj2zanqaPJIpEa8RoqfKceW0Ybc/xasZRnbGpEloz8uxswW++fcv1xiFUxixVZF6w3R/oCBQqgo/j8PN7sgXAMJoIKhMKhIxHttExm1UcLyxniyJ+QEaDCB7vDU0/xp66Cw9MLOdiElrpWNI6rmNHO1WCdpoKhhD3E+K+1YanGw24WODKpECnkfQSCMjgKTLNt9cbHtUZj7SeFGSKIo8Fs7LMuNsdaHtLmkT9RNsZkIK6ShmCQWlFVdZsDh11lTGflWilkELw9OyYs+MV680WJe8JkoLgojH4xZsLmraj7wN54smCRxA1bxrBUZlxGEbM5IbvnMcFQTAmTuFc3JFE7Ge8e3Wdib52a9FSkamEREORp5POQeHw0T7mA5l3zIucqouX+bQsuLmS9Mbz9nbDosr56NEp1gVypWLua9J1v339mp/8yd8hy9L39iCff/6bh4FUUeT87Gc/e++EpH/Y1/2+BxI3o38wIkwsvAfT0+33bHctQkqu11tGazGjwfvA3aHjvM740U9/xN1mhxsj1FqJqHcjRH7uUZWzPrRsugiP8y4KWIppC7tvO3LlyJP4L9RZR5CO1WLOenNDUWT0Nn5T1qVG7Typ1HTO4Wzgxx884fJuzfPzFcZFRZxQCh/8g+JrVpVonTA4QecU671hscpJ9UBRpLy93eGBREV4hJSSMs/I8oLeGPbjhkQGhmGMmJp6hnlzye2hI000YhjJEv3gWFdSxsHAND1UWpNIKFSgyhSJgH0XiJz1CHzTMqZwb7YtsyrHHAZ0iNFvOwY6GzDAYbQcVSlBapJM8/jJKcdjJBFqpXhkDI9PVxz2B+Z1hTGGWVVi7cjJ0YJhGMjzHB8i+FsAP/80Ejj3TcPdZsu+aTDjiJQDVZbgkGzajrpI2TQDXT+SZim9NyAkyjpyFUntznmKJMOLDGd6qrIgeEvTtlgtSLVGTArpPE0JjGz37YPwdN8ZVKLIcUglIjRdp/SOCAMcLZWUVEWBMZahbRi6/UOK6vsXQngnMhWmB0P8T5AVH+4i4m8smIQQKeW7uwuu377CWhuPWUWB9VucDyxmM47OznnywRnPnz3hm5cXPHn+Y968fcN3lzfxny1ikWfdduzH6OIOISZMay1J8MzqiqEsCaahHeO/LJ1o1s3IxeUdx48SZJJQlRE4p6WgzjVvdwN5mWOD4267o8oyxnFgXpWIEOngkV4imecJVZahdcq+M/Q+ISnmrLc7njz/gLv9Kz56es5oPbtDR1FkUwK1Z3foGO1AnUS27d2h5XHbcnJyynw+43a3oy6mD78AkSURju39A20D7+M4FcMiT3DTcrKzklme0o+Gg4vdkA9ParyzOOeos7jpBkXvoEEgjGNVZMznFSutWS5mnB7NIp1SxMqBGUcenZ6wloKn52dsDg3r/SHCJ6ZRrTaGosijTcsbBPFyu6wqjhdzBmOx1rI77Hjx+oLb3Z5ZkWJt/N/PklhUypWkn9hjESGUEBKNEZbt0LGsa1aLObiRRaFIkhRjDc6r2C61UemXSkVjPMNgWMxKjPc0XUdrPUmqef7ohGWVkxYZOsvY3t2iVcrx0Zy2PeCdfcj9ff9CEO/p18IfgMvp+8jIw4MhBFmWvpfFujeB3m8jkyRBSOj2W7q2ZTarMc4gVCzDhBD4+IPnGOf54qsXLFLBi9cv+cUHnxHsSJEnHAb7cPbrXQQNJFO3okpVVJSN8Xi1Wh2xve2ZFwUjkm/f3qCSEo+kHwxXl1tUCFR5Fi+0iWJ0A26MMRWUZHQW0CgtCBJa4yLT1nlSBXe7LXVdUubxokmSoRNJc9ihJgdeZzxJmsRzt3NkieZkUeF9xq7t2BrPm8PArjmwnC94/uwZv/z158gx3hXMGCEDSVFNNqg4HNAhFpQyGXGh3sHo4wVcTxA7nSXMU0jw6ESzd5ZZqkhlvPvcdCM6EXz20WOqRPH47IShH1jUBTIEZkVJUhZc3dwyq0raNk6S9ofDRFeUKKIEUiAYxphCDm7kdHXE9tAxDGOM+ouYTh5GQ5quoniprPj625fcrTc8W8242ra4AEFBgUClOWbSiSdaPZxQHq9WICXLIsPXVaTRG0cQkkTp2DoFThYpxwHa0bDrRw5dx+vbPZveodSMo3nNo9Wck/Nz8qpG6ZLr2w0BuL5ZI776ip//3X93wrZ+/3CkafqwB9Fa8+7zAKB/85vP3/ESep49e87zZ8/f2YPs+NWvfj35QeJr6LPPPiPLMvavv3gQVZ6fntH/xe/IspR0MBxVBUUi+OKr1/zyi6/5k88+4Mvf/ZZt02Im1979A+mdZ1VknNQlPngOXaRT7JuW27tblsqTJJqiruh8NDopCevNhr1yaHsgyzKO5xVVkfPq7sCiKrluevZ9Q5ooHh8v0Imm6eLDnmcJmRJ451g3I4fBsVg0KBxaeta7hrOnq+gfcVGn3LU91ns8in5wpGmGkFAXBR7JST9y6A3XmwOzcsNyecSTJ495/fIVuY4YUi09+8MOI1TEiHpHmUjSyZ3oprN7YwNlriiloBSK3WDItUDKgm6My9JudOhUY4QkzxWns5zTecGPP/mYwRiaw4HVaokZDUmeo6SKpuKhp8hzdJLEKLuEWZ7FBeEwkOVZ3Ly30Z67BYLSdF3LbDnH2zhOVyJaip+cnQKSDz94RpYlXF5eoYiqhP3oKbWkMT1jIBqhporFUZmTBcOiXJEx4iQEKSmyjCRJ6a3BujjI6aZdTCDE31s/PEiJjAkkaUaqJPvrK0CwOFuQVTVaKb55dc0//0//E/K65uOf/SmISNo8Ozt7Dxw3DAOff/75+3sQ7+3D68Z7/9Bx/h4Sd78tniJpMqCURinouz37/RYVPJvNfpp0SE6WM9JEsd1smJcpLl2yHQWphd6YGIOYdh4aeHI0R4fAet/SOkeWplxtG7wP/MM/+Rmp9lipSNMMM27hHsjQtsiTjLPjOd1gWKQZj46P+PPfblCpJZHRGiVk7ECPziMm10czGIwExWRYJVp2x0whKDgc9gS/QMmoLStT2DJijKVpLb0NCKE4Xs7piRHpeZ7yyWnKy13L27s1HsEHj05JEsXbV6/QwZEIwUwJOmsfCPFVGhepg/H0Ig4OFmXCeV1gx4FD7whphFAbLzBesFzU9Hd7rI9TrU/Pz5jlCcMw0HYtWZrTNC1+HEm1BucZ+j5ysYTAW0M1caSyLMG7+HZoWoMzcZpmjCWZ3uR5leCNZWha6rrAhUh2GbqOVEZf+ZOTo6itq0suL6+52eyotEaIQOc9M62nC7xBesEsWIQreLSoSA4tItFIqZFasz3smdUl5bzG+8B6f8BaQ5pqUIpmGEk7y+gtm/3Iq7fXHJdPWM0r+u2G1fEJo7EQBMNgub3d8urrL/noJ78gIHDTmP7dz7r4Q3F3McHN7jshf0jq+R7tWgikEnTNlpvLt+y2W/pDw/zsPLbj9gcenax4eXHFYb/lH/zsU7QzfHO9pW8O3Gz32HBf0gooKRmGgcZEJKX1AdN2VKlGi8DtZkvv9gyHO/YG9l1LniYsk4JFmfP0/ITbt9+RZSV955jXGUkisTiqPGVvYr02yuQNdao5KnO6Q0emI4NWisBRHXnETTfihSIvcu7WdywXc6o8wQu423UkSYZKcmaZQATB0XzGoq5o+4Gb9Ro9GpSu+Op6x4urmI798PEj5mXJxcUFu90OiSdX0c7qfcBaj0cyIhh9ZOgmSnHoBzQBEaDWMRy66UcGL9hvDixnGUdHc6TWkaICLOuK/W7LkLR4OzKblygh0SGKfKSUZHmGcxatBWbq1aRT2ldKCc6zmlVs7qImYggOMew5DAZEwMl3oR6eYtqTYA2ZFDw6PWXXdix8IDjHrjMI6xitJQgYEMznR4xNxyeffELmR9quJU8zvIvhwrhYTOOEUEmW85qm72i6HhMiHilNJKdlyeOzijxVpInm9IMPUFpSFhnyrmU2n5Nka9LEfF8KFOHhC/r379fvLxDjJl3E7bcQMf7gf7A8vE/uPpSaArSHPUPXsjxacXloWG9bdk1L241c3W358HHJ3/vjn0Z+1dDz/FnNr755McG7QMoJ+ACI4JlXJa/vdigpOJ1X4CNt8NAb6qpA64SJwcxoA2hJlWfMypSNChR1RY8hyxLKTLEb48y/LrIJ+6lIVKzm4i3HVRaROknsxaspwlBVNVU9YxgtJhOMY4/WFVVRPNw9xmEg04ok0Xz98jVKJ1P4MlIa8ZaPjkquGsNXL99wu9lwdrTk6fkZx0cLdtsdozGAYJwI8lWexouk8xx6w6EzkyzUsco0yjhaPPvpjpUqQemj3zzPM+qywtoB4QOjGZkXBbPTEyQxy4VzVEdzbtZbrJM0TUtZpAggSzMWs4o3V2uk1Gy6gV0/0PSGN3dbWheFo1IRS1NSkqYpqYropE078vxshTcGNzklP3j0iHD+iLc3a777zVeRVi8CnYOyrsmykj/+0Y/5YFHw21/9GzIt2bfxC/N8uaTvezaHPcZ5Bhvp7HVdkOiEoprx4ZMUma05tA11UXA0K0gTTbPbc3R+SrlckF0f2LUD7eiYVSVXFxc4M6Lz8gEz+kPDmpQQwjtj3p/+9Kc/AMdd8PbtXz88EFVV8fOf//y9f8i333yN3b/CDgfqqmCYz/h23fHBo3NOZ3PGoafONCdHc9brLTiH14ok1WSJZnQm/sLux2sq4WazJ1eCOs9IlaBDc7050BnDYvWEYq5pmn28FzUDq0fndMPAf/5f/LcsCs+HH2gkGanWsX5pLK0bQScUaaSFz4qYgrXWEbR4eKXed1DibsZQpFErbG3AIVgtF9RlhfOSNBFkSdQeF1XBcSmnzFLGvK643e4I3iEJPJ17dibw2+sNn3/7kjJNOJ8VnBQZPo/j3uAdzhh0iOS/zscE7ihjL7+z0FnPcaa52MfJ3LPTOcJZzo5XlLlmGAcGKThZLbm9uaNtWq6N4Xg+Z1aWtG3POAx8MJ+xWs7Y7nbMqoLtfo+fQpO73Z7ewWHsWHfxwxmVzRKmXYIQoIqS4O30a4sZNy1bRg8fnx5RZhHFo0qJznKSvGBzOOCCYD86Ug8nqxMeHS05S+H21Td8eH6MCBGIJ0UsxaWJxhLLYGVZse96vr24Yd82dKMjSwuSspzInnB5t+NkUZOXDaZf0Ow7xtFzcdfw5mZPPZ+zubvj0fkpJ4/iHXu9XvPrX/962vnFL5v4PLxzSX+3QHL/CuqHHinuSyT5eyWTEMIEqh4wfcPt5RvKsiA5RFC0riveNg1FFgnfm30bR7elYrvZ0Y3mwf93H77o+liu8T4iZ7bGMzqLwkeIwxCPGoPzWGsx3keJpoR8vuKwv+Di8oL54oQyS6hyjd84pITORQJfmSbRiaE1xgVab+IDKiUBOOx7TuaeWZnQNAdOihqZZEipMTZQH51wsW2pipSqiMYqvJ9UzR43BtabCI7L0pS6rBi6jqqQHJVn3DR9nN8Hi+07CJ5NNzIvU6yxkTk7edwzJalzRTMYJDC6eDlVQvBkNePR0SJCv41hbXqyRNP1LZcXI4uq5Kg4pm1b9oeG65tbVosZ+MC3L1+RZjnOGk7mM7yzMZUdBNe7llfbA9e7PfuhIxB48ugxP/rgo+hvT5Ops6PxNrKOu2HAWkvX9xyalu/WDZ+czClFrBGbvueoqvh7f/wzfvXlN7RjS52kLJQgHO74V5+/ZDGryM6P6dqePFVxxF8W5EVO5WuSQ8MwjJHhm2ja2Zzvru54fb0GsaOaFZTVjLysOHQj82HEDpa+sxgTeHm5ZnPoOD07wduRdndH/tFnD0eqvuujYWCKA8XP+v9EHySGugTei/dGwDF9EgUrbui5ePWKl19/xaef/ChOje5+h1aa508fcxgM1+tbrm/uSPOS9m6LH/uICeq/t0lJAss8oelHDsYyeBDKT1VL2DctSM3dpokMJhNdFmmqqbKU48UJ4rQmEw6BRGE5mhVka0tZ5Jj9QD8apAi8uY3KNzORGx1++r94bHQuEuCVUpTFjL7vyE5j3utkWXJaJ8gkgrbXXY/voqEpk9E0Zb0nT1OqNKU9HBiMJUlTRuOYJ5LjtMB5Rzf2jE6gZIaUUEiF85LjWR0phz7Q9QPLVLLIDM0Y67hP5hnPjheUeY6bpi67/Y6qLElFJPAbE3+vuZJUsxw/rzDO44yJ+43Esd03LIuM4yrner3HIbjrRl5cr9l3HUFCXRfMqprFbI4SgjxJWSzmODuyG+OoVpUl3nqW9QxOJNe7HZf9wNMcEgUqeMLQUyYJx2XK+u6G7W7NQAuJZjmPtYC77Y6jsqLOo1Jt3bSM+2bySyqGoUNMOSsX4PxoQTdarrctWZbHMfHRirOTGWhBOwzIMrBtB7aHlt1uz2gsaWJ59fWX/PhP/sH39w4p/u13kL9pUXi/DAw/2DZ6FxB+YLUsIjDYGswwAgqdpFxv9nzxTfSq/8f//p8wr3OOz57x6s0broxhMAGtVewhhGg4cpPpqZn4vLkQ1ImI6E1n444kSen76PCr85RnJ0tSHZgfH/PNt684X2b8+OPneJ3x9MWaL9+0bHtDojWbQ4cSOXWdkSeKfTNirI3W2+k9hojlGx/g0PbkWcpyWbFer6lHS5EkpKlmPzj2o8NJRZ1JZkVCIGE3WrxIMT4ldYJMKkY74nwXO9zO0jhBUWR4JFebQ7Q4OU+uBI9P5igp2DUNo3ExUTBJPY2L6NRZWZBIiRlHdKI5mtdUaTQ+zesaMwzISWFQFSnb7SbWhJMkQumqIvK7XMnr2w2/+OQZWZLwzc2Gi82Bu10LEoSKwpl+6Hn56gV1WZJlOcYOsbUroyItBBiGHnEf/nMGmdWkuWeWEjsc3UieKH708UdIKbi+uSZJUhAC6wKJFJNqW9CNBiMEu33Hrm2Z5RmnixlH8wX9EB+OoR24utuST1BuKSV1PeP6dsNJrTk/i7DqsR/wQbI7tLGqa0eqYs7b7755LxNyD6y+Dyn+3qLwq6++evCV++CZz+bvSTuHYeB3v/ttlK9P5+TdzVv++pf/nMuLG4RKCUJSFjmLumKwnrvbWxZ1xcl8xqvXl4iimbRYEikCzo4PAzPrPN0wkmc5eeKpk9gP6UdDEJG2d7RY4sWAEIE3dxuC95ycLPn44w959miBa245bG9Z31WcHB3x6HiOCq/YN46QpBRZgnOG86MTJI6rXT8BHh5k8aRSIpB040jTddxt1pRyTgghdr2tjoBo76izODHxU+tRS0EqJFJLJI6mGxjkRP4QIXbaRcJt39E2hlFonMgxZqS3gTmSvLV0gyW4OALPE02eJRwOPddd4GiRMiszmqGnTCRaeCqdo1OFQGHGAe8swzCyN4aNikrqLE3iB2/fkqYpm/0heiGBP//N12RJQm8915vD9EWkJt03GBODhU0n6McBa0e0UlgTj1haaVSipj1Fh/WBal7ECm4eJ5WJkjE3lkjOzk7Ztw1vb7eREVZkOBk5Ws5rWuO53DXc7g94H7jeHrhYb3i6Wkb+8TBireFoXjP6wHKx4O3dXQTeectud4jm5Dx/QL0iFM4HZIDjquBwd8MXv/krVFpSFvnDZ10IgTGGd0GKQoDebDcP8AQfAser98Fxm82G9XrzwOlNUs3m+pL/5v/z37C9jd8GMslQaYJ1keYhpWQxq6nyFCVit0G4uH9oh2HKvDgI93zfgLCG4zJB4dj0Bi80Ok04DJ48y9nYkTzPYgVzcGz3PS9fXzFuLnn57becriqa/RZDR5GnFImkTALXfU9RFMzKirpIqMsZf/n1xYOCTUzqgnimFlzfHDirM65vbpklsVFZ1ksyL6irklfrluAEpuvwAZa54nReMMvzh6796OJDkcmEfdNwuW94s7ccbIxaOynjeHucVHAhoHYt+WRzSlSUAzXB83o/MJ8VrGYFszwjSVOMswzNARkcxtppAFHQ90M0QRETtqnOWB/aiHTVcb+S5TmvL255dLYkKQsOhw7n3EMhTkYvHIOxbA4NznlSHX9Nu/0++g6nvVmW5bjWYr3FW4tFEXRBOFyj6pI0TRmdQ5qRoip5/PicXduyPnTYMKCLgrvtjsv9TXyLZBmDjZflSkd1XJWnrKqCfJpEzmc1t4eOu92egIuRf2MQucAHjzWW2ckMkWhAkmQ5UrWAROPxZuT26pKkWlLkj38PHPfNN9/cpw3jG0QKGa/KUyYo/F4w8fsxr5j0BF3b0k8pW1TcMfT7PUJKsiwnzVISLeiHgdW8pHUKa/W0CeU9WIP1nqqsWU7TmLvOsx8DiQ4oP+Bd9PRdXV+RZ0kMAyJJU81msyUdDSfHC/qhY76QeK8QAobRURcFIofeQTcabvc9h95QJAm1IJqOlCQRET5Q5RlZEaPWo4u7iUypGGGfzqaLusIFj/OCKs85ntcUaYKxkfqntGJW5lRp9FUopVDpQFkFrPdsDx03bWRiJToGJWst+fBkQZbmXG92NGaMbUPXMwKPZznHi1mMQQRNluUU8wVD32K8RUjBtmnQUqGE4Omj01gXDnB8NKMfBnKdUCQqOh7nBXY0LOY1SRXj/nWhudnDOFpkEv32Eo+1hroq0VIh6BlMQpllSBEnPz74KLYhINOaZr9jKaGsSjb7A957SpkjEBRZykfPn7HbbrlcbzHGMq9neCGQxHZinSekMnBSl1RZxnJeT5UEw743zOc5eZKQKkkz9JhZSZalhNAyn1U4H9hv9yzOZiAkZjSkSYIUkrZpcOKWsW/JZqvfa0yFdzrp8Us8oN0U4noYef4eTEvips23lBJnPc2hwdjA66s1J0fLeAnOoibh7rCjH+IfWJIoZrMaaWIqN7iX7xSHYjMxnzx7t/uBbW/ZmVjRLXPBqkiRKh5lmuaANQlaS4o8jROIceD1+jWrKjJjUxnFON5aAp40TZBJRrPe0fQjYxDYiYpRTpfaaJVS5LkC71jNKrRSeBRFWaODYbNZc3x8RsCDG8i0ntCZMIxR6iPlZKYNgcGMkfYiJUWeM7qAFJbBQKI0y0KiVUR1JjrhqEjRSrDd7xF4FmUBwUWLa5GRKYn1gXq+nEQxI7vtOvrcEKRpSplGoIM3hs3uwHIxx1uDs5Y8TRhGA0Os2lZ57ObbvkerWC+uU82iSNgNBi8cYeqeMzqc25NNTUnnPIMxlGmO8x1aTgFIIdE4wrjHzdMpyyXxE+JHhEDXHKJluCwJt3dIJaLnfeyRUnBSR7nR6dGcVT2LD6CL4PHReooi59XlLUfzGVWRs+5ajo+PCEROmpAKpaKeu+06uq4lS1OO05Q8Swl4hrZhv76lOnnynlbw/qH4fi8SP4f6ww8/evBzMJ0lv/vuu8lfFz12H3/8yWQUEwztlmB7yjxB2IFcx2/r4Eb2u12s1SpF049sDx0gWM5nCORDx4R30pSDMRgdCELSTPC0eRKlLt+tW04fpzg3EryjHSzORznmyfERyIaPPnrK7voN3TCyOlKsjs54u+ko84TvtjtCXmEnUv3lzR2ny1k8Bk49+TyVKCmI+WpN3xuGvGexOCdJM/xgGYfxgXbYmxEzOgYXk8dndYaWkrwo0EkaRZ7TPSKpKqxxFHVFGQJmHFjWBUoqBmvZdXEjXOQF1lqkjmNXYyy7fmRwkEuHsxacY+w6krKI9ikyzCQGXe8bWtWjg43eFaV4u96gRHSi5FKy7zr60TCfVVEeJDSDgCLPmBUZedtTp4r94PDGgw5xOKAl+EAYR6ySWKdI0xRjD6RJQjc4BueQaQVNSxj36NUj7MTYyrKcLE3jBy/Ejnldl2RK0Q09XmqWdcWT4yVnqyVtN4UFtSZPEq7u1lztW6QQjNaxnFXs2xaLIEtT7jY7jpYVJ4uKu7s1erWgKmOnfxgtidYUeUHwjjzNybXgaF7x0YcfYkbDixcv3isDfvTRh/fEhnjEOj09fe8p+vrrr7m5uUZKRSBwtDzi+Tv0xfXVnvawZTADR8uSw6Ehq0easYl4z3GcGEpb/tXn36EJnJ0rHq+OYu+b+wVdnBokUw1z28U24SyNBtpmdMxTyZPjRfR32AGZKrIiRyaWs7Mz7N1LhBQ4VZHnKZt9w8mTgvmspsw0hJG2j8rg1XJGKj3eWZQUdCbGxYUAh2BE0A2WZBSc3qNnQqzFJlpRViWz+ZK7bzfoVHBU5SzLLCJHvYsAuiyDSRDprOP19RrrRcRl6gjK9kKyXm+x1nPoLd0wMDhPmWiqVFMWKV0/0FhPkmc4Fd2JTd+xrCtwhtEOSAQqeOaLOd04MnR9VCw4z7PTU7JEcXW35mbXkEvByXLB6SqlGwZGY5EyJpn9MFIWGau6YN+PZK1h0wdyKaf7VLw3KRnfeHH65Ag+TLR2jw2KSnoKN3C8qJHAYlbDvXeFgDWGw+FALeMbL8tSqjxDCkGZpxjneHm9Jsty6rpiMxjcviUrS65vtwwTfLtKE54/OWfXj/zqmxeERJNqQV2XHNodq+UcoRTV4pjAtwgpuDscSJdxglcXinldcnpyGsFxFxcPyNqiKHj+/I/+p8Fx9y63P5SP7w9r2sOOu/WGu11Pc3CkZYOXmlQlUaaTpgzG8LvXt3jnUfmSJ8crUiVRKn5QhBQIYkc9CIWUAk1st+V5iraGQsdpynp9w3Y/cvZogUdzcTD8F//sX/KPfvKYJC25urN8+vyU87NjDoc9V7e3bPc9UsZpkzWO3X7PR49WZFrT9oZ5mtC7gLOxnCUGiwIWucB6SzcOXF7d4IeGk7NjbN/w6UdP+Kd/+Q11qlmVKbf7lm7atsOAut6RyLjb0Toq1RKlCGXOTdtx1QxRd5BI9HTvmS9rlnUZq7lti0PS2cDhcGCWBZ6dHmOHePlu245Madq2eYBRX15eIJUmUYIs1WRJzW6/RQpJleXoPHo+RhsdH1IKdJIQpoblaEYu1g3t6EgSzVGVsree1gQKYcnLjCAkxjONxB1aBvzkJPFIcqGoxo4skxjv2HYd4eqaIknJ04Q0TQghEt0RgqOjBSfHK95cXJFlGSZoTB+jNb97c4MJUGcJy7rglAXzMuf1TcPRPF6ov/juDfPlgrwoMSJQZAl5llLPTwnes9lsmZ1Z0jRjMCPtYBiNhon77KZ9XJjgED8Es///CY7jQZn77l/tboNzNqqrIoEALRX5cknYHBj6Ae8DiYqcWoA8TQjBP9Rp370UOR87yCFYEhnIdDS4EhzOKR4/fkQaDszqgiJP2W+7ydvt2G533FYDP/lwzvXVDbOqYHF0Sjd9m/bG0zlDVZcYF7jbNZyv5pR5yn5aViZSIkOEv2VKEJyna3ucsxy6jkrB9u6W5fKYD58+4ukyQynFerunGRwgqIqEVMcIdXSeRDVdL6P0R2nN8dGcRycR/mxdFG4qpSPSfzSs9wduGsNtO9BZR1FmHM1K+q4jeM9qmrZ0o6EzjvVuQ12VpFphTM8sSxn6MVprp2PtrC65ubymawZmZfzzs1MK1077pXlVoIVESUMzjCzLjDzNeLuJDvuuHUmKBCcFKkxHUTEhQK0nC5azEk7rnMViERfMNmayZBoXbz7Ektv9sGeWZyAkTdfHt+MY775pkqGU5vLmlqvJbfnyesuz00UMYXY9y7Lk2ZMnfPP2gsu7DWdnS5SE7XbDwQ+s5lX8uhoHttstxpiJrSbphgHvEpzpv5dBTdNV/qbC1OXl5XsPR5ZlPHny5L0f9PbtW6SU2LHjmy8/Z7/bR1QQkamklWI2WyDFa4ZhfAghPvwkKqJ+6qpAN/F4YJwn+EBVFwipsb6lzjOa6QOQKhHLTsD19TXeObTSDH0/4fFTklTTdD1ZgHmRMRrLxeUFVZ5Qlwo5OoxxtP0wAds0V+s9RZHSj9GHJ8J9+C8GAM1o2DWK9X5HQsViNaMbRnSW8uT8iEdHJW9v9igpWZaRFO8R9IPFIbHGMTqPTlJW8xlVGnsniYzZmO2hjVkwH7C2jx8cpuKUDBSJxBOos4TVfMa8LHDG0g89ozG4+6VhXaOk5PjkmOAsXduipSKIgLGW6/Wa06M556crrm7X9MaSqhEXPHfbA80Q+xQndcX5asGhj70QiCigT05rQvCsG8PVoWec3lDeC1pnoncwOB6VGbMsokSzfpxgFJZFXWK9ZxxGCmBZlVhr42Qvyzh/dM7FxWVUbQ+WZrAgBnwQrJZztIhmsJOjGeumZ3s4UGcZe6Adeoosp+kMh2YgVYqjecG8OGLoD3GiRryftf1IVqWR0ytV9K5s1lxcXBB8lEG9e3q6uLh4/w3y+vXr94KIn3zyCavV6r09yJdffolOEpr1Ba++/oq762vkhIsxNoLTLi4vUFKwWi0ieeLQMOG46fqeup5xNKuRV9sopZ/eTN1oCKNBIqMe2fioaRYglKJpGrpuYNuMPBYJ/WDo+kDTdewPko9WM3o/knpFluQkeYIQb6nLhLB2ZImiSBX9GAFqdZ7hnSGVMU4T4WkwBou3Aa8kg3Uc2p5nJyu8UASh0ToeE263PZvGxIdXBhoLaV4yn5UUqcIaw+hD7JiIwHq3o7GBm0NPCIFlkVNoQZUqhn4g0/EMfrY65nbf4kPLfrCM48jQd+xtrLYiwNp4bEjTLGrbuo6buzvqLMFaR5pEOr33cOg6fvfiNYsipxstwziQpprVfEYxn2Otpzkc6PueIs+oBkPIHFmes2k69sM4iU8zrLVcd5bdMMSjZAh8sCz4+HyJ9I4yj/cxLSWDCxBS2nbAJLGrIpXEGDtZySRKKOb1jLIoAMGTxRFfvb5iHDu0SrEuIFQEUd/e3fHh0yesVkfcXN+QJQpBvLCXWcZ6H73o292OlIKj5RFKBIIdOTs9BfHb6LOXknmRUhY5fT/w6tUrHj9+zLt2g77v+eu//uv33iT6h7zSH/bQ3z2nCTy3l5fsbm9jL9oH9r3H6wwdHPOyIN0d4ixdxPsDE6G7rmcUWYoxDiP89PcjNE3piGLpxyhvVFLSjiM/ev6UTz74gNd2x+E2BaGQKqXtB87Pznn0aEaWWawF0optM/LB8ogPnj6lLP4aKQLzMsM4R6E0TiYQAnmaYHobuVTBo7Uk07H/LYlvNiEUWmdkaUaRZmzWa+rZnEVdROpgCASpWMxrtIyM2l3bY8cBYz2XzcDBeHZj1B3kieKkSMhVwCL55eWO4yLlcaoJUrPvGkRweOdQSlHkOfumx2duKvZIkiSh63tCADNGqME9xrTve8wQ4/PpBIVIk4xEJyxqwc3W0o2Wvh9JEomwDoInT1LG8d5JqEgIHOUJZaqZlyXrfqBINKf9yF1rGEbLosqoM4WfGF1nZcb5cfxiNNZS5AXj1Ln33oP35FmCStIJeh3vnMNo8Hbk5HjFP/6f/S2+efmSZrsBlSCUxo4jJggubm85WS5Z1lXcy2TxjfDBo1NeXF7hfWDoB67tiPeWZ4+OCS666O92e4qipB8G6vIkxvuz7IEo8x6YPfiH+u3DovCHefgfnsHuJ0735MF+6Nns9gxT3OD5Jx/xv/0//RP+2//8/4FoI9W7bdfvLRy7tovZncndIcL7P0emFdZ6Rh/LQYN3ZEoyLwu2mzVv3l4yWI9MEnSSsOu3dKNB5TMu7l6gg6M9dMw/fspm1xJ8XOglSYdxPqZ584TjWcnVesuhixHzOpHUUxU1hMBoLb3x7K3iOYq3Nzes6ickqWJzd82jes6zsyW/+foVaV7EXNd+z93uwLo1BKFJVWDdxgVhlmrOtCLXGpVoQvDcNj3r3tL5wCx4rjrDzAsqDU1n2PSOzgWWITwA6AKBTKXkSRyCCAmLWYUgEIyh73vyPKNpeoJQVFU05qoQkEpxNCt5+vQJszLnm6+/5eJ2Swie7WFAKEkbAm400Zcu44NzVBVURcZhHFhWOd45zmeasR+Yz1LKNOHZasmT4yP2+wMvrtbkWRqNt8OIEDAag1SKLMnY7xvywpNkGW3b0A/jlJFzvHr7Ftt1/J3PPiXJNHebDXe7jq7rUVKybjuu7rZkWcp23+DKnOPlkjrPOF6U+OBIs4zjRYUdGo6Oz0nrJdfr33K92fEkL6jLPGavrEFyj179/Z2fn1BL9zQfvTxaIsLUJwyecRxYr9cPD8owDKxWK6SUvLr6Ju45ZCzSG+v59ONPqZfLOA5VMgbRgDzLp3AhrO/WvL24imzaB+Tj987DNInBOO89RggKorditVqhcIx9i0WjVEZvAo0JfPP6gr/7s0/RImWxyHj13dd8OW75+c9+wb6LhSOk4NAbRudROo5fF1XJ9XbPPE84rXKaYWTTDrgQzVG98xRJTAw3fc/17Q1ns5zVYoZyIx9/9Iwvvn4VvR/rLV0/MjjBUV2hlOBmG/Gm8yz2T0bjuNm1XO5adp74zSoFqRCs25E74HHlyes8Uh1d3BPFAYbEBof1jsMYL9ECjxoNbdeQSBXfZC6QZQkqTanLImachoGb7ZbX19e4qQeea0Wq4nKxyDLKUoGSdIPDGcui0BOnChKlojdEK3SSsCgKfvntBcY6HmnJMktQ3tE1DUVRkhqLJSoeEu+pi5yT42Nu7u7wU2F7GAdE06LTFDNG+9auGXDhgAL+zW++4JPH5+g84+RkxWbfoIVgVmaczCqawXCyXPDVi1d4ISmLEikE+82GepUTfB6HFElOksZ4ipwGTc46usFxPJuTKMXxdI24/6xHBKxluVy+E1oU6E8+/uT39iAvXrycpCKB5XLJj370IwC++8t/yt31FcENFJlmux149tEnUT6TKKqqQB/i2RURDUoAh9FwfbfmaLaIcQeh6CcEovOew+SsSxKN9IEiUXhk1AI3O5azDMiihUlHDfHoPNe3G3726IQ67fno+RmZEuTlnNAGTIiI1H4ckVrT9j0bLVjNygglC57r3YHeRcHmPUT7KElIRKBpR1azGdt9y36/5fR4GbvfHz8jVYKbuz29j1Oaqkxp+jiRSaRglgoKCbtDh/OBREsWmeIoi9/KCQ7n4r2kLDOOCx33Di7q1IKMx5CjxRy8wziLVLES23ct3jkG48lUlHLeY5cSKRn6gVe7PcHHyvHpfEUQcmptFmw2Ud8cpKTQKuJzxj7KLUOCyDPyJJbOtJTMi4ym63l0fMx3RY5JEv7xP/gzLi6vuLi6wRhDVVqSicoeQiCvcpzzXF5dY4OjUDmZTtBZQlGWSJ2Ccjw9XvDh+Ypd19N1PbeHjutff8n5oibNMkYUSZqymlWsqoTjeZxEqQ+f8er6FqEUiHgFyLI0DjpSxXZ9R3n8IalSPDs9wgNKJ9ze3HG6yFkcHfHpp5/y9u0Fv/vt7x76IEVR8kd/9PMf7kHCe4yg78XqU2/84cjlCb6PYGJjo+MPwSc/+SnBx96wVjJS9LSibTpEVGFEyHA94+yopso0+9Y8xFucj/HsukqxQrLdt7SjoyxTbNcwBk+eSNrBEIKLRy3g5m7N7WbLhepwtePJyYrTk2OKeoU+gNI5RTYwr6NS2RjHTsQJmHOOzsSgmwBSFXULetJ9RWmkYdt0PHq8ojex9umA09MlSaKZlYF+P3LZevquJREwSzSrIuFsUUXBjonfXqM1fPr4BInABo9MM7aNoSgKrneHyXUejx9aDbQuEhilmHBD/YhUsY6rtaTpB5Ik4eT4mLHvwFt8EDhzT2CJVdqjeRXdiDY6UvoxNgSt6eml5GhW0TYjeaJ5cnTOsso5tA3WOTaHhkVZkmuFrkq6riVPFH3TcHl5FZnCwGAtmXMIqbBmRCWar169YTSGs6NFJK07RzMMZEIgR0MwLiKbAuxv7ni8WsRjqNYcBsPvLq/5+OwYlCZYy9o6qjKfukqBJyfLOI07RInSvmnZN4qjekWWp/RDhx073ISsOjqZ0Q2Wzhv2u/0DqOHe8PW96kP8oT3I30x1j5Ic/1BtylLF9tCy3g9gHGlZ8/TDj3jxm1+SZwmhG1FaT9OK2HOH+C/ZWItAcDIr2IyO3aQNIMSHyzuP1IrBR8BwnWfMck0qB5oASmmch/W+JwHG0TCGwLcX1zRlhDwrVXBxa3i96bjZ9digOLQxzVoXGXp6IMNEawkhxIKWCxQyPrDjxIXatyN1IbjcNhzXJcZ56sWSvLT89NPn/MVff0mVp3w4K+j6DuE9R1VOpiWS6N3oeotAsqhSzNAyuoBKMvbtAaUVL262zOcLnEypUmi6jsH5iaTouby9I0s0zjlG46nrinlekKkEqRVmGCB4Uh1DnFWVk2lFnWUM48jbmzWv3E10hQiospRHx0ccLxc0w0g3Rh2dCB5vBpxRUSetNfMqZ76Yo3yYvO0d+3agc47X17ecHx+jlMYMPSF4yiSlzGdYHzh6PmM/GjbbHa7t8N6j84Kk1BgHOpGMTcNpVbJrWj5/dcmqLkm1ZrFYIk5O2RsX1wk2IqRGUyGVZtu01EXG0azGC8m2PbA5jMxLxePjI1bHJ2R5RtvucGZgvWsoZnOG0eB0YN+2HA7Ne2Hcd/d+v7cHadv2XaAoSsVL3j1cWU6jVjs0/NW//qvJmQ5BCpanj3n6wYf85n/8pzFBa+K34ruTMCHi5vzu5ppPz09iulWCkvdbdIFOk7hAm86qWsDH58ekwmFtnK1LJTi0LU3TU+oIUb64veM4l2Ra8/K6xYsDu87w51+84NvrPVbnSCUwLqBV4MNHC5rRoCY/em8j5qhUklQJehPVCYP9XlfQGUs3joxdFzfWUvDxR4/55Zcv0VLTNw2KgBcJY1Bo71gfOtrRs5xVnMxrur7neteSpzr+nvF8c7FldXzCx2fHLHPF1c01t4eO3ejIU8VgRmb1nARQacLo4htPS8msKjBmnDBNEjv9mGEc8T4q17p+oCgqqrIg15JDOzD0DXfbLUppDv0EnlCgpCbLUpp+iAOLe7qL36CVYlEVdC6w6Qa8C+y7jupwQBclxoxcbrbMq5FFWeKC4O3tmvl8jhAyjtBdIFEaG6DK42V5s93Q7bd8crLkc+d5cbflg5MjjHM8Pj3lerMlJCl2HDkMHZmJ7c0iz9g2HdebLSRpfOtqMxXdGqq6YL46Y3AJiU4heJSMmNkYlYnio7Zt8cFTltU9GoEkSWkmf8j9yUp/+eWX77SrAh9++CHPnz9/bw/y29/+lvFwx36zZhxHAoGut/z9v/Vn/Mmf/C3+2X/+n3J9fUXfjoiQTlVv+RBr9yFweXHB3bPHsdMhxMTbij0MPwlb9k1HNuWG/t4ffUbByKuXF2y2O4p6xqvLa3IFWxmJ6n/+V5/zdLXgw7MFr5TgxW3Pbhj553/1FVeHgeNVRV2W6ERzcX1LN9Y46ymLlM0u0kQKrehGx2Ag1YJEa5w3lEowrypcgMPo2ewb3r56wbOPPiGbLXhx06CznKNFze22IUsUjxYF6/2BdQfzKuekLtgeOg7diJKQFQWD8Vze7jiezfjjD54wSyWXt7e0o+Vq28ZsmIi9DK0VIgT2bYQ1J0hcaNFScmj2DMahtEbK2ONuux5jPYUUpAL6YRNrytbSdCOzMicrUja9Y7fv+ODsiJv1FqTCSRlTBUJgjeXp6QnX6w31bM5///m3zKuCwQdSIVBpRusCUjjK2RxhY69l248IKemMZdg1LIoclSSkeUE5W7I6WpDmGWPf0XctBo/oGp4tK/rR8BdfX/D8bOTfPz3l42dP+Ddf/DZmtmYnCO+oqzJKXbVi37Ts+pHLbcOjI02qU5yHt6/fcHz2BJWXnBwvmJV5pMpbB0Kjk5R+HPn8i885Ozvj5++A2fu+/x4cN/WF9Pcz3x/CfN+XejbbNUN7QGlB1xvaEX7xZ39vur0o6qrApwWXb7bfQ5kfjm+BcRgYhoGiiKExP6H/CdCMIydVHvE7Av7sFz+jTDXN3SVm7Gnagd5J9u2AUAmDHUgFCOe42ey4uF5DCCzmM4qq5HrfgYrR+BiDLpjXFbs2poKjIzB+G+/GqCsrVLQp9caxqjKu1w0nxzmLWUFWzgkq45uvv8OKhD/6xc/50x/9C9rBcXm3A+8pUsXL6w2JUizLhJN5wboZ6UbDcl5w3Q7sRkHoR+ZFxr/zRz8iVZLfvbnizXpL1zUUiWAMcYKllGLXjrEn4XwEN2vN6Dxt36OTLALnmCjsUy3ZY6iqOoYZvSNTAqkUdVlyVMXU8Fcv3+IQtFPteF7VvNzGPomWEYE0+luOZjV3hx4rFXsbOLjAQsGuG7ja7iOZ5GiGEzGEmeiEzjieP13hQmB/2OGM4fj0FCHj3sZYw+16zcXNNVoqTuYzcI7H85K26/nd6yuU8PzxJ895dn7GVy++wwwJs2rGXdNirKHIijgtHTzWQdsbyiI2R5dHK9pmx9HjY5JEkaQKR3TGpEnCaB1e6DjIDb8vqX2Xy4AAHd4ljAT/B+8j3nsuXnyNDCM4T9N6glb80Z/+bQBWJ8cUZcXlxS1lUaBVgnc9cuo8xJs6uIkaURYp66GbhgAwGBvn+yFwtJhzspwztHv6vkXphNm84nbf0xnJ9tBEPYBWCCW5PvSs8hTvQ+RZeRfp6VmG0kksWfU9R8s5XdtR5SnOWnolacZI1yuUoMoTOhOo84RtN1JmKXWWI6TCBDAhyiLHruP87JzHp0v+4ldf0fSGPCso0pRZkbLZNaxmFd5GPUBRJHxxs0fpjMfaEqTnJx89xvYNX1xv+O3lGklgnsbBiAMSqTHGoWSc4qRJgpvcHt5ZpJDkaUqZaJSU7A4HhjFKiVIEdhxJkoyT5Qw7Dvh2IFeSpmkw1vLJoxWv73Zcbge8FOjM8dHZCYO1mHGgTBIOfUdqPa9v16wWc15eXHN7aOmUpCw6qjSJ7pVEM69q+P919mexumbpfR/2W8M7f+Oe9zmnzjk1D80uNptNNqdIomiSiGJTFCHJsEUFgRPzIjFy5cCGMthxiERALgIEURBdhJEAD4lsOKBjeVBkyRJFcVaT7K7qqq7xzGeP3/R+77iGXKx37zqnqlo0coB9UYUPe3/722u9az3P8////ioiGY0RNtBZ1menYIPqui7X6CTmxPTMpxPKcsuy6om1pTcrJkXGOI555cYhlRW8++CM882W/dmEg8kYgaOuK4qiwFhP1baM8hGVlfT2kmmRk0SBq3t2ekKSxkz3O7quYbPdkkcxfW9QMmY0HiF09M8Bx/nP6hFAR1H0jDBRDgVhf/3stzZ4PerFE4T09G1PkWnS+RF3X36F3hj2j2+wXG+wxqFkNPy06zyl4L0QHpSidwIpgnw61EZBVOgJ8LQoTanKNU40lOWWTVmjkwwrHMtyQaRlMCYpzcm6RArBOE2G7D2QQhPFoRXcO8/FaksUadbbLZEQbLYNkyI4Br0LfX4lw71UKbgoW0apZhxLqqZjnqcsV2tuTDPquqasG7LxhPl8Qt8bXrt1zGyccbEuebqqQ4yC8LTOUBnPe09WFGnCa/sZvmu49cIxm6bnk5OnPNk0rLueuztjyk2J9RKHCzyqIkIrGcxb1oQ7M444isiSGIHnZLGg6fpgiZWCREfBbac11hruPzml7Xp2JyOMNTS9YVIU3J6N2d+Z8IefPuXjxZZl1SKkpK0bEFD1BoPk6XIdapPNmjs7BTfmU969f8KTsw0784LGCzaLmrxTKNUz7wVJpDD1Bo0nTbMAup5M8EKQ5Vmoa61hNh6xKUs6YTi9XHJjd844HXFnf4pQEY9OLrjc1CymJYezCYmCrl+RZRnrpgdl0CrMUZ4+qXk8UhwfTjm9WHB88ybgGY1GKC2JdJAadSZBSYGOwiT+KjTn6hQxxhBF+jMK/JeB4x4+fMijR4+uJcDjyYSXX7zF5Z0j/vhbv8W6bBDe89Lrb7Jcl1yuPqCYzkmyHLVtiaQepu7i2j2IACUU41FOXVVYH4Yk3tsBEOAQOmaeB6xnXdc0ZsO26kiLCWXVcLqu8TiKWLM1kkVZE0lJkcRgDXkScXK5ZHdvj7btEDpiWzUY64gTQde2zKcjeuPoumBHjdVwjGoVwnO8I4sEGsfltoOLLZPZCAdYB4eHxyzLLVXdcHB4wNHOhFEsuPf4hMvaMSpSprlmta44KxsWVcdhkXFrmuC7hnGRc7mp+PhsRec9p1XNznhErhUbBJEW9LVDqwFibYMN1TkbKOdOEOmIUZ4FkWUSJsp929L3PXXXcbYqUTI4+LTU7I/ya095FifsTsdkkaLYndJ33cDU6rn/8CnIYHOQStL1lkzBzijl1Zu3AnxBRxxNUh5crFhUDY/O1xg2jIqSLFaIvTmTOAq1TpxTZHFIxtUKoaOgwF6vOHn6lKaqSbSmyHNW2y0Xqw0HOuJoPOZy0zKfjdmUWzadYdw7vBMoDMb2ROmI5bYmijOcd4yLnM5YNlXH8cEeo/GIJMvZ29tFSUmqBPlA5TfGcOPGDe6++SZnZ2e8++67KBls52ma8cYbbz7f5g0t2efvX3ZwxPkhC10JB0pxfrGk64N+6ms/+mN4wPQ90/kO4/GY5apEGkmapWyr7fU8RQmBVortesnB7pzpk4zzsgYjriufZdWwl0+ZTsZ4a2jqjofna6zYBpJ81RFLQaQ0l4sSr4L/epooIql4ugnpVi+MQgfOOU+UpIwnU7xtmecpkZIYB8oFpJCU4pqonmmJtZ7eBdn1pukpm36ICut4fL5kf2fGG6+/HqgtsylVueViXdH50JmLsFwu11xuLZveszcecXu3QHrLqu45WW2pe8dl1bDsDMe7c17aKTi5WJLEEYuhr+98yFtUgEiTACWQAXUKgvW2Cd09oK4brAt6LyV86JRZT57EJEqSpjFlZxC+J4kk66ZCeMfeeIw1HXup4PXXX+VsveHT8xXICAckseJwlPDa4R6xgFEWkRcBfLE3n/BksWbbOU43FXkSMylSikhxMCnY29tjUzeUdYU1homOyHRMEmlM29AZS208o0QgnGNajIiVIBICj+PO/oyPzlZsrafZNIzSlmxcIKWkyBJa6/DO4GNCg8EZdKQZjQra3vL+Bx9jZcblZUnX9TRNy435GG8DS0EKgdZBfn+11q9Snq9Olj/BMCUGuQM4bymXCx5+eo/zs/MQCZaO+MoPfSNMcCHobeIg7Ct0RpHlXPgLvIc4DlRwISRFoigSTaojYh0iBGRgTXK2Krm9t0scp5h6Sdk5nqwadvfmtE6xbXqOZwW96XEi4IKmecwoSzlZV9TGol1YzNZ5nDc469FRTNlULEpHEschurhuhgFh+B2zSAXfvQhy8WXd0hrLzlgwHeU4Z6jbmj/+9h8zn+bcfeklzO6UNM/o6p4YAQaquifWnt6Fp9qd/Ql911C3jtopTtdb6q6n7C23bxzywjhiudlghMb70GItYkXZdRgXWpIeMcyAHNsmSLtRMhScXRsce46gNXIhWVapCKk16zY4E43pGWUpl1WLlJ6DUca6rhnnI2ajCcoHuf0kz9BxQpIVmL4HCZetQbZbrBm6k1HMOE1ZxzUH05yD3TlVb7l7uItpG0xTUa5XiCimrBuiJKa1FmV6mm3Jo8ePabue1kp864i1RfuQn5hNcpwXFNZya6fg3UcNjXE8XZTsFTlaCNIkw7Yd1hmWmzU9gk3nMD40ky5WG4ROeHK6YLHa4LDgIFWKGEW5rbBDrX2VnyYQ16qPLwwKnxUrPqvmDeGaEevFOR+8+xvce/87YFviWHD82uvceOE23rlr+oPH07QN904uuFwsrr9H13UoBFEUcXiwQ9sFk4q+Itr5kIvRGMOmqSk3JcK0PDlfMp1OOdrd4969h2gZAlXOyypEt0nBwWzCoqxYVQ2RUuzkKcvF4nrws90sKUZjvPXUJkSXFWkyFMBhaJjHirLtyZOQ7OQ8tNYxyxOKKOFiseGtV27RNzVjHbG6vOD9tuOVF+/y5iu3+c1vvUfvFUrHZBoWVUvTO/LUcrEpKasW42CxbUKx7xxCaxJhObvcQpQTa4vtYT7KOVsFPpUjkO6RQcUrrSNVgepoXWBSiVggrQEPTdsH7VSaDp+nRSc5UgYn4GVZo5RiJ0nwHsq6R1BzNJ9SVg1tbzicTBhlGeebLcYYGuu47CRHuWa5qSjbPgwHbaBRSmsopMB5y5NHj9mZFKzLksJ58nGYrchIY0xQKT98+IgnlyU3dnfwouFkXeNdyG88nBTESuKEIuoNt2YFVd/zdLmlMz1N3zPJx0idIC3Y3nC6WnO22XJUhOCdxTYEdr5w52VGuwesHjwB77B9+HyKRAYY4YC5ugIGXrV0v0ywq997773nHH77+wccHR1dj+L/i7/z/6D89LuUl08Yp5rHveWX/uW/whtvvHm92z587zucnZ4Hu22aMRqNqerqWsXifbCg7uzOefe9T9jWDcfzOevqJIRaIpBAkWVstiv6piJPU6I4RnQNeMesSNnWbRDzAbM8papbztZhdnAwyelaQ9cE30WaZ4GuZxLSVDPJYuq2p6oDF7dynlwHK2nvoDc2hLVIyHTQKV2uG3S24U7TM44SItmzWpe89OqrrDcbbt04oPvdd4iShDwOUnPjwcuw6bZ1x7bt0VrRWsfaejofjGZPL5bc2d+lc5JNWZIm4f31A3qpNpbcBBRqlgflbt919H03XAuDpKc3/RBhnVCkMV1b03mHjoLzcVsHT36eZyQ6FPzLyrI/GQX6R9sFHVnb09Q1woWI7SKOiZVivSnRKqazkmXZkGVJIDXmBZFWlNuSBOiF52K5DGGbQjCez9HjEV0fsESu7zFdR20cndDc2t1hXZ9SmR6U4LLquCs11gtW5YbDyZRF3bKpO4wSA+HEsW0aamOorSWKNR443bQ0Bh6elTw9XfPm2x3idMV7H95jbxq6gJebLXt5wXxacH56hn//e4zHo+cCaruu43vfe/+5yA/ZDvOJtm1pmpAKmmUZWZbx8JP32Tz9gNm0oG+3NHXD8d1X+YW//K+SJAlpmpIMaUAqSoIqRX6Gs7kyTAkhgnn+/IK63HDr1i3ySA+TZX+dIpTEmlGREccJ0jl8U6GAOIpIEk3VtTgESoeItuW2Dlj8LKXrDG3fkyQpWksirYfusmeUJsjhA050RIfAekeRRpihWBcyOPlSHVJjnTF0xhAJOFtuuFiXrOo2TI+NQ+vQTbp9dMjuJATVCxXR2ADCwxO6RrkmiQRb66mdxw723pdu3WIynuD6llhLzBCF0AwPAOPDV7ndUpYb1ps163LNerulbFqECsahNE0Z5TlpEoOQWC/RKqLrOsrtNqh4Iw1CsGkaNp0BqbgotzTWs6oatp2l7ntO1yWPFiseXixYrMsBHN6wrCo2bY8Rgk3TEUURZ5eDSzEvkHFMmmboJEUmCSpOaUyI5MvznCLNOHnyNNhftWLTtsgk5Xias9y0nK0bLhrDvcsVkQ42hzSOefFgj3iwKBtn2J3kg5AVtr3h6WKNw3NWWz4+b1hVhh7Ntz8+Q++/ysHt1+i6QMLxQiJQ5GmIgm7a0LG7WutZlpEkCU3TDl8NTdOEAJ1n649nT5Nv/ZO/R9xv+P3f/V2ePr1kuTX8lV/519jbP3hOniKkZO9gn8XigshG5HnBcnF5HckjhWA8Hof+vfLcufUCn7QNeRKxqbrr/vNqs2H/aIe2riHSOBvIgZFWlHWLcS44w5QMTGAbulqzLGZT1hgPwhkmaYLQwQrc9j3SS/IsIjaW1ljqrmcUaVrrSeOYWIQ4s3EW4a0jixSt8dzYm7OtDZebLakuWLeCP/7exygBP/bNb1KMRnjb422Qyj/cBDPTThaz3DaM08Dp2vYetILOIKXkeD5jPsoxXUfbVEE71IVpr5QC5cE6z7Y1YWP7kvG4IIojjB3yPryl7UMMnPEe+h4lZGhx2yARuhKaCimpm2YQWeb02y3WOYpcsW5avJBIpai6DmlCh9FYE/LJtWDTdsFYZULKbJzEyG3NxXqD1hrnAq1mOh0jnUNFms4YqrJkkud0ZclysWQyHmMv11jT896jU3749j6LsubDs0uQgnsXGw5mU+7cOMYKjVpX3NqZ8GhdhgyVLAEUq96wrls6R5C3S7h/WXL89a/xy3/5X2E03+MHvvYNLtcn/NY/Ckrusmro3Yi+aWk3a/Jj+Ywf5LPQWnF95RoUiM8mfD6roeq7hk/e/y7/+B/8Jh9+7yEf3t9y9wd/gh/76Z+j7/vnFMBSa5IsG5xdNV3XDPnjwdKapQnjoqDa1pyfnXF+8hjjQztTKTHUO4LT88uB05SSpRl28BS3bc+manAIpqOEWCu0ECgce5M8qFhFOC2ENUyLDDU8Heq6wQ/kizjS9LYnHopcLySRDNnkQXvmSSOFcZ7dnRlxrHhyuWZb9Zwu1wgdg/eU5YYeyQt3blFkMZu65qJs6XvHThYGaJMsCt0oK2hVRNWbMPUWsDsO152zy0uUjtjWXbClWhdMS35ghlmHFYFCEnRVI0ZFHgKM6gbnA+wsjhOm0xlOwLapwwzIWryALMuvC9BYR2y322BIy1Iuyi3nVYsRkh7wKuiwpuMRQko2nUXqmM561q2hMpbWGC7WZZASEay9dW8wEuq+DznpcYxQmiLPcNYFvZqSWOu4sTsPtMy+olcxP/rWyxzvFBhnqXrD/YuSbW0Z5zlKK144PGCSpuzNp0jhiZKIxhhaY2itDTHRzhNpzQ9+86f4+k/9DDfvvIy1liyNmI00TdNwsVqz2HacL2seffAuzrT4zynZeSaCzXuPdx595fW4imFbrlZcXFzS1hs+/PABm1Zx87W3SF5M+V/+H/8vHN64xf37968njQhBnKRkeRZoJ3VFVZVhdC5CUZlGGingk08fUdUtt29mPL1cEBhy4nqCX3UtzsPh3g7ni5Kyrqmqhk1Z0xqPihRtZ0kjjfYGpVKMc9dJqAfTEXI0pmkbVpsNWZaSpfGQrR1Q+FeZhGXXMR+NmGWKxTacKlEsSNOIs6pnR8CTiwWt8Wyqnum4oGxaXjzYIUsTzs9OuLm/Q5bHXJYNbS/YK3SAm+UxrXVUxlL1sLQdVzCXvSLnxnTEcr3ibFPT1DXz6ZimtwGMYQ2fsf0867YnihSXyyU702mYqAsYjQJUwVkTiti2CYTFSGNNCPfs+p7lZh2stMNT3fThFGtM+DkqTrBSYoZ5Vaxjtm2Ld6HG0Tqid5amNyglGaUZ3WCDKJua8bhg2wT4eCcUO7MxMopYrrcUkWS7XLK8uKTICi7KGusCCyyNFA8vLnnpYI+Xj29w/9sf4F3DRbLhaZYSxzFpkjArcnbGOZeLJS8d7LGoaz5+ckrdGXSkuNzUgVgvFX/6p3+GmzduDN1VQe80ZRtTtw0X6xUfPYlpmwl88iFf6UqiKOZ7H3yPK/xupKNr79PVjUqPx+PnulgXlxesVkukgD/7L/0S49mMn/rpnyHJRqRZuGtXVXXtLPQIDvd3MV0LznJjf5dyeOr3fTuYogKhwhuDEJ5bxzsYBItNSZF0LE1YQL31PHh8ytdeuwuLNVKrAFbrDQwuxlgJRokKMcmdo246RonmoEhZbCuSOONiW9O0QQU8ylO6vmOzbYMex0PtQ0LSDRVCHM/XFZGUzPM0xENbx/lyQW8sDkHdWdIkIc8ylNYhwsC0dF5y7+mCuvdEKgSFRlHERdVTG0saa9CCCK5l7DfnI7zpOFsGYEKeRkHha3uUCIwtMSxWfKC/bJqeWGvK7ZY4iojigLFpm5qmbknSGC9C2KqxNuiwhCCJEpwK3zEgZh0y0kgh6HtDEkcgPMuyZJqlxErSWkfTNMRSkscR1nuc1NR9Q+wjlI6J05SuN1ipMQjSLCfNxxRFjlIy+FyenPDg5ITXbt+gy0J0mo4Mm7JjVVt6B0fesNhu2Z9POZrlPFzUlG3H2QDJ3tvdCV6iLGWaZyzrlncePGXT9XgpKcsWZx1xLJlMp7zx5ltBiT4QQr/5p3+BnYOX+Z//G/8zPr1ch1BP23NwNOXJe3/A/PAFyrJEDILaPMuZTCbP23C/MAch9JOVjnjzR36Sr3zjJ5nuHJJmxXNBOgFmHbirURzjhUIryQvHx0xGOcZ013nUvbEY59jd2ydJMpQS3DraZXc+oyhGA+I0FPKPzy+o64Y0ksxGoVNyBYBItWZnlIU/pFNY50i1YJqFrOvOOLQWA8c1Jo2CbbRph0RZYJRoautIlOJgknO62GA95IliZ1pQtSZ8/97ifMCv4ixN11/f6bdVGz5IFWFFkMArrRFRwkVjuWx68jyhRWIR1IN7ci9PGGnJk8s1p6sNWZqQxDFCBuNO4zz2WYXQgIQtmz4wuIQmywK+yFpLmuXs7s4RA7kwZNwnJHGEVIqiyJlMpuRFgRyCTPWQNCuVwlqDNT3REIfdG0vbBV5WbULK7bqqQjGepHgpudzWLKuWHsXO3h6Ndcg4XFertqd3gpOTMxaX57Sm5enlkiSKQsSEUjgEcZbR+eD6vH10wCjPmI9yIgVV52j7jt6FdLFxkRMpTWvh0WLDedVztqnpLXS9JU80qRIhjVjHn9XQLqBhv/K1r/NnfvbnaYznybriZLlkW1csH3/MR9/6R6FdLuR1aNTnoSVf2CB+6AU75+g7Q9913wfiEF5jbfjwDm68gBCK1vQ0bX2N02fItW66nnw8IopTlos1O+MUb3qKvCCKIgQCpSRN29L2LXduHDApEpJEkSeCVARmVBppeh82jcYzyTLSOGFdd4xSHe6k3qOlCpFhSnK0E+h8sVLUncEhePlod2BmdUEvlKX0vb0mlledo2pNGJ4JiXOCs8Uai6SqW84v1mTFmLwoaG2gM9bGU7U98zym7sPVb9v1GBdqj1cP5rRtz8WyDDQXKWh6E2KJEVTGPU/VH2zACFhsK86Wa8ptTdXUqEgHSIJSRFFEEkc4Y/GDzEfraODhhkFhluVMJ5Pgi3CetjfB3CbD4ipGo2CWiiJkpPFeopUOWeRak+UFKo4RWhGnGUJrhFLMZjvs7u6zu7dPUYxYnp/zyYcf8uhsRWcsF8sl1XDbyJQgixR5EtN2Nkzjm448STmcz9mdjLDeYKyld4a664cuXcaiqvij+0+52DZUneVksSHSmt1Jxs3dCce7c9IseW5lG9PT1A3/2v/4f8IPvPU6tYXTzZanZ6eUy0vsxX3WZw+u5x/OfYlh6t69T68fV947sjTjxRdfvH5h3/d8+uknz1T5cHR0dB2H4H1ArqzWG+qm5ezJKZuyIkkCw0oIQdP33Ht6yg++9TI6TjDWcnQwZTaKKVcdeZ7S9wZrOnpv2bahaDVdw/7OLLRgFyU4GyDXbRcgZiai7iyOjjiSxFJhuo44Tthug2tsVKRUTcMoTRDGcr5suDmfoL3l0dlq8F4Ibu7POTk/H3i8gtZ59vOY4/mUp5eXxPERzlvuPz3jaJLz4ScPeOOrP4TQUeADe8e27phlEZWFKFI4IakHtcGN6YhJHnN2VjKfTTCLFTuTUVDESjCEolcODyAlgw2YIXIi1ppF1WC9Y382Zv9gQhrHbLcl1GH4mqYhPKZpG0xvSNM0zIUANSCDkiRFeh/k50ojo0DKX20r0iwlijTWe0SiSNIE7cOii9OEqu9QcQxSYIy9bvFbF8j/p48f4bYb8kjz8bYjiRKsdDy6XODnIWtlkmX0vgIhWVUV3/noPq8cHzAfFRzNJlxsK7yQLDclB/uHqDhmPC4YVzMevf9oyJ8ZYgFFeCDdmI955aW7nJ2d4/1FsAtIyd27d/Hec/fuXX79//N3+d/8r/8av/53/mP+6P0HrNcbXn3lI/7UL+3z1td/Amctzjnuffopg1cOIST64uLynwuOW61WPHjw4HozKKW4desWWn+mWXn46CF1XQeXmw5kxSjSRLGm78ICeXSx5PFlBU5wuVghooi+N7R1x6TIOVussA5SKXh4csaNnSn7u1NGTT8IJ0PsV9P3QfrRGKo2REWPvCMSHoEK78OEJ0/XdSw3FVqGeUFTt2Rxguh7zpqK2oRY5RePdpECllWH9ZLKWJSS3NiZsC431L0hilMi2XNyvuDt117l0aPH3H90QtWGlNiyDf6WrQmLuu4t6za0fbWUvHSww3pdMp3v8r2HJ+wUCa0N1EkdadarmkhJenvFLQ4KA48niaKBUM9AhK+IT8+ZTydoJZjt7NJ1HZGOqZsKIUTIQncOL2XAwPYdWZIE+nzfh9MjSQIAou1QhJMijsP/894idXRNuzHOcnx0FK5lwGRnzng6w3Qt5XJJefKYarlEa81kPEbLC6yTIDSRCg+13dGEPBaclZ5V1VNkilVd83Sx5MZ8xiyLibRCSAUiwD4iB+u2DVEMBEyttTYwf7ViVbY0bU+WpaxWS3pj8c5RFAUv3L59vUbn8zn/zr/7q7z5+hv8rb/5f+OPPj5lbTV/9fWvsjOfXxumHjx8GIJNhfw+4LgvqORBDW/4aoM498V7WlVu6boeY2sm4xFltUUrRe/76821WFckVYsXEZv1lpvHezxaPOH24QEPn5yE1qEQXK63LOqWmDDpHecZTWfojKM1lq7vaHvHphmmqd6RpyEsU8owKGvbFuc9pg/5H1XTEikFA8TZWOgGKN5IC07OL2mNp/MEh6PWgfm6rXEIyqrhzsGUl48PyfKCNIn5h7/xW9R1RdN7Khs6etNIsW56tsZiho/p9u4U4QxlZ3m8uaTrO3qrcF1PJENoTSygcX5ojwd5SBJput4wSlMuNmWQjTjPoqyou57jtmc2LpiOR8RJihwyzyMdCn8lFU3XoJUmThPEFVE/DbREIQRt0xJH0WCDVgil0UoFmXiakKdpiD9wljRNKEb7GO9xxrC4vOT8yVPMtuTO7oRoVPB4sSLNC7JYUrWGtuvYn42JhitvZ0IaVe8829ZSNqEJs64b8iQhSzwXVUOW5dRNTbt0TG7e4Q9++78I6vIsZVlWSAF5GqOHelhLfV0/e8T1An8WCmd6wy/8hb/Ej/zoj/OP/9t/yI/86Df44R/7U8/NQYI1Q12XB4MWa/ijuM+AWc/+s85eX7m+DC7nhzBM6zxd35BqRa0UXdc/97rl4oLj2GMsPH16ypsvHdJahY3HzKcjFusSvKLpDKfrNdvLM+rG8vKdu+zO5iy3DdV6fa3CTHUoLiURiY5oe4cQiiQORD/Th7v/3mREHCnWqxI1YHjq3obCXQSiYjW0V+1AE5lkCeuyCtIRoKpDR24+Ddqlohjz0YMzNtvqOmN9kkUY62htgHc3vWGUxEzjmPNVybpqaCzksQKpUPIKZiGJpaAfCC/eOwqtUN4zSeNr2c/Vs0uI8Ad/cr7gfLnhYGfK/s4OWRITJynGGtIhSzBXOWmWBdJgU1+f/EkSmGfz+RxvHWkS41wAaUSTCeDZ2dtD6eDM3JRbjBc4Ibm4uOD0wX1MvaWqW3aLgjgOuFHr4Hy5Jks027qnMY7VtmacxCRpirF2mEOFAaMxjkjJ8NSWIigC6ooo0ahYsW5b/qW/8Jf5W//ZPwAq+j7ExVVNH/CjsWRd1djhiuqs+8JM7xoK5x1NXbN/eMRf+lf+VY6Oj79A9HHO4r24hvno4+OjZ2oQT9M0PHny5BmXIdy4ceO5TXF+fv6cnVZHmr29XWKtcCrEoEVKPQeIg4Dn9JHg4cNH3L05It7LOdwdcbaVHO/uUFU1/aDs3N09QPQtp5dPsV6SRDHOVAgPWmvm0yScWKZHScG27/E4lAinnLEO58Pp1nQGrQVSKoQLhbhQEoUnkpI8jTm/XOC8p4h1QAJ5S9kYOuOpneViVVF3lvc+fsB8MkEKT92awAp2/ppLdV53jIqCdblFScm8yOm6ltYYOi+IFKRpRGst+aDR0nIQF8rQrRtHoTMGgt3piJPlJuioeouVwS4cDdCLsmloT3sulusQQV1kTMdjRnkWaC5JgdaKrmsZT8bDJhvkOgOBJlIRpuvo+padnTlt21KMx0ymAQjYW4P1kgdPT6k/+JSm2lLEMa4PSV5SBpPVk1VJ2fXILlgFskTRNx6pY7a9Z9N0ZHE81FdQJIF+k6YxeZZQmZ4ew2xacHi4jxOK0XjOjbsvBw0dUDYNRZaQxJq6CR6fJNIUsxlHh0fX8nUh4MmTp8+lrM3nc+bDdcr70Pl78uTJcwFSR0fHz8SwCfTx8fMk908++YSzs7Nrrup8Pn9ueOK959vf/vZzTqwbx4e05QKtBX0VJBNFGvQ0W9N8dsyZHqUzVrUhTXOSSGDbLV0bc3R4wP0nT2nanth7bFPx8gs3+e4HT6laQ9P04KFIM/RQGC9WS7SCKNZUbUfkYTSOeHi2Iksz6qrCO8tiU+JEQRaFtrR1Q3oSYqCxBIyqkhIlB8p9nNB6gSO0iO89PCVWgv1pxnLTYKzn8eNTtp1h01l28oTWWPIso+46eu9JIk3ftahxxmYbWqDzPOa8bAbVbfgjXGxrjA86rVQpRolm3fQc7c5I4phECazhekiolCCNI8rB29Abi9OOcluxqWoePD1jlCbszSfszKaMRznCB8Hi1ZQ4TdLrMKNIRyglGc+mgUJTt9R1w+XlJ2zKmsV6xXK5oqxa5mnMbJTyYLHhMFeMsxTrgtq26jqqrifRik3nuHGwC5uKuu3I44GakmiKNEXhmBUF4yylM4Y8yxAmonEbjndzbhwfcrKq+NP/g1+iGE3wg0I7jiK2dRvQoVKE02l3xosvv8rBwcFnuNu65p133g1i3cHC8dZbb4WQo+Hf06dPefjw4TUXK8/z58SL39cPIgdn2ef1Wc9esa66WFEU8U/+/n/Jve+9S1PVSCLOFyuObhwSx4pt/dnurJoGrUehO+Y1eaYZ547TrQvk8iShqjusBOsFs90d9nYmnF+uyJMAfCvyjCJLqbuaIo8RSPo+gBjq3pIP9ZEdjloIGRht25GlmjhSbDvorBlEjYrOGLwMd1m8JxIwGhVUTQcSlAsyie/de4LZGfNx+5iy6ZikMevOUsQR0zRiWXfgQ1tbDBZOYsXFZstl3bM7KSh7y7oz3D6agGnYND29D/UHwCQZ7MgI9iZjtlWJVoGY6PBEImBDw3XgKlvFEyuFFYJN2+Oco6wqvDU8ObsgjhM0MM1islGBcQEt2nVtCLSZjOmto61r2q4NUW8y5Cmelg3GhrStWEoyHaKdjTVcVpb9wxm2D5Dosg3RFZKQVLup+7AZpKA3HVGkqPue8ShnmkfMiozpKAtETa2Q3vOdD074uZ98jaPjPb76Mz/ON3/+F/n44w/hGaChFKE9nsaKIo2p6obRaPSFdSqleA6E+HlrR9CpieeCc/47BOi4zwXofO4uJz/Tq4SAlZJv/+5vhjy5xQYRZ3S9IY2TELS43l7fnau2peo69qcZR7sjpDZsqzVZtk9cdcPCCEXyvcdPOTjcAzxnFxfs7+2x2ZZYbzne36G1gjiK0EqjpaHvenwwm5ClKeuqxeFwNmySvekIug4pPM5bHFezHALSVEgUYaNlkWJbBaeeGjhdV3Md4wWbqiFLdIAceNiJVQj9GbIAlZREOqTAhqDQAJwu64aqNxxMxjjbs20NZR/eiwf288ALPlk3zPOYyPckUUTZGTobiPixUuRasW47nPeBm6UDvCGk71pipUikIE9ilnVD03X4vkf2DefLNZX1aPzgd3dcnJ6z7S1ZJFE4ijhGCEmWRKiqI44VddeTK8nuOMciGMeKzjiq3pIqTd124IJoM49CQtRiXTIfJWRRgrMdTVuD8yzqmsPdKUfz6VD7OGrrqJ3jYtWwWDccHR3y+te/iVKatmkxvQnW3cHC671jPkq5sTtHq4g0y79kXvdZvXy1Wb4w87PuuRj0L8xBLi4urkFZ3geT1P7+/vVu0loPNcdnV6zZbHbd0VpdnuO7houLCyQW07fEWrM/m7HarEjjmHoocI219L1hPEq4fWsfLTvcB48oioKi6jna22WxXF+3NHfmc8aTnCenS84XC+I0IkkidKQgUrhO4ETA2Sd1y2x/johjUtOzoQYfJARREtN0PQmeLElZVEPQy1BcV01PJDWJGnRQQlA1NcJbIkEQ8gFZHAUfhhIoKVi1ljQKWSZeCjobOlep9xRJRNP3xEpgvcQbx7Y3w/3bsq0b1k2Pw+OEYJZETOLA5MU79vOIWAlOyo5lEzBKCsgiTaIk1nkUnljIIO+II1xtiKUkUpJYQJ6mdM7T9AYhZRB5Ara1A6LHkCiYFQmydaQacJYkCTnzkZLhZxGuYVq6AOS2DERHSdW0eC0YJaET1vaWUjhuzLOwYb1HYkgTHZJ8qy1aSyb5iOl0jHeWpxeXyCRjva154bDg9Vduk+QTFsslIp9T13VIrzVm8JXbwbfvadqem8d7jMYTVqvVtcvVGMPe3t5zELj1es22LAe3rMdZy97e3vUJIqXk/Pz8+RPk3r17f2KAzgcffPDcHOSrX/3qtXf3xtEhxWjMoyePUdIgZZAV7M1nLFaXPHx6QT18rzgKkLPL9ZYnZ5e8dGuXvrPkU0mapmghrz3qzobW7WQUzEjO93inyLOMzob2oMUHELVUeCVJkgQnNVkMsZbUpmM6StmUFdNRjrUG521wxPnPrmKdCd2mPIlpTZi79D5k8elI4YWj7B2jLEZ6Qx4NqVKmJ49D7l6iJZvOEEvBSIXi+nyxDtdJE0I6G2NIdYRw4WfWTTu0pRUCwnWhqZnmEfNJQWsFjy9WyKG1LpxjN4upraPrenbSMGNwQjDOEvq2QQjII8VYS6Z5Sm0c66oNcgxglMY4Hxi91kti4SiSBEePEB5s6FqCAucCJ2toGLih/Zwm0fW1JdJyUC4ENG0eCdIoGJz2pxOqrkOo0FmMBx3bZGfGZVkiYs26bDEe6qalrismo4RstI9KJ5yeX7AxoWumdYSx9joRYJQFE1zVtLz6xlukacrJ6SnlZoNzjtFoxOeBJO+88w5VVQVYtfPcuHGDF1988Tlw3Lvvvvu5G9MVyeKZuuP5IJ3PAnSuiBfP8rO25ZKTk0eBlGdFSEdyBilDN6qs6ud+4FVM9Hpbc3Z+wXq9ZnVxMeSomwFfE55MXddxuDcF4UkTxTiLafuObdfy5PySi9UGNySxOqXZtD0gkQgSrZAi6HWEFDRdhxIhb7wfMJ7Xx++QeJWmEaMsZVwEOXpI4IVES+zA81USkijkLwo8xlniKCYe/CVKCsZ5yqQohkDPsBkbEwguqQ4iwLbtkSo0DIwJVJY81ggfwAtRkvPgfBVqPedQeOZZxCQPattECaZJkIpMigxnOrQK9/NcC8ZJRKqDl70b2vRZHJHFSTCQCRDOM06TYRA5APWUQspAm7xaA31niLVGq6BWTqIoXIeHTiG4cKV0Ibphd1xgh9ovzzLskCCL0uzs7aOShMvNhtIYLsuauvecL1Y01YbLxRonJwiZoaMsoJmyjCSJUTLEOORZkNkcHu3zwz/yYxSTOdGA8hmNRkEu8yXBUEFjGDBPVzX0s2v96jXPfTnvcMPd9dkiRjyTZe4G4sOVRv7ZIcz9j97nwScfBI5t64l0TFM3rMqK1+6+wM64eP5eaB1pGgeWalmxuFjw9PETsiQgXKQIWdppErMpt8ymBWkxoqw6ZkXCziRjsw2ylq4Pph6tI/YmU2ajMVEcIQie5eHXJ4n04FiM6doO70APiUoQ+LvtMDhTMki6J0VOFkcBBeoDljXS0eBwDEasRAdRY54nGBciGUZZTJ4maAlFHD6n3nla4+mtp0g0Ao9WARlgnEMJwQt7M2zfo4UgjxMenq8wNhimIiGIpeRoWuARtJ1hlkSM0witCO31vkPL0NaOhGCSJWjhqdsGJcLvaqwlSxJGeTrUmpY8Vkhvw6k2pOAG5JAliSNiHWKuQSJlhPXhFBlnKa0zIRXMB4+8VBGrxhApFXRmXcesyNifT1FRjE8L1kby/v3HREXG3o2byDjl/skFF4sliRIooeibju2mvF64JydPKbdbtJJ4D01rmO4e8kPf+HEODo/CoHPQnimlyfOcz9N6xKBK8ENEw9V6fnatX92Snv3S49H4Gj56xQ3abDafGaf6PoCIh5aoEPL6zUqpePrkconst INDEX_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Boo AI</title>
  <link rel="stylesheet" href="/styles.css">
</head>

<body>

  <main class="app">

    <!-- Boo -->
    <section class="boo-header">
      <img
        src="/BooAiz.png"
        alt="Boo AI"
        class="contact-icon boo-image"
      >

      <div class="boo-title">
        <h1>Boo</h1>
        <p>Your AI companion</p>
      </div>
    </section>

    <!-- Main Navigation -->
    <nav class="main-nav">
      <button id="booButton" type="button">
        <img src="/BooAiz.png" class="contact-icon">Boo
      </button>

      <button id="diaryButton" type="button">
        📔 Diary
      </button>

      <button id="dadLensButton" type="button">
        🐻👑 Dad Lens
      </button>
    </nav>

    <!-- Boo Chat -->
    <section id="booSection" class="section active">

      <div id="chatMessages" class="chat-messages">
        <div class="message boo-message">
          Hey, I'm Boo. What's on your mind?
        </div>
      </div>

      <form id="chatForm" class="chat-form">
        <input
          id="chatInput"
          type="text"
          placeholder="Talk to Boo..."
          autocomplete="off"
        >

        <button type="submit">
          Send
        </button>
      </form>

    </section>

    <!-- Private Diary -->
    <section id="diarySection" class="section hidden">

      <div class="section-header">
        <h2>📔 Diary</h2>
        <p>Your private space.</p>
      </div>

      <div id="diaryLock" class="diary-lock">
        <div class="key-icon">🔑</div>

        <h3>Private Diary</h3>

        <p>
          This space is protected.
        </p>

        <button id="unlockDiaryButton" type="button">
          Unlock Diary
        </button>
      </div>

      <div id="diaryContent" class="diary-content hidden">

        <textarea
          id="diaryText"
          placeholder="Write whatever is on your mind..."
        ></textarea>

        <button id="saveDiaryButton" type="button">
          Save Diary
        </button>

      </div>

    </section>

    <!-- Dad Lens -->
    <section id="dadLensSection" class="section hidden">

      <div class="dad-lens-header">

        <div class="papa-bear-icon">
          🐻👑
        </div>

        <div>
          <h2>Dad Lens</h2>
          <p>Dad's principles and perspective.</p>
        </div>

      </div>

      <div class="dad-lens-content">

        <p>
          Dad Lens is a perspective you can choose to look through
          when you need another way to think about something.
        </p>

        <button id="perspectiveButton" type="button">
          See Dad's Perspective
        </button>

        <button id="sendToDadButton" type="button">
          Send a Message to Dad
        </button>

      </div>

      <div id="dadLensResponse" class="dad-lens-response hidden"></div>

    </section>

  </main>

  <script src="/script.js"></script>

</body>
</html>`;

const STYLES_CSS = `/* =========================================================
   BOO AI
   Emo Princess / Fantasy Valley Foundation
   ========================================================= */

:root {
  --midnight: #0d0920;
  --deep-purple: #211238;
  --purple: #51356f;
  --lavender: #bca6dc;

  --silver: #d9dce8;
  --silver-soft: #aeb4c7;

  --gold: #d9b765;
  --gold-bright: #f0d58a;

  --ruby: #8f1830;
  --ruby-glow: #c52f4d;

  --glass: rgba(13, 9, 32, 0.72);
  --glass-light: rgba(255, 255, 255, 0.08);

  --text: #f5f1fb;
  --text-soft: #c9c1d8;

  --shadow: rgba(0, 0, 0, 0.45);
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  min-height: 100%;
  font-family: Georgia, "Times New Roman", serif;
  color: var(--text);
  background: var(--midnight);
}

body {
  min-height: 100vh;
  overflow-x: hidden;

  background:
    radial-gradient(circle at 50% 10%, rgba(124, 91, 161, 0.35), transparent 35%),
    linear-gradient(to bottom, #17112c 0%, #2b2142 45%, #172b2a 72%, #0b1818 100%);
}

.app {
  position: relative;
  width: min(100%, 1100px);
  min-height: 100vh;
  margin: 0 auto;
  padding: 24px;

  background:
    radial-gradient(circle at 20% 80%, rgba(143, 24, 48, 0.08), transparent 22%),
    radial-gradient(circle at 80% 20%, rgba(217, 183, 101, 0.08), transparent 25%);
}

.app::before,
.app::after {
  content: "";
  position: fixed;
  pointer-events: none;
  z-index: 0;
}

.app::before {
  left: -10%;
  right: -10%;
  bottom: -40px;
  height: 260px;

  background:
    linear-gradient(135deg, transparent 25%, rgba(24, 38, 38, 0.9) 26%, rgba(38, 57, 50, 0.9) 48%, transparent 49%),
    linear-gradient(225deg, transparent 25%, rgba(17, 29, 30, 0.95) 26%, rgba(35, 52, 47, 0.95) 48%, transparent 49%);

  opacity: 0.9;
}

.app::after {
  width: 7px;
  height: 7px;
  top: 18%;
  left: 12%;

  background: var(--ruby);
  border-radius: 50%;

  box-shadow:
    0 0 8px rgba(197, 47, 77, 0.65),
    210px 120px 0 -1px var(--gold),
    540px 70px 0 -2px var(--ruby),
    760px 190px 0 -1px var(--silver),
    900px 90px 0 -2px var(--gold);

  opacity: 0.65;
}

.boo-header {
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  gap: 18px;

  margin-bottom: 20px;
  padding: 18px;

  background: var(--glass);
  border: 1px solid rgba(217, 183, 101, 0.35);
  border-radius: 24px;

  box-shadow:
    0 12px 35px var(--shadow),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(14px);
}

.boo-image {
  width: 82px;
  height: 82px;

  object-fit: cover;

  border-radius: 50%;

  border: 2px solid var(--silver);

  box-shadow:
    0 0 0 3px rgba(217, 183, 101, 0.18),
    0 0 24px rgba(217, 183, 101, 0.2);
}

.boo-title h1 {
  margin: 0;

  font-size: clamp(2rem, 5vw, 3rem);
  letter-spacing: 0.04em;

  color: var(--gold-bright);

  text-shadow: 0 2px 12px rgba(217, 183, 101, 0.3);
}

.boo-title p {
  margin: 4px 0 0;
  color: var(--text-soft);
}

.main-nav {
  position: relative;
  z-index: 3;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-bottom: 18px;
}

.main-nav button,
.chat-form button,
.dad-lens-content button,
.diary-lock button,
.diary-content button {
  border: 1px solid rgba(217, 183, 101, 0.55);

  color: var(--text);

  background: linear-gradient(135deg, rgba(81, 53, 111, 0.9), rgba(31, 18, 55, 0.9));

  border-radius: 14px;

  padding: 11px 16px;

  font-family: inherit;
  font-size: 0.98rem;

  cursor: pointer;

  box-shadow:
    0 5px 15px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.main-nav button:hover,
.chat-form button:hover,
.dad-lens-content button:hover,
.diary-lock button:hover,
.diary-content button:hover {
  transform: translateY(-2px);

  border-color: var(--gold-bright);

  box-shadow:
    0 7px 20px rgba(0, 0, 0, 0.35),
    0 0 14px rgba(217, 183, 101, 0.12);
}

.section {
  position: relative;
  z-index: 2;

  min-height: 480px;

  padding: 20px;

  background: var(--glass);

  border: 1px solid rgba(217, 183, 101, 0.25);
  border-radius: 26px;

  box-shadow:
    0 18px 45px var(--shadow),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);

  backdrop-filter: blur(16px);
}

.hidden {
  display: none !important;
}

.chat-messages {
  min-height: 360px;
  max-height: 55vh;

  overflow-y: auto;

  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message {
  width: fit-content;
  max-width: min(80%, 650px);

  padding: 13px 16px;

  line-height: 1.5;

  border-radius: 18px;

  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
}

.boo-message {
  align-self: flex-start;

  background: linear-gradient(135deg, rgba(81, 53, 111, 0.9), rgba(42, 27, 67, 0.92));

  border: 1px solid rgba(192, 174, 220, 0.28);
}

.user-message {
  align-self: flex-end;

  background: linear-gradient(135deg, rgba(105, 78, 120, 0.9), rgba(55, 36, 75, 0.92));

  border: 1px solid rgba(217, 183, 101, 0.28);
}

.chat-form {
  display: flex;
  gap: 10px;

  margin-top: 16px;
}

.chat-form input {
  flex: 1;

  min-width: 0;

  padding: 14px 16px;

  color: var(--text);

  background: rgba(7, 5, 16, 0.62);

  border: 1px solid rgba(192, 174, 220, 0.3);
  border-radius: 15px;

  outline: none;

  font-family: inherit;
  font-size: 1rem;
}

.chat-form input::placeholder {
  color: #aaa2b9;
}

.chat-form input:focus {
  border-color: var(--gold);

  box-shadow:
    0 0 0 3px rgba(217, 183, 101, 0.1),
    0 0 16px rgba(217, 183, 101, 0.08);
}

.section-header h2,
.dad-lens-header h2 {
  margin-top: 0;
  color: var(--gold-bright);
}

.section-header p,
.dad-lens-header p {
  color: var(--text-soft);
}

.diary-lock {
  display: grid;
  place-items: center;

  min-height: 340px;

  text-align: center;

  padding: 30px;
}

.key-icon {
  font-size: 3rem;

  filter: drop-shadow(0 0 10px rgba(217, 183, 101, 0.25));
}

.diary-lock h3 {
  margin-bottom: 8px;
  color: var(--silver);
}

.diary-lock p {
  color: var(--text-soft);
}

.diary-content textarea {
  width: 100%;
  min-height: 340px;

  resize: vertical;

  padding: 18px;

  color: var(--text);

  background: rgba(7, 5, 16, 0.62);

  border: 1px solid rgba(192, 174, 220, 0.28);
  border-radius: 18px;

  outline: none;

  font-family: inherit;
  font-size: 1rem;
  line-height: 1.6;
}

.diary-content textarea:focus {
  border-color: var(--gold);
}

.dad-lens-header {
  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 25px;
}

.papa-bear-icon {
  display: grid;
  place-items: center;

  width: 72px;
  height: 72px;

  font-size: 2.3rem;

  border-radius: 50%;

  background: radial-gradient(circle, rgba(217, 183, 101, 0.18), rgba(81, 53, 111, 0.4));

  border: 1px solid rgba(217, 183, 101, 0.45);

  box-shadow: 0 0 22px rgba(217, 183, 101, 0.1);
}

.dad-lens-content {
  display: flex;
  flex-direction: column;
  gap: 14px;

  max-width: 700px;
}

.dad-lens-content p {
  color: var(--text-soft);
  line-height: 1.7;
}

.dad-lens-response {
  margin-top: 25px;

  padding: 18px;

  background: rgba(7, 5, 16, 0.55);

  border-left: 3px solid var(--gold);

  border-radius: 12px;

  color: var(--text);
  line-height: 1.6;
}

* {
  scrollbar-width: thin;
  scrollbar-color: var(--purple) var(--midnight);
}

.contact-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
  vertical-align: middle;
}

@media (max-width: 650px) {
  .app {
    padding: 14px;
  }

  .boo-header {
    flex-direction: column;
    text-align: center;
  }
}`;

const SCRIPT_JS = `const booButton = document.getElementById("booButton");
const diaryButton = document.getElementById("diaryButton");
const dadLensButton = document.getElementById("dadLensButton");

const booSection = document.getElementById("booSection");
const diarySection = document.getElementById("diarySection");
const dadLensSection = document.getElementById("dadLensSection");

const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

const unlockDiaryButton = document.getElementById("unlockDiaryButton");
const diaryLock = document.getElementById("diaryLock");
const diaryContent = document.getElementById("diaryContent");

const saveDiaryButton = document.getElementById("saveDiaryButton");
const diaryText = document.getElementById("diaryText");

const perspectiveButton = document.getElementById("perspectiveButton");
const sendToDadButton = document.getElementById("sendToDadButton");
const dadLensResponse = document.getElementById("dadLensResponse");

function showSection(section) {
  booSection.classList.add("hidden");
  diarySection.classList.add("hidden");
  dadLensSection.classList.add("hidden");

  section.classList.remove("hidden");
}

booButton.addEventListener("click", () => {
  showSection(booSection);
});

diaryButton.addEventListener("click", () => {
  showSection(diarySection);
});

dadLensButton.addEventListener("click", () => {
  showSection(dadLensSection);
});

function addMessage(text, type) {
  const message = document.createElement("div");

  message.className =
    type === "user"
      ? "message user-message"
      : "message boo-message";

  message.textContent = text;

  chatMessages.appendChild(message);

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const message = chatInput.value.trim();

  if (!message) {
    return;
  }

  addMessage(message, "user");

  chatInput.value = "";
  chatInput.disabled = true;

  try {
    const response = await fetch("/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: message
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Boo couldn't respond.");
    }

    addMessage(data.response || "Boo didn't have a response.", "boo");

  } catch (error) {
    console.error(error);

    addMessage(
      "I couldn't reach Boo's brain right now. Try again in a moment.",
      "boo"
    );

  } finally {
    chatInput.disabled = false;
    chatInput.focus();
  }
});

const savedDiary = localStorage.getItem("booDiary");

if (savedDiary) {
  diaryText.value = savedDiary;
}

unlockDiaryButton.addEventListener("click", () => {
  diaryLock.classList.add("hidden");
  diaryContent.classList.remove("hidden");

  diaryText.focus();
});

saveDiaryButton.addEventListener("click", () => {
  localStorage.setItem("booDiary", diaryText.value);

  saveDiaryButton.textContent = "Saved ✓";

  setTimeout(() => {
    saveDiaryButton.textContent = "Save Diary";
  }, 1500);
});

perspectiveButton.addEventListener("click", () => {
  dadLensResponse.textContent =
    "Dad Lens is here to help you slow down, think clearly, and look at the situation from another perspective.";

  dadLensResponse.classList.remove("hidden");
});

sendToDadButton.addEventListener("click", () => {
  dadLensResponse.textContent =
    "The Send to Dad feature will be connected separately so a message is intentionally sent to Dad. Your private diary stays separate.";

  dadLensResponse.classList.remove("hidden");
});

showSection(booSection);`;

const BOO_IMAGE_BASE64 = "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
