


// function createButtons() {
//   for (var i = 0; i < 4; i++) {
//       var button = $("<button>");
//       button.text("button #" + (i + 1));
//       button.addClass("number");
//       button.attr("id", i + 1);
//       $("#buttons").append(button);
//   }
// }


// $("#number-to-guess").text(targetNumber);

var numberOptions = [3, 9, 12, 2];


var reset_image = $("<img>");
reset_image.addClass("reset");
reset_image.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
$(".reset").append(reset_image);



function create_crystals(){ 
  for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
  }
}


create_crystals();

$(".reset").on("click", function() {
  $("#crystals").empty();
  alert("reset");
  create_crystals();
});


// on-click event for button clicks of crystal images
$("#crystals").on("click", ".crystal-image", function () {
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
    // alert("You clicked a crystal!");
  console.log(crystalValue);

});






// for (var i = 0; i < numberOptions.length; i++) {
//   var imageCrystal = $("<img>");
//   imageCrystal.addClass("crystal-image");
//   imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
//   imageCrystal.attr("data-crystalvalue", numberOptions[i]);
//   $("#crystals").append(imageCrystal);
// }

// for (var i = 0; i < numberOptions.length; i++) {
//   var imageCrystal = $("<img>");
//   imageCrystal.addClass("crystal-image");
//   imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
//   imageCrystal.attr("data-crystalvalue", numberOptions[i]);
//   $("#crystals").append(imageCrystal);
// }
