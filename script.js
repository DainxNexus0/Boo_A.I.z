const booButton = document.getElementById("booButton");
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


/* =========================
   Section Navigation
   ========================= */

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


/* =========================
   Boo Chat
   ========================= */

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
      throw new Error(
        data.error || "Boo couldn't respond."
      );
    }

    addMessage(
      data.response || "Boo didn't have a response.",
      "boo"
    );

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


/* =========================
   Diary
   ========================= */

const savedDiary =
  localStorage.getItem("booDiary");

if (savedDiary) {
  diaryText.value = savedDiary;
}

unlockDiaryButton.addEventListener("click", () => {
  diaryLock.classList.add("hidden");
  diaryContent.classList.remove("hidden");

  diaryText.focus();
});

saveDiaryButton.addEventListener("click", () => {
  localStorage.setItem(
    "booDiary",
    diaryText.value
  );

  saveDiaryButton.textContent = "Saved ✓";

  setTimeout(() => {
    saveDiaryButton.textContent = "Save Diary";
  }, 1500);
});


/* =========================
   Dad Lens
   ========================= */

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


/* =========================
   Start on Boo
   ========================= */

showSection(booSection);
