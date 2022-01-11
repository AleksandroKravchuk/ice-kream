jQuery(document).ready(function() {
		
    //fixed navigation
    $(document).scroll (function(){
        if ($(document).scrollTop() > 0) $('.page-header').addClass('page-heade-fixed');
        else $('.page-header').removeClass('page-heade-fixed');
    });


    // Slow scrolling to sections
    $(".easy-scroll").click(function(e){     
        e.preventDefault();
        $('html, body').animate({scrollTop: ($(this.hash).offset().top) - 110}, 500);
    });


    // Call modal window
    $('.modal-link').click(() => {
        $('.modal-container').fadeIn()
    });

    
    // Close modal window
    $('.close-modal').click(() => {
        $('.modal-container').fadeOut()
    });

});