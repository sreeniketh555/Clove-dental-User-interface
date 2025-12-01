// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  navMenu.classList.toggle("show");
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    // Ignore if it's just "#"
    if (targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });

      // Close mobile nav after click
      navMenu.classList.remove("show");
      menuBtn.classList.remove("open");
    }
  });
});

// Optional: prevent dummy form submission (only for UI demo)
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted (front-end only demo). Hook this to your backend.");
  });
});
