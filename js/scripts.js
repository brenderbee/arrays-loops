// Business Logic
function beep(number) {
  // Clears array on each submit
  var resultNumbers = [];

  // Input Validation
  if ( isNaN(number) ) {
    resultNumbers.push("Please enter a number.");
    return resultNumbers;
  } else if (number < 0){
    resultNumbers.push("Please enter a positive number.");
    return resultNumbers;
  }

  // Make an array of numbers and beeps from 0 to input number
  for (var i = 0; i <= number; i++){
    if (i % 3 === 0 && i !== 0) {
      resultNumbers.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (i.toString().includes("1")) {
      resultNumbers.push("Boop!");
    } else if (i.toString().includes("0")) {
      resultNumbers.push("Beep!");
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
    $("ul").empty();

    var inputNumber = parseInt($("#number").val());

    var result = beep(inputNumber);

    result.forEach(function(item) {
      $("ul").append("<li>" + item + "</li>");
    });

    $(".result").show();
  });
});
