const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const modal = document.getElementById("modal");
const qrModal = document.getElementById("qrModal");
const modalTitle = document.getElementById("modalTitle");
const modalFee = document.getElementById("modalFee");
const qrProject = document.getElementById("qrProject");
let selectedProject = "";
let selectedFee = "";

document.querySelectorAll(".select-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedProject = btn.dataset.project;
    selectedFee = btn.dataset.fee;
    modalTitle.textContent = selectedProject;
    modalFee.textContent = `Registration fee: ${selectedFee}`;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

document.getElementById("closeModal").onclick = () => modal.classList.remove("open");
document.getElementById("closeQr").onclick = () => qrModal.classList.remove("open");

document.getElementById("registrationForm").addEventListener("submit", (e) => {
  e.preventDefault();
  modal.classList.remove("open");
  qrProject.textContent = `${selectedProject} • Registration fee ${selectedFee}`;
  qrModal.classList.add("open");
  qrModal.setAttribute("aria-hidden", "false");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("open");
  if (e.target === qrModal) qrModal.classList.remove("open");
});

// Replace this placeholder with the official Navya Book Publication WhatsApp number.
const whatsappNumber = "91XXXXXXXXXX";
const whatsappMessage = encodeURIComponent("Hello, I want information about Navya Book Publication handwriting projects.");
document.getElementById("whatsappBtn").href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
