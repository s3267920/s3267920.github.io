(function() {
  $(".hamburger-icon").on("click", function() {
    $(".nav-menu").slideToggle(300);
  });
  $(".hamburger-icon").on("tap", function() {
    $(".nav-menu").slideToggle(300);
  });
})();
