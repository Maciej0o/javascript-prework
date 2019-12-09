function getMoveName(argMoveId){
  if(argMoveId == 1){
    console.log('argument:' + argMoveId);
    return 'kamień';
  }else if(argMoveId == 2){
    console.log('argument:' + argMoveId);
    return 'papier';
  }else if(argMoveId == 3){
    console.log('argument:' + argMoveId);
    return 'nożyczki';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove){
  console.log('moves:', argComputerMove, argPlayerMove);
  if( argComputerMove == 'kamień' && argPlayerMove == "papier") {
    return 'Ty wygrywasz!!';
  }else if( argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    return 'Przegrywasz.'
  }else if( argComputerMove == 'papier' && argPlayerMove == 'nożyczki') {
    return 'Ty wygrywasz!'
  }else if( argComputerMove == 'nożyczki' && argPlayerMove == 'papier') {
    return 'Przegrywasz.'
  }else if( argComputerMove == 'nożyczki' && argPlayerMove == 'kamień') {
    return 'Ty wygrywasz!'
  }else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyczki') {
    return 'Przegrywasz.'
  }else if( argComputerMove == argPlayerMove) {
    return 'Remis.'
  }else if( argPlayerMove == 'nieznany ruch') {
    return 'Podałeś złą liczbę.'
  }
}

function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/* if(randomNumber == 1){
  computerMove = 'kamień';
}else if(randomNumber == 2){
  computerMove = 'papier';
}else if(randomNumber == 3){
  computerMove = 'nożyczki';
}
*/
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
/*
if(playerInput == '1'){
  playerMove = 'kamień';
}else if(playerInput == '2'){
  playerMove = 'papier';
}else if(playerInput == '3'){
  playerMove = 'nożyczki';
}
*/
printMessage('Twój ruch to: ' + playerMove);

let result = displayResult(computerMove, playerMove);

printMessage(result);
