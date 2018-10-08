$(document).ready(function(){
    //equality whole height of main_slider by window 
    $('.main_slider, .main_slider .carousel-inner, .main_slider .carousel-inner .one, .main_slider .carousel-inner .two, .main_slider .carousel-inner .three, .main_slider .carousel-inner .four').height($(window).height());
    $(window).resize(function(){
        $('.main_slider, .main_slider .carousel-inner, .main_slider .carousel-inner .one, .main_slider .carousel-inner .two, .main_slider .carousel-inner .three, .main_slider .carousel-inner .four').height($(window).height());
    });
    
    $('.carousel').carousel({
        interval: 5000
    });
    
    //navbar window scroll
    $(window).scroll(function(){
        if( $(this).scrollTop() >=10 ){
            $('.navbar').css('background-color', '#fff');
            $('.navbar').css('box-shadow', '0 0 10px 2px #333');
        } else{
            $('.navbar').css('background-color', 'rgba(0, 0, 0, 0)');
            $('.navbar').css('box-shadow', '0 0 0 0 rgba(0, 0, 0, 0)');
        }
    });
    
    //Running wow
    new WOW().init();
    
    //owl carousel (clients logo)
    $('.owl-carousel').owlCarousel({
        autoplay:true,
        loop:true,
        dots: false,
        nav: false,
        margin: 20,
        responsive:{
            0:{items:1},
            600:{items:3},
            1000:{items:5}
            },
        center:true,
        slideBy:2,
        autoplayTimeout:3000,
      });
    
});