window.addEventListener("DOMContentLoaded", () => {
  setupChatbot();
  setupContactForm();
});

function setupChatbot() {
  const input = document.getElementById("userInput");
  const sendBtn = document.getElementById("sendBtn");
  const chatWindow = document.getElementById("chatWindow");

  if (!input || !sendBtn || !chatWindow) return;

  const sendQuestion = () => {
    const question = input.value.trim();
    if (!question) return;

    chatWindow.innerHTML += `<div class="user-msg"><strong>You:</strong> ${escapeHtml(question)}</div>`;
    input.value = "";

    const typingIndicator = document.createElement("div");
    typingIndicator.classList.add("typing-indicator");
    typingIndicator.innerHTML = `<span class="dot"></span><span class="dot"></span><span class="dot"></span>`;
    chatWindow.appendChild(typingIndicator);
    chatWindow.scrollTop = chatWindow.scrollHeight;

    setTimeout(() => {
      typingIndicator.remove();
      typeBotReply(getBotResponse(question), chatWindow);
    }, 800);
  };

  sendBtn.addEventListener("click", sendQuestion);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendQuestion();
  });
}

function typeBotReply(text, chatWindow) {
  let index = 0;
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("bot-msg");
  msgDiv.innerHTML = "<strong>Bot:</strong> ";
  chatWindow.appendChild(msgDiv);

  const typeChar = () => {
    if (index < text.length) {
      msgDiv.innerHTML += escapeHtml(text.charAt(index));
      index += 1;
      setTimeout(typeChar, 20);
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  };

  typeChar();
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const status = document.getElementById("form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const message = document.getElementById("message")?.value.trim() || "";

    if (!name || !email || !message) {
      setStatus(status, "Please fill in all fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus(status, "Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:tausifkureshi5964@gmail.com?subject=${subject}&body=${body}`;

    setStatus(status, "Opening your email app to send the message...");
    form.reset();
  });
}

function setStatus(node, message) {
  if (node) node.textContent = message;
}

function getBotResponse(question) {
  const q = question.toLowerCase();

  if (q.includes("name")) return "I'm Tausif Kureshi's chatbot assistant.";
  if (q.includes("college")) return "I study at Anjuman College of Engineering and Technology.";
  if (q.includes("specialization") || q.includes("branch")) return "My specialization is in Artificial Intelligence and Data Science.";
  if (q.includes("skills")) return "Skills include Python, SQL, Java, C, C++, Power BI, and more.";
  if (q.includes("project")) return "Some projects include Deepfake Detection and Zahra, my AI assistant.";
  if (q.includes("intern") || q.includes("experience")) return "Internships at Plastroots (Data Analyst) and DevTown (Data Science).";
  if (q.includes("contact")) return "Email me at tausifkureshi5964@gmail.com.";
  if (q.includes("linkedin")) return "LinkedIn: https://www.linkedin.com/in/tausif-kureshi-a484a2253";
  if (q.includes("github")) return "GitHub: https://github.com/tausif5964";
  if (q.includes("resume") || q.includes("cv")) return "You can download my resume from the homepage.";
  if (q.includes("hello") || q.includes("hi")) return "Hey there! Ask me anything about Tausif.";

  return "I am still learning. Please ask about skills, projects, education, or contact details.";
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
