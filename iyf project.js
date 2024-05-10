// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // If we need pagination
    paginationClickable: true,
    // Enable lazy loading
    lazy: true,
  });

  const searchInput = document.querySelector('.topleftnav input[type="text"]');
const searchOptions = document.querySelector('#search-options');

searchInput.addEventListener('click', () => {
  searchOptions.style.display = 'block';
});

document.addEventListener('click', (event) => {
  if (!event.target.matches('.topleftnav input[type="text"]')) {
    searchOptions.style.display = 'none';
  }
});