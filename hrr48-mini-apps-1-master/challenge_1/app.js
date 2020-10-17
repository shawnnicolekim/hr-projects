// make a table
function makeTable() {
  var table = document.getElementById('board');
  var row;
  var cell;

  table.setAttribute('style', 'border: 2px solid black; border-collapse: collapse');

  for (var i = 0; i < 3; i++) {
    row = table.insertRow(-1);
    for (var m = 0; m < 3; m++) {
      cell = row.insertCell(-1);
      cell.setAttribute('style', 'border: 2px solid black;  width: 50px; height: 50px; font-size: 30px; text-align: center')
      // cell.setAttribute('id', 'mark');
    }
  }
}

makeTable();

var marker = 'X';
// adds a mark on click
document.querySelector('tbody').addEventListener('click', function(event) {
  if (!event.target.innerText) {
    event.target.innerText = marker;
    marker === 'X' ? marker = 'O' : marker = 'X';
  } else {
    alert('You can\'t mark a taken spot. Pick an empty spot!');
  }

  checkWin(event.target);
})

document.getElementById('reset').addEventListener('click', function(event) {

  var rows = document.querySelector('tbody').children;
  var cell;

  for (var i = 0; i < rows.length; i++) {
    cells = rows[i].children;
    for (var m = 0; m < cells.length; m++) {
      cells[m].innerText = '';
    }
  }
})

const checkRows = function(current) {
  var parent = current.parentNode;
  var cells = parent.children;

  for (var i = 0; i < cells.length; i++) {
    if (cells[i].innerText !== current.innerText || cells[i].innerText.length === 0) {
      return false;
    }
  }
  return true;
}

const checkCols = function(current) {
  var rows = document.querySelector('tbody').rows;
  var index = current.cellIndex;
  var cell;

  for (var i = 0; i < rows.length; i++) {
    cell = rows[i].children[index];

    if (cell.innerText !== current.innerText || cell.innerText.length === 0) {
      return false;
    }
  }
  return true;
}

const checkDiags = function(current) {
  if (majorDiag(current) || minorDiag(current)) {
    return true;
  }
}

//top left to bottom right
const majorDiag = function(current) {
  var rows = document.querySelector('tbody').rows;

  for (var i = 0; i < rows.length; i++) {
    if (rows[i].cells[i].innerText !== current.innerText || rows[i].cells[i].innerText.length === 0) {
      return false;
    }
  }
  return true;
}

// bottom left to top right
const minorDiag = function(current) {
  var rows = document.querySelector('tbody').rows;
  var index = 0;

  for (var i = 2; i > -1; i--) {
    if (rows[i].cells[index].innerText !== current.innerText || rows[i].cells[index].innerText.length === 0) {
      return false;
    }
    index++;
  }
  return true;
}

// checkWin function - checks row/col/diag
const checkWin = function(event) {
  if (checkRows(event) || checkCols(event) || checkDiags(event)) {
    alert('We got a winner! Click the reset button to clear the board and play again.')
  }
}