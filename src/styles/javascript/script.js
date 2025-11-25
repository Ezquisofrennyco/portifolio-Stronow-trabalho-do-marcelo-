// === MENU HAMBÚRGUER ===
const mobileBtn = document.getElementById('mobile_btn');
const mobileMenu = document.getElementById('mobile_menu');
const menuHamburguer = document.querySelector('.menu-hamburguer');

mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  menuHamburguer.classList.toggle('change');
});

// === CARROSSEL ===
const carousel = document.getElementById("dishCarousel");
document.querySelector(".carousel-btn.next").addEventListener("click", () => {
  carousel.scrollBy({ left: 300, behavior: "smooth" });
});
document.querySelector(".carousel-btn.prev").addEventListener("click", () => {
  carousel.scrollBy({ left: -300, behavior: "smooth" });
});
