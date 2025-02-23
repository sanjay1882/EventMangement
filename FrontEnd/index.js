let slideIndex = 0;

        function moveSlide(step) {
            const slider = document.getElementById('slider');
            const slides = document.querySelectorAll('.event-card');
            slideIndex += step;

            if (slideIndex >= slides.length) {
                slideIndex = 0;
            } else if (slideIndex < 0) {
                slideIndex = slides.length - 1;
            }

            slider.style.transform = `translateX(-${slideIndex * 100}%)`;
        }
        document.getElementById("Events-container").addEventListener("click", function() {
            document.querySelector(".Section-3").scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          });
         
          function scrollToSection() {
            document.querySelector('.Section-3').scrollIntoView({
              behavior: 'smooth',
            })
          };