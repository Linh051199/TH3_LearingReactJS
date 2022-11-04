let icon = document.querySelector(".js-menu-icon");
let menu = document.querySelector(".js-menu");
let menuItem = document.querySelector(".js-menu-item");

console.log(icon);
console.log(menu);
console.log(menuItem);

icon.addEventListener("click", function () {
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  } else {
    menu.classList.add("show");
  }
});
