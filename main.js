(function(){
  let swiper;

  analyticsDescriptionData = {
    analytics :'Analytic capabilities can generate tremendous value. Yet, over 80% of analytic projects never have their insights acted upon. SKALE UP your insight to action and embed insight into day to day operations.',
    cloud :"You don’t need Big Data; you need Big Insight. You need the Cloud’s storage and compute capacity to SKALE UP your Analytics capabilities.",
    data :'Data is an economic asset that can create value beyond its original purpose. SKALE UP the Data you use for analytics and find new insights, new value and new products.'
  };

  cloudDescriptionData = {
    cloud: 'The Cloud is where you need to be to do business. With the Cloud comes increased complexity and costs that are not under control. Our Cloud Squadron can help you address these challenges to SKALE UP your Cloud environment.',
    analytics: 'The Cloud can connect your entire enterprise no matter where they are. Yet only 3% of employees report they can get answers to data questions in seconds. SKALE UP your organization to the speed of questions.',
    data: 'Two thirds of companies report Data migration to the Cloud takes more time than planned. Our Cloud Squadron to SKALE UP the success of your Cloud Data Migration.'
  };

  dataDescriptionData = {
    data: 'Better data is better business and Customer satisfaction. Yet only 17% of organizations reported that their Data Quality improved over the last three years. SKALE UP your Data Quality with ProSkales.',
    cloud: "62% of Cloud experts say integration of legacy systems data and Cloud data is their biggest challenge. Don’t waste time solving problems that have already been solved. Our Cloud Squadron is ready. SKALE UP your Data integration.",
    analytics: "Data is the building block of Analytics. Only 25% of analysts feel confident when working with their company’s data. SKALE UP the trust in data and analytics."
  };


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
      $('.swiper .box' ).addClass('box-active box-'+ id);
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
      $('.description-box-analytics .description-box-body').html(analyticsDescriptionData.analytics);
      $('.description-box-cloud .description-box-body').html(analyticsDescriptionData.cloud);
      $('.description-box-data .description-box-body').html(analyticsDescriptionData.data);

      $('.description-box-body').removeClass('text-analytics text-data text-cloud');
      $('.description-box').removeClass('description-box-active');
      $('.description-box-analytics').removeClass('description-box-inactive');

      $('.description-box-cloud').addClass('description-box-inactive');
      $('.description-box-data').addClass('description-box-inactive');

      $('.description-box-data .description-box-body').addClass('text-analytics');
      $('.description-box-cloud .description-box-body').addClass('text-analytics');

      $('.description-box-analytics').addClass('description-box-active');
      $event.stopPropagation();
      activateCircle('analytics');
    });

    $('.description-box-data').on('click', ($event) => { 
      $('.description-box-data .description-box-body').html(dataDescriptionData.data);
      $('.description-box-cloud .description-box-body').html(dataDescriptionData.cloud);
      $('.description-box-analytics .description-box-body').html(dataDescriptionData.analytics);

      $('.description-box-body').removeClass('text-analytics text-data text-cloud');
      $('.description-box').removeClass('description-box-active');
      $('.description-box-data').removeClass('description-box-inactive');

      $('.description-box-analytics').addClass('description-box-inactive');
      $('.description-box-cloud').addClass('description-box-inactive');

      $('.description-box-analytics .description-box-body').addClass('text-data');
      $('.description-box-cloud .description-box-body').addClass('text-data');


      $('.description-box-data').addClass('description-box-active');
      $event.stopPropagation();
      activateCircle('data');
    });

    $('.description-box-cloud').on('click', ($event) => { 
      $('.description-box-cloud .description-box-body').html(cloudDescriptionData.cloud);
      $('.description-box-data .description-box-body').html(cloudDescriptionData.data);
      $('.description-box-analytics .description-box-body').html(cloudDescriptionData.analytics);

      $('.description-box-body').removeClass('text-analytics text-data text-cloud');
      $('.description-box').removeClass('description-box-active');
      $('.description-box-cloud').removeClass('description-box-inactive');

      $('.description-box-analytics').addClass('description-box-inactive');
      $('.description-box-data').addClass('description-box-inactive');

      $('.description-box-data .description-box-body').addClass('text-cloud');
      $('.description-box-analytics .description-box-body').addClass('text-cloud');

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
      $('.description-box-body').removeClass('text-analytics text-data text-cloud');
      $('.description-box-analytics .description-box-body').html(analyticsDescriptionData.analytics);
      $('.description-box-cloud .description-box-body').html(cloudDescriptionData.cloud);
      $('.description-box-data .description-box-body').html(dataDescriptionData.data);

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