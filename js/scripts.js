// Business Logic

var resultNumbers = [];

function beep(number) {
  for (var i = 0; i <= number; i++){
    resultNumbers.push(i);
  }
  return resultNumbers;
}


// User-interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("ul").empty();

    var inputNumber = parseInt($("#number").val());

    var result = beep(inputNumber);

    result.forEach(function(item) {
      $("#result").append("<li>" + item + "</li>");
    });

  });
});
