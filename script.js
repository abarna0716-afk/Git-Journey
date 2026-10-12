
emailjs.init({
  publicKey: "98AxoTWfzjGiIWXh6"
});const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});



contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  emailjs.send("service_qdb8xiv", "template_h65kjwj", {
    name: name,
    email: email,
    message: message,
    title: "New Portfolio Contact Message",
    time: new Date().toLocaleString()
  })
  .then(() => {
    successModal.querySelector("h2").textContent =
      `Thank you, ${name}!`;

    successModal.querySelectorAll("p")[0].textContent =
      "Your message has been sent successfully.";

    successModal.style.display = "flex";
    contactForm.reset();
  })
  .catch((error) => {
    console.error("Email sending failed:", error);

    alert("Sorry, your message could not be sent. Please try again.");
  });
});



document.getElementById("year").textContent = new Date().getFullYear();

const contactButton = document.getElementById("contactButton");
const successModal = document.getElementById("successModal");
const closeModal = document.getElementById("closeModal");
const okModal = document.getElementById("okModal");
console.log(contactButton, successModal, closeModal, okModal);

contactButton.onclick = (event) => {
  event.preventDefault();
  successModal.style.display = "flex";
};

closeModal.addEventListener("click", () => {
  successModal.style.display = "none";
});


okModal.addEventListener("click", () => {
  successModal.style.display = "none";
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
});


successModal.addEventListener("click", (event) => {
  if (event.target === successModal) {
    successModal.style.display = "none";
  }
});
