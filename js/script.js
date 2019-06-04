$(document).ready(function() {
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

    $("#peekabooshow").slideToggle();
    $("#peekaboohidden").slideToggle();
  });
});
