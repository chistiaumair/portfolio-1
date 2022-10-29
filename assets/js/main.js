(function ($) {
  "use strict";

  /*======== Pre-loader ============*/
  // var loader = function () {
  //   setTimeout(function () {
  //     if ($('#loader').length > 0) {
  //       $('#loader').removeClass('show');
  //     }
  //   }, 1);
  // };
  // loader();

  /*======== mobile menu ============*/
  const lineContainer = document.querySelector('.line-container');
  const mainMenu = document.querySelector('.main-menu');
  lineContainer.addEventListener('click', function () {
    lineContainer.classList.toggle('active');
    mainMenu.classList.toggle('active');
  });



  /*====== sticky menu ========
  1. window scroll করবো
  2. কতটুকু scroll করবো
  3. sticky class addClass করবো
  4. sticky class removeClass করবো
  */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 0) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  });

  /*====== Scroll Back to Top ========
  1. window scroll করবো
  2. কতটুকু scroll করবো
  3.  class/id কে fadeIn এবং fadeOut করবো
  4. class/id তে click করবো
  5. (html, body) scrollTop: 0 করবো
  */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
      $('#top').fadeIn();
    } else {
      $('#top').fadeOut();
    }
  });
  $('#top').on('click', function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 1500);
    return false;
  });

  /*======= Smooth scrolling on the navbar links ============================
   ১. a তে click করে hash আছে কিনা চেক  if(this.hash) চেক করবো
   ২. যদি hash থকে তাহলে el.preventDefault(); 
   3. $('html, body').animate({scrollTop: $(this.hash).offset().top - 45}, 1500);
  */ 
 $('.main-menu li a').on('click', function(el){
  if(this.hash){
    el.preventDefault();
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top -45
    }, 1500)
  }
 })

  /*======= navbar links scrolling and active =============
  1. a এবং section ধরবো
  2. function নিবো এবং এর মধ্যে section.length করবো
  3. while(--len && window.scrollY + 110 < sec[len].offsetTop){}
  4. a থেকে el.classList.remove('active');
  5. links[len].classList.add('active'); করবো
  */  
  const links = document.querySelectorAll('.main-menu li a');
  const sec = document.querySelectorAll('section');
  function activeMenu (){
    let len = sec.length;
    while(--len && window.scrollY + 110 < sec[len].offsetTop){}
      links.forEach( el =>{
        el.classList.remove('active');
        links[len].classList.add('active');
      })
    
  }
  activeMenu();
  window.addEventListener('scroll', activeMenu);

  // navbar links scrolling and active end

  // Typed Initiate
  if ($('.hero-area .hero-text h2').length == 1) {
    var typed_strings = $('.hero-area .hero-text .typed-text').text();
    var typed = new Typed('.hero-area .hero-text h2', {
      strings: typed_strings.split(', '),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true
    });
  };


  /*====== Count and Progress Bar Start =====*/

  $('.counter').counterUp({
    delay: 10,
    time: 1500
  });

  /*=========== Progress bar =================*/

  if ($('.bar').length) {
    $('.bar').appear(function () {
      var el = $(this);
      var percent = el.data('width');
      $(el).css('width', percent + '%');
    }, { accY: 0 });
  }


  /*=========== Portfolio filter =================*/
  var $grid = $('.portfolio-container').isotope();
  // filter items on button click
  $('.portfolio-menu').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  /*====== active portfolio menu ========*/
  $('.portfolio-menu li').on('click', function () {
    $('.portfolio-menu li').removeClass('filter-active');
    $(this).addClass('filter-active');
  });

  /*====== Testimonial ========*/
  $('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })


})(jQuery);
