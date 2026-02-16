import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const tabModules = {
  home: loadHome,
  menu: loadMenu,
  contact: loadContact,
};

function setActiveButton(activeBtn) {
  document.querySelectorAll("nav button").forEach((btn) => {
    btn.classList.remove("active");
  });
  activeBtn.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  // Load home tab on initial page load
  loadHome();

  // Set up tab switching
  document.querySelectorAll("nav button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      if (tabModules[tab]) {
        setActiveButton(btn);
        tabModules[tab]();
      }
    });
  });
});
