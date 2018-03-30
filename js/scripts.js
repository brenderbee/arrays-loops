// Business Logic
function beep(number, name) {
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
      var words = []; // Clears array on each submit
      words.push("I'm sorry, ", name, ". I'm afraid I can't do that.")
      resultNumbers.push(words.join(""));
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

    var inputName = $("#name").val();
    var inputNumber = parseInt($("#number").val());
    var inputIncrease = $("input:radio[name=sort]:checked").val();


    var result = beep(inputNumber, inputName);

    if ( inputIncrease > 0) {
      result.forEach(function(item) {
        $("ul").append("<li>" + item + "</li>");
      });
    } else {
      result.forEach(function(item) {
        $("ul").prepend("<li>" + item + "</li>");
      });
    }
    $("#main").fadeOut();
    $(".result").show();
  });
});
