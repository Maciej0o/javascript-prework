function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
printMessage('mdmdmmd');

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}else if(randomNumber == 2){
  computerMove = 'papier';
}else if(randomNumber == 3){
  computerMove = 'nożyczki';
}

printMessage('Mój ruch to: ' + computerMove);
