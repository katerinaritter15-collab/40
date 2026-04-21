document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const mobileMenu = document.querySelector("#nav-mobile");
  const closeBtn = document.querySelector("#burger-close");

  if (!burger || !mobileMenu || !closeBtn) return;

  burger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});