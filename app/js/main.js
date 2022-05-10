$(function(){




  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  })

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical:true,
    draggable:false,


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
    spacing: "12px"

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