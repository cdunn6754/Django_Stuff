// which player's turn is it 0 or -1
var playerTurn = 0;
// array, one element per table column. Each element holds the next
// row number to be modified(start at the bottom (-1))
var columnArray = [4,4,4,4,4,4,4];
// js object to hold the players colors
var colorDict = {0:'blue', 1:'red'};


// main Game function
$('td').on('click',function(){
  var colClass = "." + $(event.target).attr('class'); //class name of column clicked
  var colNumber = parseInt(colClass.split("")[2]); // get the column number alone, indexed from 0
  var elementOfColumn = columnArray[colNumber]; // which element in the column to modify indexed from 0
  var color = colorDict[playerTurn]; // which color are we working with (i.e. which player)

  if (elementOfColumn < 0){
    changePlayerInstructions(playerTurn, 1)
    return; // if the column is full already dont do anything
  }
  else{
      // change the color of the appropriate circle
      $(colClass).eq(elementOfColumn).css('background-color', color);
  }

  // reset some controlling vars
  // move up one circle in this column just modified
  columnArray[colNumber] = elementOfColumn -1;
  // switch the playerTurn to the other player
  if (playerTurn == 0){ playerTurn = 1 }
  else if (playerTurn == 1){ playerTurn = 0}
  changePlayerInstructions(playerTurn)
})

// Change the player instructions
function changePlayerInstructions(playerTurn, warning = 0)
{
  var instructions = "Player " + playerTurn + " it is your turn." +
    "Your color is " + colorDict[playerTurn] + "."
  if (warning){
    instructions = instructions + " \nThat column is full dummy, pick another."
  }
  $('.playerInstructions').text(instructions)
}

// See if anyone won
function checkWinner(playerTurn, elementOfColumn, colNumber)
{
  var color = colorDict(playerTurn) // color we a looking for
  var points = 1; // get 4 points and you win

  // search horizontally left
  for (i = colNumber - 1; i >= 0; i--)
  {
    var currentElement = getCircle(elementOfColumn, i);
    if (currentElement.css("background-color") == color)
    {
      points ++;
    }
    else
    {
      break;
    }
  } //for

  // search right
}

// get circle of interst based on column and column element number
function getCircle(elementOfColumn, colNumber)
{
  var colName = ".c" + colNumber;
  return $(colName).eq(colNumber);
}
//console.log(color);
