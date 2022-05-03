$(function(){


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