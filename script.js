// Mobile menu
const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");

if (menuButton && navMenu) {
  menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Music button
const musicButton = document.querySelector(".music-button");

if (musicButton) {
  musicButton.addEventListener("click", () => {
    alert("Music feature coming soon!");
  });
}

// Order function
function order(productName) {
  const email = "masiri@gmail.com";
  const subject = encodeURIComponent("Order: " + productName);
  const body = encodeURIComponent(
    "Hello,\n\nI would like to order: " + productName
  );

  window.location.href =
    "mailto:" + email + "?subject=" + subject + "&body=" + body;
}
