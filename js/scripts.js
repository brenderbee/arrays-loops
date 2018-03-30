// Business Logic

var resultNumbers = [];

function beep(number) {
  // Make an array of number from 0 to input number
  for (var i = 0; i <= number; i++){
    if (i % 3 === 0 && i !== 0) {
      resultNumbers.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
      resultNumbers.push(i);
    }
  }
  return resultNumbers;
}
  // resultNumbers.forEach(function(number){
  //   if (number % 3 === 0) {
  //    "I'm sorry, Dave. I'm afraid I can't do that."
  //   }
  // });




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
