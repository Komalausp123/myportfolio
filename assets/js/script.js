function changeText() {
  const texts = ['Bringing Your Ideas to Life', 'Developing Seamless Experiences', 'Empowering Your Online Presence']; 
  const blinkingText = document.querySelector('.blinking-text');
  let index = 0;
  // console.log(texts);
  setInterval(() => {
    blinkingText.textContent = texts[index];
    index = (index + 1) % texts.length;
  }, 1000); 
}

// Hide the preloader and show the header after 5 seconds
setTimeout(() => {
  const preloader = document.querySelector('.preloader-container');
  const header = document.querySelector('#header');
  if (preloader) {
    preloader.style.display = 'none';
    // Show the header
    header.style.display = 'block';
  }
}, 4000);
document.addEventListener('DOMContentLoaded', function() {
  changeText();
});
// Call changeText function when window is loaded
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
        }, 2000); // Change text every 2 seconds (2000 milliseconds)
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
   

    // submit contact form script

    document.getElementById("myForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Get form data
      var formData = new FormData(this);

      // Construct email body
      var emailBody = "Name: " + formData.get("name") + "\n";
      emailBody += "Email: " + formData.get("email") + "\n";
      emailBody += "Phone: " + formData.get("phone") + "\n";

      emailBody += "Message: " + formData.get("message");

      // Send email using mailto: URI scheme
      window.location.href = "mailto:komalmane4567@gmail.com?subject=Form Submission&body=" + encodeURIComponent(emailBody);
  });