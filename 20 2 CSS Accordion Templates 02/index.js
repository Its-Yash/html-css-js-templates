const accordions = document.getElementsByClassName("tab");

for (const accordion of accordions) {
  accordion.addEventListener("click", function (e) {
    e.preventDefault();
    accordion.classList.toggle("open-tab");
  });
}
