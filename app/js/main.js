$(function(){

  $('.shop__filter-btn').on('click',function(){
    $('.shop__filters').slideToggle();
  })



  $('.button-list').on('click', function(){
    $('.product-item').addClass('product-item--list');
    $('.shop-content__inner').addClass('shop-content__nogrid');
  })

  $('.button-grid').on('click', function(){
    $('.product-item').removeClass('product-item--list');
    $('.shop-content__inner').removeClass('shop-content__nogrid');
  })






  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active')
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  })

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical:true,
    draggable:false,
    responsive:[
      {
      breakpoing:850,
      settings:{
        draggable:true,
      }
      }
    ]


  })
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    focusOnSelect: true,
    draggable:false,
    arrows: false,
    fade:true,
  })


  $('.shop-content__filter-btn').on('click', function (){
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function(){
    $('.products__items-info').addClass('products__items--list')
  });

    $('.button-grid').on('click', function(){
    $('.products__items-info').removeClass('products__items--list')
  });

  $('.product-one__item-num').styler();


  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix:"$",
    onStart: function (data) {
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to);
    }
  });


  $('.top__slider-inner').slick({
    dots:true,
    arrows:false,
    fade:true,
    autoplay:true,
    autoplaySpeed:2000
    
    
  });

  $(".star").rateYo({
    
    starWidth: "11px",
    starHeight: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "12px",
    starSvg: '<svg width="18px" height="16px" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path d="M 11.914062 4.695312 L 16.402344 5.359375 C 16.773438 5.414062 17.085938 5.675781 17.207031 6.035156 C 17.324219 6.398438 17.226562 6.789062 16.960938 7.058594 L 13.703125 10.253906 L 14.472656 14.835938 C 14.535156 15.210938 14.382812 15.589844 14.070312 15.8125 C 13.757812 16.035156 13.351562 16.0625 13.015625 15.882812 L 9.003906 13.742188 L 4.992188 15.882812 C 4.65625 16.0625 4.246094 16.035156 3.9375 15.8125 C 3.628906 15.589844 3.472656 15.210938 3.539062 14.835938 L 4.304688 10.253906 L 1.050781 7.058594 C 0.78125 6.789062 0.683594 6.398438 0.804688 6.035156 C 0.921875 5.675781 1.230469 5.414062 1.605469 5.359375 L 6.09375 4.695312 L 8.105469 0.5625 C 8.273438 0.21875 8.621094 0 9.003906 0 C 9.386719 0 9.738281 0.21875 9.902344 0.5625 Z M 11.914062 4.695312 " /></g></svg>'

  });


    $(".products-star").rateYo({
    
    starWidth: "11px",
    starHeight: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "12px"

  });
});
$(function(){
  var mixer = mixitup('.products__items');

})
$(function(){
  var mixer = mixitup('.design__items' );

})


$(function(){
  
    $('.menu__btn').on('click',function(){
      $('.menu__list').addClass('menu__list--active');
      });
  

})


// $('.menu__btn').on('click',function(){
//     $('.menu__list').toggleClass ('menu__list--active')
//   