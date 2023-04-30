const countOfRows = 9, countOfCols = 9;

function isOneElementInArray(array, element)
{
  return array.filter(el => el == element).length === 1;    
} 

function isValidInput(board)
{
  if(!Array.isArray(board))
      throw "It isn't an array";
  if(board.length !== countOfRows)
      throw `Count of rows must be equal ${countOfRows}`;

  for(let col of board)
    if(col.length !== countOfCols)
        throw `Count of cols must be equal ${countOfCols}`;

  for(let row = 0; row < countOfRows; row++) {
    for(let col = 0; col < countOfCols; col++) {
        const value = board[row][col];
        if(value < 0 || value > 9)
            throw `Values must be between 0 and 9`;
      }
  }
}
function isNotExistZero(board)
{
  for(let row = 0; row < countOfRows; row++) 
    for(let col = 0; col < countOfCols; col++) 
      if(board[row][col] === 0)
         return false;
  return true;
}
function isValidRows(board)
{
  for(let row = 0; row < countOfRows; row++) 
    for(let col = 0; col < countOfCols; col++) 
      if(!isOneElementInArray(board[col], board[row][col]))
        return false;
  return true;
}
function isValidCols(board)
{
  for(let row = 0; row < countOfRows; row++) 
    for(let col = 0; col < countOfCols; col++) 
      if(!isOneElementInArray(board[row], board[row][col]))
        return false;
  return true;
}
function isValidMatrixes(board)
{
  const countOfRowsInMatrix = 3, countOfColsInMatrix = 3;

  for (let matrixRow = 0; matrixRow < countOfRowsInMatrix; matrixRow++) 
    for (let matrixCol = 0; matrixCol < countOfColsInMatrix; matrixCol++) 

      for (let row = matrixRow * countOfRowsInMatrix; row < countOfRowsInMatrix * (matrixRow + 1); row++) 
        for (let col = matrixCol * countOfColsInMatrix; col < countOfColsInMatrix * (matrixCol + 1); col++) 
          
          if(!isOneElementInArray(board[row], board[row][col]))
              return false;

  return true;
}

function validSolution(board)
{
  isValidInput(board);
  return isNotExistZero(board) && isValidRows(board) && isValidCols(board) && isValidMatrixes(board);
}

//Let's try)
try
{
  const board1 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];//valid

  const board2 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
  ];//invalid

  const board3 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [6, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ];//invalid

  const board4 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 7],
  ];//invalid

  const board5 = [
    [7, 8, 4, 1, 5, 9, 3, 2, 6],
    [5, 3, 9, 6, 7, 2, 8, 4, 1],
    [6, 1, 2, 4, 3, 8, 7, 5, 9],
    [9, 2, 8, 7, 1, 5, 4, 6, 3],
    [3, 5, 7, 8, 4, 6, 1, 9, 2],
    [4, 6, 1, 9, 2, 3, 5, 8, 7],
    [8, 7, 6, 3, 9, 4, 2, 1, 5],
    [2, 4, 3, 5, 6, 1, 9, 7, 8],
    [1, 9, 5, 2, 8, 7, 6, 3, 4]
  ];//valid

  const boards = [board1, board2, board3, board4, board5];
  for(let board of boards)
    console.log(validSolution(board));
}
catch(error)
{
  console.log(error);
}