(function(){
  let swiper;

 descriptionData = {
    analytics: {
      analytics :'Analytic capabilities can generate tremendous value. Yet, over 80% of analytic projects never have their insights acted upon. SKALE UP your insight to action and embed insight into day to day operations.',
      cloud :"You don’t need Big Data; you need Big Insight. You need the Cloud’s storage and compute capacity to SKALE UP your Analytics capabilities.",
      data :'Data is an economic asset that can create value beyond its original purpose. SKALE UP the Data you use for analytics and find new insights, new value and new products.'
    },
    cloud: {
      cloud: 'The Cloud is where you need to be to do business. With the Cloud comes increased complexity and costs that are not under control. Our Cloud Squadron can help you address these challenges to SKALE UP your Cloud environment.',
      analytics: 'The Cloud can connect your entire enterprise no matter where they are. Yet only 3% of employees report they can get answers to data questions in seconds. SKALE UP your organization to the speed of questions.',
      data: 'Two thirds of companies report Data migration to the Cloud takes more time than planned. Our Cloud Squadron to SKALE UP the success of your Cloud Data Migration.'
    },
    data : {
      data: 'Better data is better business and Customer satisfaction. Yet only 17% of organizations reported that their Data Quality improved over the last three years. SKALE UP your Data Quality with ProSkales.',
      cloud: "62% of Cloud experts say integration of legacy systems data and Cloud data is their biggest challenge. Don’t waste time solving problems that have already been solved. Our Cloud Squadron is ready. SKALE UP your Data integration.",
      analytics: "Data is the building block of Analytics. Only 25% of analysts feel confident when working with their company’s data. SKALE UP the trust in data and analytics."
    }
  };

  boxesData = {
    analytics: {
      top: {
        title: 'Data Swamp',
        value: 'The amount of data you are collecting will not decrease. Make sure you have strong Data Governance in place before it turns into a Data Swamp. Learn how.'
      },
      left: {
        title: 'Complex Data Pipelines',
        value: 'Is maintaining complex data pipelines consuming so many resources it is impacting your ability to scale? We can reduce this complexity and increase your capacity to grow.'
      },
      bottom: {
        title: 'Complex Data Lake Operations',
        value: 'If your Data Lake is consuming more and more of your team&#39;s resources to support, automation solutions can help.'
      }
    },
    cloud: {
      top: {
        title: 'Cloud Data Migration',
        value: 'Two thirds of companies report Cloud Data Migration takes longer than planned. Need help with your timelines?'
      },
      left: {
        title: 'Lack visibility on Cloud usage and performance',
        value: "It's 6:00 o'clock. Do you know what your Cloud is doing? Like most companies, probably not. And it is costing you money."
      },
      bottom: {
        title: 'Hybrid Cloud Performance',
        value: 'On average, Hybrid Cloud is only meeting 53% of the expected business benefits. A second look by our Cloud Squadron may be needed.'
      }
    },
    data: {
      top: {
        title: 'Why is Analytics not Aligned With Business',
        value: 'No matter how cool the insight, if it does not support your business strategy it is of little value. Value Engineering ensures your Analytics Projects are aligned with your business goals.'
      },
      left: {
        title: 'Backlog of Report Requests',
        value: 'Are your Data Engineers and Data nalysts underwater with requests for reports? It is possible to reduce the orkload with the right mix of Dashboards and Self Serve Analytics.'
      },
      bottom: {
        title: 'Analytic Migration',
        value: 'There are more cost effective solutions for your Analytics. Let us do a tool assessment for your best Analytics Stack and migrate your solutions.'
      }
    },
  }


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

  function loadSwiperBoxContent(id) {
    $('.swiper [data-hash="slide1"] .box .box-header').html(boxesData[id].top.title);
    $('.swiper [data-hash="slide1"] .box .box-body-content').html(boxesData[id].top.value);

    $('.swiper [data-hash="slide2"] .box .box-header').html(boxesData[id].left.title);
    $('.swiper [data-hash="slide2"] .box .box-body-content').html(boxesData[id].left.value);

    $('.swiper [data-hash="slide3"] .box .box-header').html(boxesData[id].bottom.title);
    $('.swiper [data-hash="slide3"] .box .box-body-content').html(boxesData[id].bottom.value);
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
    
    loadSwiperBoxContent(id);

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

      $('.description-box-body').removeClass('text-analytics text-data text-cloud');
      $('.description-box').removeClass('description-box-active');
      $('.description-box-'+ id).addClass('description-box-active');
      $('.description-box-'+ id).removeClass('description-box-inactive');

      $('.description-box-cloud .description-box-body').html(descriptionData[id].cloud);
      $('.description-box-data .description-box-body').html(descriptionData[id].data);
      $('.description-box-analytics .description-box-body').html(descriptionData[id].analytics);

      $('.description-box .description-box-body').addClass('text-' + id);
      $('.description-box-'+id+' .description-box-body').removeClass('text-' + id);

      loadSwiperBoxContent(id);

      initSwiper();
      $event.stopPropagation();
    });

    $('.description-box-analytics').on('click', ($event) => { 
      $('.description-box-analytics .description-box-body').html(descriptionData['analytics'].analytics);
      $('.description-box-cloud .description-box-body').html(descriptionData['analytics'].cloud);
      $('.description-box-data .description-box-body').html(descriptionData['analytics'].data);

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
      $('.description-box-data .description-box-body').html(descriptionData['data'].data);
      $('.description-box-cloud .description-box-body').html(descriptionData['data'].cloud);
      $('.description-box-analytics .description-box-body').html(descriptionData['data'].analytics);

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
      $('.description-box-cloud .description-box-body').html(descriptionData['cloud'].cloud);
      $('.description-box-data .description-box-body').html(descriptionData['cloud'].data);
      $('.description-box-analytics .description-box-body').html(descriptionData['cloud'].analytics);

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
      $('.description-box-analytics .description-box-body').html(descriptionData.analytics.analytics);
      $('.description-box-cloud .description-box-body').html(descriptionData.cloud.cloud);
      $('.description-box-data .description-box-body').html(descriptionData.data.data);

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