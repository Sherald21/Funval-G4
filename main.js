import { container_s } from "./skills.js";
const toggleButton = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});


//DARK MODE
const toggle = document.getElementById("toggle-dark");
const html = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

//CONTACTO
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("form-name");
  const emailInput = document.getElementById("form-email");
  const messageInput = document.getElementById("form-message");

  const errorName = document.getElementById("error-name");
  const errorEmail = document.getElementById("error-email");
  const errorMessage = document.getElementById("error-message");
  const formStatus = document.getElementById("form-status");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Limpiar errores anteriores
    errorName.textContent = "";
    errorEmail.textContent = "";
    errorMessage.textContent = "";
    formStatus.textContent = "";

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    let valid = true;

    if (name.length < 3) {
      errorName.textContent = "Name must be at least 3 characters.";
      errorName.style.color = "red";
      valid = false;
    }

    if (!validateEmail(email)) {
      errorEmail.textContent = "Please enter a valid email address.";
      errorEmail.style.color = "red";
      valid = false;
    }

    if (message.length < 10) {
      errorMessage.textContent = "Message must be at least 10 characters.";
      errorMessage.style.color = "red";
      valid = false;
    }

    if (!valid) return;

    formStatus.textContent = "✅ Message sent successfully!";
    formStatus.style.color = "green";
    formStatus.classList.add("text-green-500");
    formStatus.classList.remove("text-red-500");

    form.reset();
  });
});
