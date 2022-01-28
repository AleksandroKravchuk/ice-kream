(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const menuBtnClose = document.querySelector("[data-menu-close]");
  const mobileMenuRef = document.querySelector("[data-menu]");


  
  menuBtnRef.addEventListener("click", () => {
 

    menuBtnRef.classList.toggle("is-open");
    mobileMenuRef.classList.toggle("is-open");
    document.body.classList.toggle("modal-open");
  });
  menuBtnClose.addEventListener("click", () => {
    menuBtnRef.classList.remove("is-open");
    mobileMenuRef.classList.remove("is-open");
    document.body.classList.remove("modal-open");
  });
})();
$(document).ready(function(){

    $("#menu").on("click","a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();

 

        //забираем идентификатор бока с атрибута href

        var id  = $(this).attr('href'),

 

        //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top;

         

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

});
