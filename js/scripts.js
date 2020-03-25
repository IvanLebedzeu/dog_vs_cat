$(document).ready(function() {
  $("button#dog").click(function() {
    $("ul#dog").prepend("<li>Bark!</li>");
    $("ul#cat").prepend("<li>Meow!</li>");
  });

  $("button#cat").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Bark!</li>");
  });

  $("h1").click(function() {
   // $("ul#cat").prepend("<li>Meow!</li>");
   //  $("ul#dog").prepend("<li>Bark!</li>");
   $("h1").before("<img src='https://i.ytimg.com/vi/C-sWokqiVHw/maxresdefault.jpg'>");
   //$("p").after("<img src='https://vestikamaza.ru/uploads/vestikamaza/blog/illustration/image/a9bb8b/preview_8ydrnf45rgy.jpg'>");
   $("img").click(function() {
    $("img").remove();
  });
  });

  $("p").click(function() {
    // $("ul#cat").prepend("<li>Meow!</li>");
    //  $("ul#dog").prepend("<li>Bark!</li>");
    //$("h1").before("<img src='https://i.ytimg.com/vi/C-sWokqiVHw/maxresdefault.jpg'>");
    $("p").after("<div id = 'div1'><img src='https://vestikamaza.ru/uploads/vestikamaza/blog/illustration/image/a9bb8b/preview_8ydrnf45rgy.jpg'></div>");
    $("#div1").click(function() {
      $("#div1").remove();
    });
   });

   

  // $("h1").children("img").first().click(function() {
    //$(this).remove();
  //});
  //$("p").children("img").first().click(function() {
    //$(this).remove();
  //});


  
});








