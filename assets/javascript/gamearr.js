

var random_number;
var wins = 0;
var losses = 0;
var running_total;
var number_options = [0, 0, 0, 0];
var $images = [];
var num_crystals = 4;

function update_display() {
  $("#random_number").text(random_number);
  $("#wins").text(wins);
  $("#losses").text(losses);
  $("#running_total").text(running_total);
  $("#random_number").text(random_number);
}

function reset_game() {
  // set new random number 19-120
  random_number = Math.floor(Math.random() * 101) + 19;
  running_total = 0;

  //get new random nums 1-12 and store them in crystals
  for (var i = 0; i < $images.length; i++)
    $images[i].attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);

}


function init_crystals() {
  for (var i = 0; i < num_crystals; i++) {
    $images.push($("<img>"));
    $images[i].addClass("crystal-image");
    $images[i].attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    $("#crystals").append($images[i]);
  }
}


init_crystals();
reset_game();
update_display();

// on-click event for button clicks of crystal images
$(".crystal-image").on("click", function () {
  var crystal_value = $(this).attr("data-crystalvalue");
  crystal_value = parseInt(crystal_value);
  running_total += crystal_value;

  if (running_total == random_number) {
    wins++;
    reset_game();
  }
  else if (running_total > random_number) {
    losses++;
    reset_game();
  }
  update_display();

});



