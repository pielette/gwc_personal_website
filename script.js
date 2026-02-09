// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.12 });

reveals.forEach(r => io.observe(r));

// Card glow follows mouse
document.querySelectorAll(".project").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--x", `${x}%`);
    card.style.setProperty("--y", `${y}%`);
  });
});

// Copy email button
const copyBtn = document.getElementById("copyEmail");
const emailText = document.getElementById("emailText");
const toast = document.getElementById("toast");

copyBtn.addEventListener("click", async () => {
  const email = emailText.textContent.trim();
  try {
    await navigator.clipboard.writeText(email);
    toast.textContent = "Copied ✅";
    setTimeout(() => (toast.textContent = ""), 1400);
  } catch {
    toast.textContent = "Copy failed — select and copy manually.";
    setTimeout(() => (toast.textContent = ""), 2000);
  }
});
