const button = document.querySelector("button");

let isExpanded = button.getAttribute("aria-expanded") === "true";

function open() {
  button.setAttribute("aria-expanded", "true");
  isExpanded = true;
}

function close() {
  button.setAttribute("aria-expanded", "false");
  isExpanded = false;
}

function toggleMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  menuToggle.checked = !menuToggle.checked;
}

button.addEventListener("click", toggle);

