// JN 2018 all right reserverd


// loader 
// pause all animations until website fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  document.body.classList.add('jn-loading');
  document.body.style.overflow = 'hidden';
  window.addEventListener('load', showPage, false);
  
  function showPage() {
    let lw = document.querySelector('.loader-wrapper');
    lw.classList.add('fade-out');
    setTimeout(function() {
      document.body.classList.remove('jn-loading');
    },1000)
    document.body.style.overflow = 'auto';
    
    // wow js
    
    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
      }
    );
    wow.init();
  }
    
    
})