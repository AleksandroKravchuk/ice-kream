(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const menuBtnClose = document.querySelector("[data-menu-close]");
  const mobileMenuRef = document.querySelector("[data-menu]");


  
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
 
    mobileMenuRef.classList.toggle("is-open");
    document.body.classList.toggle("modal-open");
  });
  menuBtnClose.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.remove("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
 
    mobileMenuRef.classList.remove("is-open");
    document.body.classList.remove("modal-open");
  });
})();