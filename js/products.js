(() => {
  const productsBtnRef = document.querySelector("[data-open-products]");
  const productListRef = document.querySelector("[data-modal-products]");

  productsBtnRef.addEventListener("click", () => {
    const expanded =
      productsBtnRef.getAttribute("aria-expanded") === "true" || false;

    productsBtnRef.classList.toggle("is-open");
    productsBtnRef.setAttribute("aria-expanded", !expanded);
 
    productListRef.classList.toggle("is-open");
    
  });
})();