/* .js files add interaction to your website */

//CONTACT FORM
document.addEventListener('DOMContentLoaded', function() {
  const contactForm= document.querySelector('.contact-form');

  if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const submitBtn= contactForm.querySelector('.submit-btn');
      const originalText= submitBtn.textContent;

      //SHOW LOADING STATE
      submitBtn.textContent= 'Sending...';
      submitBtn.disabled= true;

      //THANK YOU PAGE
      setTimeout(function() {
        submitBtn.textContent= originalText;
        submitBtn.disabled= false;
      },2000);
      });
    }
  }
