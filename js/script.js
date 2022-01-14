    $(document).ready(function () {
        $('.autor__list').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true
        });
        $('.single-item-rtl').slick({
            rtl: true
        });
    });