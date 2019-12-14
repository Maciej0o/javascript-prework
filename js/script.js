{
  function playGame(playerInput){

    clearMessages()


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
    }

      function displayResult (argComputerMove, argPlayerMove){
      console.log('moves:', argComputerMove, argPlayerMove);
      if( argComputerMove == 'kamień' && argPlayerMove == "papier"
      ||  argComputerMove == 'papier' && argPlayerMove == 'nożyczki'
      ||  argComputerMove == 'nożyczki' && argPlayerMove == 'kamień'){
        return 'Ty wygrywasz!!';
      }else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'
      ||  argComputerMove == 'nożyczki' && argPlayerMove == 'papier'
      ||  argComputerMove == 'kamień' && argPlayerMove == 'nożyczki'){
        return 'Przegrywasz.'
      }else{
        return 'Remis.'
      }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);


    const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    const result = displayResult(computerMove, playerMove);
    printMessage(result);
  }

  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });

  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });

  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
}
