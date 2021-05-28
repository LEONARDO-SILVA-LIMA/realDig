new Glider(document.querySelector('.glider'), {
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
});
new Glider(document.querySelector('.gliderr'), {
    // Mobile-first defaults
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dotss',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    
  });