// Typing effect
let i = 0;
const text = "Web Developer | BCA Student | AI & Automation Enthusiast";
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}