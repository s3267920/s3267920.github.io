(function() {
  $(".hamburger-icon").on("click", function() {
    $(".nav-menu").slideToggle("slow");
  });
  $(".hamburger-icon").on("tap", function() {
    $(".nav-menu").slideToggle("slow");
  });
})();
