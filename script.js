

 $(function(){
    'use strict';

    //Banner slider
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        nextArrow: '<i class="fa-solid fa-circle-chevron-right next"></i>',
        prevArrow: '<i class="fa-solid fa-circle-chevron-left prev"></i>',
    });

      //menu fix
    var menuoff = $('.menu').offset().top;
        $(window).scroll(function(){
     
    var scrolling = $(this).scrollTop();

    if(scrolling > menuoff){
        $('.menu').addClass('menu_fix');
    }

    else{
        $('.menu').removeClass('menu_fix');
    }
    });


    //counter up
    $('.counter').counterUp({
        delay: 100,
        time: 3000
    });

    //Recent Post slider
    $('.recent_row').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        nextArrow: '<i class="fa-solid fa-circle-chevron-right rec_next"></i>',
        prevArrow: '<i class="fa-solid fa-circle-chevron-left rec_prev"></i>',
    });


    //mixitup js
    var containerEl = document.querySelector('.project_row');
    var mixer = mixitup(containerEl);

 //Back to Top button
 $('.back_top').click(function(){
    $('html, body').animate({
        scrollTop: 0,
    }, 3000);
 })


 //button animation
 $(window).scroll(function(){
   var scroll = $(this).scrollTop();

   if(scroll > 400){
        $('.back_top').fadeIn();
   }

   else{
       $('.back_top').fadeOut();
   }
 });

 //color switcher
 var colorSheets = [
    {
        color: "#4e3427",
        title: "Switch to Default",
        href: "./css/style.css"
    },
    {
        color: "#FFB100",
        title: "Switch to Orange",
        href: "./css/color-orange.css"
    },
    {
        color: "#4bda28",
        title: "Switch to Green",
        href: "./css/color-green.css"
    },
    {
        color: "#504460",
        title: "Switch to Aquamarine",
        href: "./css/color-aquamarine.css"
    },
    {
        color: "#800080",
        title: "Switch to Purple",
        href: "./css/color-purple.css"
    },
    {
        color: "#7B68EE",
        title: "Switch to SlateBlue",
        href: "./css/color-blue.css"
    }
];

ColorSwitcher.init(colorSheets);

//preloader part start
$(window).load(function(){
    $('.pre_loader').delay(700).fadeOut(300)
})


})
