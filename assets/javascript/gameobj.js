



// object version js

var wins_display = document.getElementById("wins");
var board_display = document.getElementById("board");
var guesses_left_display = document.getElementById("guesses_left");
var guesses_display = document.getElementById("guesses");
var game_word_display = document.getElementById("game_word");

function string_to_array(str)
{
  return(str.split('')); // empty string separator
}

function array_to_string(arr)
{
  return(arr.join(""));
}

var word_game = {
  wins: 0,
  board: "",
  guesses_left: 9,
  guesses: "",
  game_words: ["jamaica", "marley", "ganja", "jah", "skankin"],
  game_won: false,
  game_word_index: 0,
  num_guesses: 9,

  update_display: function()
  {
    wins_display.textContent = this.wins;
    board_display.textContent = this.board;
    guesses_left_display.textContent = this.guesses_left;
    guesses_display.textContent = this.guesses;
  },

  increment_game_word_index: function()
  {
    if (this.game_word_index === this.game_words.length - 1)
      this.game_word_index = 0;
    else
      this.game_word_index++;
  },
   
  reset_game: function()
  {
    this.board = "";
    for (var i = 0; i < this.game_words[this.game_word_index].length; i++)
      this.board = this.board + "_";
  
    this.guesses_left = this.num_guesses;
    this.guesses = "";
  },

  onKeyUp: function(user_play)
  {
    game_word_display.textContent = "";  // clear out winning word display

    // if chars match insert into board variable
    var game_word_arr = string_to_array(this.game_words[this.game_word_index]);
    var board_arr = string_to_array(this.board);


    for (i = 0; i < game_word_arr.length; i++)
    {
      if (user_play === game_word_arr[i])
        board_arr[i] = user_play;
    }

    this.board = array_to_string(board_arr);

    // determine win/loss/guess-again

    if (this.board === this.game_words[this.game_word_index]) //a win
    {
      this.wins++;
      game_word_display.textContent = this.game_words[this.game_word_index] + " - You won!"; // display winning word

      this.increment_game_word_index();
      this.reset_game();
      
    }
    else if (--this.guesses_left === 0)    // a loss
    {
      game_word_display.textContent = this.game_words[this.game_word_index] + " - You lost!"; // display losing word
      this.increment_game_word_index();
      this.reset_game();

    }
    else                               //another guess
    {
      if ((this.guesses_left > 0) && (this.guesses_left < 8))
      {
        this.guesses = this.guesses + ', ';
      }
      this.guesses = this.guesses + user_play;
    }
    this.update_display();
  },
};


word_game.reset_game();
word_game.update_display();

document.onkeyup = function(event)
{
  word_game.onKeyUp(event.key);
}




    
