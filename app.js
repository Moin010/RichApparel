// slick slider start

// home hero slider

$("#hero-slider-1").slick({
  dots: false,
  arrows: true,
  prevArrow:
    '<img class="left-arrow-white hero-slider-1-arrow" src="img/left-arrow-white.svg" alt=""/>',
  nextArrow:
    '<img class="right-arrow-white hero-slider-1-arrow" src="img/right-arrow-white.svg" alt=""/>',
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
});

// home page image scroll
$(".image-carousel-1").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:
    '<img class="left-arrow-black image-carousel-arrow" src="img/left-arrow-black.svg" alt=""/>',
  nextArrow:
    '<img class="right-arrow-black image-carousel-arrow" src="img/right-arrow-black.svg" alt=""/>',
});

// slick slider end
