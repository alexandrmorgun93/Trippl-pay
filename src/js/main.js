;
(() => {
  'use strict';

  /*variables*/
  /*feedback*/
  const feedback = document.querySelector('.feedback_elem');



/*feedback*/
if(feedback!==null){
  (require('./modules/feedback'))(feedback);
}

$(function(){
	$(window).scroll(function(){
  	if($(document).scrollTop()>$(window).height()){
    	$('.scroll_up').show();
    }else{
    	$('.scroll_up').hide();
    }
  });
  $('.scroll_up').click(function(){
  	$('html,body').animate({scrollTop: 0}, 700);
  });
});



})();

import anime from 'animejs';

// let timeline = anime.timeline();
// timeline.add({
//     targets: '.wave_elem path',
//     translateY: [{
//         value: '200px',
//         duration: 0
//       },
//       {
//         value: '0%'
//       }
//     ],
//     loop:true,
//     duration:3000
//
//   })
//   .add({
//     targets: '.wave_elem path',
//     d: [{
//         value: 'M1921,0c0,0-165.2,15.5-446.1,15.5S868.2,0,496.3,0S0,15.5,0,15.5V50h1921V0z',
//         duration: 0,
//       },
//       {
//         value: 'M1920.5,0.1c-87.3-0.4-217.1,0.4-371.3,7.6c-49.4,2.3-45.9,2.7-74.8,3.6c-192,6.5-255.2-12.8-437.9-8.8c-85.5,4.2-162.8,3-215,1.3c0,8.3,0,16.6,0,25h1921V0.1z',
//       },
//       {
//         value: 'M1921,0c0,0-165.2,15.5-446.1,15.5S9968.1,0,596.3,0S0,15.5,0,15.5V50h1921V0z'
//
//       },
//       {
//         value: 'M1921,0c0,0-265.2,15.5-446.1,15.5S818.1,0,596.3,0S0,15.5,0,15.5V50h1921V0z'
//       },
//     ],
//     offset: 0,
//     duration: 2000,
//     easing: 'easeInOutSine',
//
//   });




let slick = require('slick-carousel');

$('.slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 4,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  focusOnSelect: true,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  responsive: [{
      breakpoint: 1180,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }
  ]
});
