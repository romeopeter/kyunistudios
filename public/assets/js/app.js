/* Smooth scrolling */
$("a[href*='#']")
// Remove links that point link to anything
.not("a[href='#']")
.not("a[href='#0']")
.on('click', function(e) {


  var target = this.hash;

  e.preventDefault();

  // The offset/top margin
  var navOffset = $('#navbar').height();

  // Add smooth scroll to page
  // 800 specifies the number of milliseconds it takes to scroll to the specified area
  return $('html, body').animate({
    scrollTop: $(this.hash).offset().top - navOffset
  }, 800, function() {
    return window.history.pushState(null, null, target);
  });
});
