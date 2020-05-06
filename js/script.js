$('.carousel').slick({
    arrows: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.tamanhos').slick({
    arrows: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 13,
    slidesToScroll: 2,
    responsive: [
    {
        breakpoint: 1130,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 4,
          infinite: false,
          dots: true
        }
      },  
    {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 4,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 5,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
      

$(document).scroll(function(){

    var topoPagina = $(window).scrollTop();

    if(topoPagina > 650){
        $(".svg-logo").addClass("svg-logo-black");
    }
    else{
        $(".svg-logo").removeClass("svg-logo-black");
    }
});

$(document).scroll(function(){

    var topoPagina = $(window).scrollTop();

    if(topoPagina > 65){
        $(".menu-principal").addClass("menu-fixed");
    }
    else{
        $(".menu-principal").removeClass("menu-fixed");
    }
});