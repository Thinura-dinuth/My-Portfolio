document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const mainContent = document.querySelector("main");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    mainContent.classList.toggle("menu-active");
  });

  // Close menu when a link is clicked
  document.querySelectorAll(".nav-links li").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      mainContent.classList.remove("menu-active");
    });
  });

  // Close menu when clicking outside of it
  document.addEventListener("click", function (event) {
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      mainContent.classList.remove("menu-active");
    }
  });
});
// Get the button
let backToTopButton = document.getElementById("backToTop");

// Show the button when scrolled down 100px
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the page
backToTopButton.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  function changeActiveLink() {
    let scrollPos = window.scrollY + 50; // Offset for better accuracy

    sections.forEach((section) => {
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${section.id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", changeActiveLink);
  // Initial call to set the active link on page load
  changeActiveLink();
});
