AOS.init();

$(document).ready(function(){
  $(window).scroll(function(){
      if ($(this).scrollTop() > 200) {
          $('.go_top').fadeIn();
      } else {
          $('.go_top').fadeOut();
      }
  }); 

  $('.go_top').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 850);
      return false;
  });

  $('.carousel').carousel({
    interval: 3000,
    pause:false
  })
});

function checkScroll(){
    var startY = $('.navbar').height() * 2;

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  }
});
