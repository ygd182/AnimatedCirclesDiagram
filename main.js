(function(){
  let swiper;

  function initSwiper() {
    if($(window).width() <= 785 ) {
      $('.swiper').show();
      swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        calculateHeight:true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        hashNavigation: {
          watchState: true,
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      swiper.slideTo(1);
      var y = window.scrollY;
        window.scroll({
        top: $('.header-title').height() + 40,
        behavior: 'smooth'
      });
    }
  }

  function activateCircleHover(id) {
    const icon = $($('.circle-'+ id).find('.circle-icon'));
    icon.addClass('circle-icon-hover');
  }

  function activateCircle(id) {
    const circleImg =  $($('.circle-'+ id).closest('.circle')).find('.circle-img');
    $('.circle-img').removeClass('circle-img-active');
    $('.circle-img').addClass('circle-img-inactive');
    $('.circles-background').addClass('circles-background-inactive');
    circleImg.removeClass('circle-img-inactive');
    circleImg.addClass('circle-img-active');

    const circleParent =  $('.circle-'+ id);
    $('.circle').removeClass('circle-active');
    $('.circle').addClass('circle-inactive');
    circleParent.addClass('circle-active');

    $('.circle-icon').removeClass('circle-icon-active');
    $('.circle-icon').addClass('circle-icon-inactive');
    const icon = $($('.circle-'+ id).find('.circle-icon'));
    icon.removeClass('circle-icon-inactive');
    icon.addClass('circle-icon-active');
    initSwiper();
    $('.box').removeClass('box-active');
    $('.swiper .box').removeClass('box-active box-analytics box-cloud box-data');
    setTimeout(() => {
      $('.box-' + id ).addClass('box-active');
      $('.swiper .box' ).addClass('box-active box-'+id);
    }, 100);

    $('.description-box').removeClass('description-box-active');
    $('.description-box-'+ id).addClass('description-box-active');
  }

  $(document).ready(function() {
  
    $('.circle-icon').on('click', ($event) => {
      const circleImg =  $($event.target.closest('.circle')).find('.circle-img');
      $('.circle-img').removeClass('circle-img-active');
      $('.circle-img').addClass('circle-img-inactive');
      $('.circles-background').addClass('circles-background-inactive');
      circleImg.removeClass('circle-img-inactive');
      circleImg.addClass('circle-img-active');

      const circleParent =  $($event.target.closest('.circle'));
      $('.circle').removeClass('circle-active');
      $('.circle').addClass('circle-inactive');
      circleParent.addClass('circle-active');

      $('.circle-icon').removeClass('circle-icon-active');
      $('.circle-icon').addClass('circle-icon-inactive');
      const icon = $($event.target.closest('.circle-icon'));
      icon.removeClass('circle-icon-inactive');
      icon.addClass('circle-icon-active');
      
      const id = circleParent.data('id');
      $('.box').removeClass('box-active');
      $('.swiper .box').removeClass('box-active box-analytics box-cloud box-data');
      $('.description-box').addClass('description-box-inactive');
      setTimeout(() => {
        $('.box-' + id ).addClass('box-active');
        $('.swiper .box').addClass('box-active box-' + id);
      }, 100);

      $('.description-box').removeClass('description-box-active');
      $('.description-box-'+ id).addClass('description-box-active');
      $('.description-box-'+ id).removeClass('description-box-inactive');
      initSwiper();
      $event.stopPropagation();
    });

    $('.description-box-analytics').on('click', ($event) => { 
      $('.description-box').removeClass('description-box-active');

      $('.description-box-cloud').addClass('description-box-inactive');
      $('.description-box-data').addClass('description-box-inactive');

      $('.description-box-analytics').addClass('description-box-active');
      $event.stopPropagation();
      activateCircle('analytics');
    });

    $('.description-box-data').on('click', ($event) => { 
      $('.description-box').removeClass('description-box-active');

      $('.description-box-analytics').addClass('description-box-inactive');
      $('.description-box-cloud').addClass('description-box-inactive');

      $('.description-box-data').addClass('description-box-active');
      $event.stopPropagation();
      activateCircle('data');
    });

    $('.description-box-cloud').on('click', ($event) => { 
      $('.description-box').removeClass('description-box-active');

      $('.description-box-analytics').addClass('description-box-inactive');
      $('.description-box-data').addClass('description-box-inactive');

      $('.description-box-cloud').addClass('description-box-active');
      $event.stopPropagation();
      activateCircle('cloud');
    
    });

    $('.description-box-analytics').on('mouseover', ($event) => { 
      $('.description-box-cloud').addClass('description-box-inactive-hover');
      $('.description-box-data').addClass('description-box-inactive-hover');
      activateCircleHover('analytics');
    });

    $('.description-box-data').on('mouseover', ($event) => { 
      $('.description-box-analytics').addClass('description-box-inactive-hover');
      $('.description-box-cloud').addClass('description-box-inactive-hover');
      activateCircleHover('data');
    });

    $('.description-box-cloud').on('mouseover', ($event) => { 
      $('.description-box-analytics').addClass('description-box-inactive-hover');
      $('.description-box-data').addClass('description-box-inactive-hover');
      activateCircleHover('cloud');
    });

    $('.description-box').on('mouseleave', ($event) => { 
      $('.description-box').removeClass('description-box-inactive-hover');
      $('.circle-icon').removeClass('circle-icon-hover');
    });

    $('.wrapper').on('click', ($event) => {
      if ( swiper !== undefined ) swiper.destroy( true, true );
      $('.circle-img').removeClass('circle-img-active');
      $('.circle-img').removeClass('circle-img-inactive');
      $('.circle').removeClass('circle-active');
      $('.circle').removeClass('circle-inactive');
      $('.circle-icon').removeClass('circle-icon-active');
      $('.circle-icon').removeClass('circle-icon-inactive');
      $('.circles-background').removeClass('circles-background-inactive');
      $('.description-box').removeClass('description-box-active');
      $('.description-box').removeClass('description-box-inactive');
      $('.box').removeClass('box-active');
      $('swiper .box').removeClass('box-active box-analytics box-cloud box-data');
      $('.swiper').hide();
    });

    $('.swiper').on('click', ($event) => { 
      $event.stopPropagation();
    });

    $('.box').on('click', ($event) => { 
      $event.stopPropagation();
    });
  });
})();