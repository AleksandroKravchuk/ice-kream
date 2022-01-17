    $(document).ready(function () {
        $('.autor__list').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true
            // asNavFor:".autor__list-main"
        });
        $('.single-item-rtl').slick({
            rtl: true
        });
          $('.autor__list-main').slick({
           
            
            //   arrows: false,
              fade: true,
              
        //    asNavFor:".autor__list"
        });
    });