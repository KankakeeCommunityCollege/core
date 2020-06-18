
function buildSliders() {
  $(document).ready(function() {
    $('.slick-slider').slick({
      dots: true,
      rows: 3,
      slidesPerRow: 3,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow:'<img alt="" class="a-left control-c prev slick-prev" src="assets/img/dbl-prev.svg">',
      nextArrow:'<img alt="" class="a-right control-c next slick-next" src="assets/img/dbl-next.svg">'
    });
  });
}

export default buildSliders;
