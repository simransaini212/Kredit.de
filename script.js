$(document).ready(function () {
    $(".customer-logos").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
  });
  $(document).ready(function() {
    $('.togglefaq').click(function(e) {
      e.preventDefault();
      var notthis = $('.active').not(this);
      notthis.find('.icon-minus').addClass('icon-plus').removeClass('icon-minus');
      notthis.toggleClass('active').next('.faqanswer').slideToggle(300);
      $(this).toggleClass('active').next().slideToggle("fast");
      $(this).children('i').toggleClass('icon-plus icon-minus');
    });
  });
    