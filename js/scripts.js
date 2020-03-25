$(document).ready(function() {
  $("button#dog").click(function() {
    $("ul#dog").prepend("<li>Bark!</li>");
    $("ul#cat").prepend("<li>Meow!</li>");
  });

  $("button#cat").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Bark!</li>");
  });

});








