// бургер

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let menu_link = document.querySelector(".menu_link");
let for_body = document.querySelector(".for_body");

// цей код написав сам, без базових знань JS, тому можуть бути помилки

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  for_body.classList.toggle("shadow");
});
menu_link.addEventListener("click", function () {
  menuBtn.classList.remove("active");
  menu.classList.remove("active");
  for_body.classList.remove("shadow");
});
for_body.addEventListener("click", function () {
  menuBtn.classList.remove("active");
  menu.classList.remove("active");
  for_body.classList.remove("shadow");
});

// анімація при скролі,чесно скопіював з https://webgolovolomki.com/poyavlenie-elementov-pri-skrolle/

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");
for (let elm of elements) {
  observer.observe(elm);
}
