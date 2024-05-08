 function changeText() {
      const texts = ['Bringing Your Ideas to Life', 'Developing Seamless Experiences', 'Empowering Your Online Presence']; 
      const blinkingText = document.querySelector('.blinking-text');
      let index = 0;

      setInterval(() => {
        blinkingText.textContent = texts[index];
        index = (index + 1) % texts.length;
      }, 2000); 
  
    }
    setTimeout(() => {
        const preloader = document.querySelector('.preloader-container');
        if (preloader) {
          preloader.style.display = 'none';
        }
      }, 1000);
    
    window.onload = changeText;

    $(document).ready(function(){
      $(".progress-bar-inner").each(function(){
        var width = $(this).attr('data-width');
      // console.log(width);

        $(this).animate({ width: width }, 1000);
      });
    });
    window.onload = function() {
      var text = document.getElementById('text');
      var texts = ["Full Stack Developer", "Laravel Developer"]; // Add your alternate texts here
      var index = 0;
      
      setInterval(function() {
        text.classList.remove('alternate-text');
        setTimeout(function() {
          text.textContent = texts[index];
          text.classList.add('alternate-text');
          index = (index + 1) % texts.length;
        }, 4000); // Change text every 2 seconds (2000 milliseconds)
      }, 4000); // Display each text for 4 seconds (4000 milliseconds)
    };
    $(document).ready(function () {
      // Smooth scrolling for links
      $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        
        $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
      });
    });
   