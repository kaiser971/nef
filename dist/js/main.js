new fullpage('#fullpage', {
    sectionsColor: ['transparent', '#EFEFEF', '#EFEFEF', '#EFEFEF', 'transparent'],
  });

$('.gallery').slick({
    adaptiveHeight: false,
    nextArrow: '<button type="button" class="slick-next"><svg width="60px" height="80px" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#00b5d6" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8"/></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg width="60px" height="80px" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#00b5d6" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375"/></svg></button>',
});