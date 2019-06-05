

// // non-object version js

// var wins = 0;
// var board = "";
// var guesses_left = 9;
// var guesses = "";
// var game_words = ["jamaica", "marley", "ganja", "jah", "skankin", "iree", "dred"];
// var game_won = false;
// var game_word_index = 0;
// var num_guesses = 9;

// var wins_display = document.getElementById("wins");
// var board_display = document.getElementById("board");
// var guesses_left_display = document.getElementById("guesses_left");
// var guesses_display = document.getElementById("guesses");
// var game_word_display = document.getElementById("game_word");

// function update_display()
// {
//   wins_display.textContent = wins;
//   board_display.textContent = board;
//   guesses_left_display.textContent = guesses_left;
//   guesses_display.textContent = guesses;
// }

// // not used function

// function show_winning_word(show)
// {
//   if (show)
//     game_word_display.style.display = 'block';
//   else
//     game_word_display.style.display = 'none';
// }


// function increment_game_word_index()
// {
//   if (game_word_index === game_words.length - 1)
//     game_word_index = 0;
//   else
//     game_word_index++;
// }

// function set_game()
// {
//   board = "";
//   for (var i = 0; i < game_words[game_word_index].length; i++)
//     board = board + "_";

//   guesses_left = num_guesses;
//   guesses = "";
// }

// function string_to_array(str)
// {
//   return(str.split('')); // empty string separator
// }

// function array_to_string(arr)
// {
//   return(arr.join(""));
// }

// set_game();
// update_display();

// document.onkeyup = function(event) 
// {
//   game_word_display.textContent = "";  // clear out winning word display

//   var user_play = event.key;

//   // if chars match insert into board variable
//   var game_word_arr = string_to_array(game_words[game_word_index]);
//   var board_arr = string_to_array(board);


//   for (i = 0; i < game_word_arr.length; i++)
//   {
//     if (user_play === game_word_arr[i])
//       board_arr[i] = user_play;
//   }

//   board = array_to_string(board_arr);

//   // determine win/loss/guess-again

//   if (board === game_words[game_word_index]) //a win
//   {
//     wins++;
//     game_word_display.textContent = game_words[game_word_index] + " - You won!"; // display winning word

//     increment_game_word_index();
//     set_game();
    
//   }
//   else if (--guesses_left === 0)    // a loss
//   {
//     game_word_display.textContent = game_words[game_word_index] + " - You lost!"; // display losing word
//     increment_game_word_index();
//     set_game();

//   }
//   else                               //another guess
//   {
//     if ((guesses_left > 0) && (guesses_left < 8))
//     {
//       guesses = guesses + ', ';
//     }
//     guesses = guesses + user_play;
//   }
//   update_display();
// }


  


    
