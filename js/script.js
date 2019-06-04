$(document).ready(function() {

  $("button#dark").click(function() {
      // $("body").removeClass();
      $("body").addClass("dark-background");

      $("body").addClass("buttonsBecomeDark");
      // $("body").addClass("inside-dark");

    });

    $("button#light").click(function() {
        $("body").removeClass();
        $("body").addClass("light-background");
        // $("body").addClass("inside-light");

      });

  $("button#green").click(function() {
      $("body").removeClass();
      $("body").addClass("green-background");

    });

    $("button#yellow").click(function() {
      $("body").removeClass();
      $("body").addClass("yellow-background");

    });

    $("button#red").click(function() {
      $("body").removeClass();
      $("body").addClass("red-background");

    });
    $("button#white").click(function() {
      $("body").removeClass();

    });


  $(".clickable0").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();


  });

  $(".clickable1").click(function() {

    $("#walrus-fadeout").fadeToggle();
    $("#walrus-fadein").fadeToggle();


  });

  $(".clickable2").click(function() {

    $("#walrus-slideout").slideToggle();
    $("#walrus-slidein").slideToggle();


  });

  $(".clickable3").click(function() {
    $("body").removeClass();
    $("#peekabooshow").slideToggle();
    $("#peekaboohidden").slideToggle();
  });
});
