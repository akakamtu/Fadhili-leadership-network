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

document.addEventListener('DOMContentLoaded', function() {
  // Get the button
  var scrollToTopButton = document.getElementById("scrollToTopButton");
  var toggleMenuButton = document.getElementById("toggleMenuButton");
  var copyEmailButton = document.getElementById("copyEmailButton");
  var emailInput = document.getElementById("emailInput");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopButton.style.display = "block";
      } else {
          scrollToTopButton.style.display = "none";
      }
  }

  // When the user clicks on the button, scroll to the top of the document
  scrollToTopButton.onclick = function() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  // Toggle menu
  toggleMenuButton.onclick = function() {
      var menu = document.getElementById("navMenu");
      if (menu.style.display === "block") {
          menu.style.display = "none";
      } else {
          menu.style.display = "block";
      }
  }

  // Copy email
  copyEmailButton.onclick = function() {
      emailInput.select();
      document.execCommand("copy");
  }
});