// ---------------------------
// EmailJS Setup & Contact Form
// ---------------------------

// Replace with your EmailJS Public Key, Service ID, and Template ID
emailjs.init("loH_l0EUb4Fz39pu5");

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm("service_pysp1wq", "template_hlnwp3q", this)
    .then(function() {
      // Show success message
      const msg = document.getElementById("success-message");
      msg.style.display = "block";

      // Hide after 4 seconds
      setTimeout(() => { msg.style.display = "none"; }, 4000);

      // Reset form
      document.getElementById("contact-form").reset();
    }, function(error) {
      alert("Failed to send message. Please try again.");
      console.log(error);
    });
});

// ---------------------------
// Scroll-triggered fade-in
// ---------------------------

const sections = document.querySelectorAll("section");

const observerOptions = {
  root: null, // viewport
  rootMargin: "0px",
  threshold: 0.1 // trigger when 10% of section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // animate only once
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});

document.getElementById("download-cv").addEventListener("click", function(e) {
  e.preventDefault();

  // Detect if the device is mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Force download DOCX on mobile
    const link = document.createElement("a");
    link.href = "Nelson_Kimutai_CV.docx"; // DOCX file
    link.download = "Nelson_Kimutai_CV.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    // Open PDF in a new tab on desktop
    window.open("Nelson_Kimutai_CV.pdf", "_blank");
  }
});

