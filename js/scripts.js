// Business Logic

var resultNumbers = [];

function beep(number) {
  // Make an array of number from 0 to input number
  for (var i = 0; i <= number; i++){
    if (i % 3 === 0 && i !== 0) {
      resultNumbers.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (i.toString().includes("1")) {
      resultNumbers.push("Boop!");
    } else {
      resultNumbers.push(i);
    }


  }
  return resultNumbers;
}


// User-interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("ul#result").empty();

    var inputNumber = parseInt($("#number").val());

    var result = beep(inputNumber);

    result.forEach(function(item) {
      $("#result").append("<li>" + item + "</li>");
    });

  });
});
