$(document).ready(function () {
    // Initialize the slick slider
    $(".sliders").slick({
      autoplay: false, // Enable autoplay
      autoplaySpeed: 2000, // Pause duration before sliding (2s)
      speed: 1500, // Smooth transition duration (1s)
      arrows: true, // Hide navigation arrows
      dots: false, // Hide navigation dots
      slidesToShow: 3, // Show 5 logos at a time
      slidesToScroll: 1, // Scroll 1 logo at a time
      prevArrow: `<svg width="41" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" class="prev absolute -top-[7%] right-[9%]"><path d="M.293 8.707a1 1 0 010-1.414L6.657.929A1 1 0 018.07 2.343L2.414 8l5.657 5.657a1 1 0 11-1.414 1.414L.293 8.707zM41 9H1V7h40v2z" fill="#ccc" class="hover:fill-primary"/></svg>`,
      nextArrow: `<svg width="41" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" class="next absolute -top-[7%] right-[2%]"><path d="M40.707 8.707a1 1 0 000-1.414L34.343.929a1 1 0 10-1.414 1.414L38.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 9h40V7H0v2z" fill="#ccc" class="hover:fill-primary"/></svg>`
    });
  });




  const headers = document.querySelectorAll('.accordion-header');

    headers.forEach((btn) => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const icon = btn.querySelector('.accordion-icon');
        const isOpen = content.classList.contains('max-h-[500px]');

        // Close all other accordions
        headers.forEach((otherBtn) => {
          const otherContent = otherBtn.nextElementSibling;
          const otherIcon = otherBtn.querySelector('.accordion-icon');
          if (otherContent !== content) {
            otherContent.classList.remove('max-h-[500px]');
            otherContent.classList.add('max-h-0');
            otherBtn.classList.remove('border-[#FF6231]');
            otherBtn.classList.add('border-[#888888]');
            otherIcon.textContent = '+';
          }
        });

        // Toggle current one
        if (isOpen) {
          content.classList.remove('max-h-[500px]');
          content.classList.add('max-h-0');
          btn.classList.remove('border-[#FF6231]');
          btn.classList.add('border-[#888888]');
          setTimeout(() => {
            icon.textContent = '+';
          }, 300);
        } else {
          content.classList.remove('max-h-0');
          content.classList.add('max-h-[500px]');
          btn.classList.remove('border-[#888888]');
          btn.classList.add('border-[#FF6231]');
          setTimeout(() => {
            icon.textContent = '–';
          }, 300);
        }
      });
    });

  document.addEventListener('DOMContentLoaded', function () {
    const vbox = new VenoBox({
      selector: '.video-popup',
      autoplay: true,
      maxWidth: '800px',
    });
  });
