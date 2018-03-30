// Business Logic

// User-interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("ul").empty();

    var inputNumber = $("#number").val();

    $("#result").append("<li>" + inputNumber + "</li>");
  });
});
