// 🔥 Firebase Contact Form Integration
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAcJGfOnvfS0-2VuInukTILkAd_V5X0Jw4",
  authDomain: "professional-summary.firebaseapp.com",
  databaseURL: "https://professional-summary-default-rtdb.firebaseio.com",
  projectId: "professional-summary",
  storageBucket: "professional-summary.appspot.com",
  messagingSenderId: "10620710371",
  appId: "1:10620710371:web:798fadabb4c0f1ab5444d6"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ✅ DOM Ready
window.addEventListener("DOMContentLoaded", () => {
  // AOS Init
  import('https://unpkg.com/aos@next/dist/aos.js').then(AOS => AOS.init());

  // 💬 Chatbot Elements
  const input = document.getElementById("userInput");
  const sendBtn = document.getElementById("sendBtn");
  const chatWindow = document.getElementById("chatWindow");

  sendBtn?.addEventListener("click", sendQuestion);
  input?.addEventListener("keypress", e => {
    if (e.key === "Enter") sendQuestion();
  });

 // ✨ Typing Effect with Thinking Dots
function typeBotReply(text) {
  let index = 0;

  const msgDiv = document.createElement("div");
  msgDiv.classList.add("bot-msg");
  msgDiv.innerHTML = "<strong>Bot:</strong> ";

  chatWindow.appendChild(msgDiv);

  function typeChar() {
    if (index < text.length) {
      msgDiv.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeChar, 25);
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }

  typeChar();
}

// 🚀 Main Chatbot Send Function with Thinking Animation
function sendQuestion() {
  const question = input.value.trim();
  if (!question) return;

  // User Message
  chatWindow.innerHTML += `<div class="user-msg"><strong>You:</strong> ${question}</div>`;
  input.value = "";

  // Typing indicator element
  const typingIndicator = document.createElement("div");
  typingIndicator.classList.add("typing-indicator");
  typingIndicator.innerHTML = `
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  `;
  chatWindow.appendChild(typingIndicator);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  // Delay before bot replies
  setTimeout(() => {
    // Remove thinking indicator
    typingIndicator.remove();

    // Show typed bot message
    const answer = getBotResponse(question);
    typeBotReply(answer);
  }, 1500);
}


  // 🔍 Predefined Bot Response Logic
  function getBotResponse(question) {
    const q = question.toLowerCase();

    if (q.includes("name")) return "I'm Tausif Kureshi’s chatbot assistant.";
    if (q.includes("college")) return "I study at Anjuman College of Engineering and Technology.";
    if (q.includes("specialization") || q.includes("branch")) return "My specialization is in Artificial Intelligence and Data Science.";
    if (q.includes("skills")) return "Skills include Python, SQL, Java, C, C++, Power BI, and more!";
    if (q.includes("project")) return "Some projects include Deepfake Detection and Zahra – my AI assistant.";
    if (q.includes("intern") || q.includes("experience")) return "Internships at Plastroots (Data Analyst) and DevTown (Data Science).";
    if (q.includes("contact")) return "Email me at tausifkureshi5964@gmail.com or call 7385107129.";
    if (q.includes("linkedin")) return "LinkedIn: https://www.linkedin.com/in/tausif-kureshi-a484a2253";
    if (q.includes("github")) return "GitHub: https://github.com/tausif5964";
    if (q.includes("resume") || q.includes("cv")) return "Resume already provided at the home page of this profile. You can Download it by clicking on download button.";
    if (q.includes("hello") || q.includes("hi")) return "Hey there! Ask me anything about Tausif.";
    if (q.includes("about you") || q.includes("yourself") || q.includes("introduction"))
      return "I'm Tausif Kureshi, a final-year student in Artificial Intelligence and Data Science at Anjuman College of Engineering and Technology, passionate about AI/ML, with hands-on experience through internships and projects.";
    
    if (q.includes("education") || q.includes("schooling") || q.includes("hsc"))
      return "I completed my HSSC from Lokmanya Tilak Rashtriya Jr. College, Tumsar (2020–2021). Currently pursuing my B.E. in AI & DS (2021–2025).";
    
    if (q.includes("plastroots") || q.includes("data analyst"))
      return "At Plastroots (Jul–Sep 2024), I automated data scraping using Python to extract essential company data efficiently.";
    
    if (q.includes("devtown"))
      return "At DevTown (Sep–Dec 2023), I worked as a Data Science Intern, developing and fine-tuning ML models for real-world problems.";
    
    if (q.includes("deepfake"))
      return "I built a Multi-modal Deepfake Detection System using CNNs, LSTMs, and GANs to detect inconsistencies and ensure content authenticity.";
    
    if (q.includes("zahra") || q.includes("assistant"))
      return "Zahra is my AI-powered virtual assistant, capable of speech recognition, sentiment analysis, task automation, and Wikipedia Q&A.";
    
    if (q.includes("sentiment"))
      return "I built a sentiment analysis project using VADER to classify user sentiments as Positive, Negative, or Neutral.";
    
    if (q.includes("tools") || q.includes("libraries"))
      return "I use tools like Power BI, Excel, NumPy, Pandas, and libraries such as Scikit-learn, TensorFlow, and Matplotlib.";
    
    if (q.includes("soft skill") || q.includes("communication"))
      return "Soft skills include Communication, Teamwork, Time Management, and Problem Solving.";
    
    if (q.includes("goal") || q.includes("career") || q.includes("future"))
      return "My goal is to contribute to impactful AI projects and grow professionally in the AI & Data Science industry.";
    
    if (q.includes("motivated") || q.includes("strength"))
      return "I’m self-driven, passionate about learning, and always eager to take on challenges in AI and Data Science.";
    
    if (q.includes("github project"))
      return "Explore my projects here: Zahra – https://github.com/tausif5964/Mini-Project | Sentiment Analysis – https://github.com/tausif5964/Recommendation-system";
    
    if (q.includes("download resume"))
      return "You can download my resume directly from the homepage using the 'Download Resume' button.";
    
    if (q.includes("email") || q.includes("phone")||q.includes("contact"))
      return "Feel free to contact me at tausifkureshi5964@gmail.com or call me at 7385107129.";    
    return "Oops! I’m not sure about that one. Try asking something else about Tausif — I’ll get back to you with more info soon!";
  }



  // 📬 Contact Form Submission to Firebase
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message || email.includes("localhost") || email.includes("127.0.0.1")) {
        alert("❗ Invalid input detected. Please fill out the form properly.");
        return;
      }

      try {
        await push(ref(db, "contacts"), {
          name,
          email,
          message,
          timestamp: Date.now()
        });
        alert("✅ Message sent successfully!");
        form.reset();
      } catch (error) {
        console.error("❌ Firebase error:", error);
        alert("Something went wrong while sending. Please try again.");
      }
    });
  }
});
