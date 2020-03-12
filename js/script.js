// global
let computerWins = 0;
playerWins = 0;
draws = 0;

let playGame = function(playerInput) {
    clearMessages()
    let getMoveName = function(argMoveId) {

            if (argMoveId == 1) {
                return 'kamień';
            } else if (argMoveId == 2) {
                return 'papier';
            } else if (argMoveId == 3) {
                return 'nozyce';
            }
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
        //dodalem jesli ktos wygra to do zmiennej playerWins lub computerWins inkrementuje i dodaje plus 1
    let displayResults = function() {
        let randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);
        let computerMove = getMoveName(randomNumber);
        printMessage('Komputera ruch to: ' + computerMove);
        console.log('Gracz wpisał: ' + playerInput);
        let playerMove = getMoveName(playerInput);
        printMessage('Twój ruch to: ' + playerMove);

        if (computerMove == 'kamień' && playerMove == 'papier') {
            printMessage('Ty wygrywasz!');
            playerWins++;
        } else if (computerMove == 'kamień' && playerMove == 'nozyce') {
            printMessage('Komputer wygrał!');
            computerWins++;
        } else if (computerMove == 'papier' && playerMove == 'nozyce') {
            printMessage('Ty wygrywasz!');
            playerWins++;
        } else if (computerMove == 'papier' && playerMove == 'kamień') {
            printMessage('Komputer wygrał!');
            computerWins++;
        } else if (computerMove == 'nozyce' && playerMove == 'papier') {
            printMessage('Komputer wygrał!');
            computerWins++;
        } else if (computerMove == 'nozyce' && playerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
            playerWins++;
        } else if (playerMove == 'nieznany ruch') {
            printMessage('Przegrana walkowerem')
            computerWins++;
        } else if (computerMove == playerMove)
            printMessage('Remis')
    }
    displayResults()
        //szukam po id w DOM i pokazuje w niej playerwins/computer wins
    document.getElementById("humanResult").innerHTML = ("Wynik użytkownika " + playerWins);
    document.getElementById("computerResult").innerHTML = ("Wynik komputera " + computerWins);
    //tu do displayresults dodalem playerWins i computerWins
}

//dodatkowe zadanie
let messagesAnimation = document.getElementById('messages');
document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
    this.classList.toggle('active');
    messagesAnimation.classList.toggle("animation");
    setTimeout(function() { messagesAnimation.classList.remove("animation"); }, 2000);
});
document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
    this.classList.toggle('active');
    messagesAnimation.classList.toggle("animation");
    setTimeout(function() { messagesAnimation.classList.remove("animation"); }, 2000);
});
document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
    this.classList.toggle('active');
    messagesAnimation.classList.toggle("animation");
    setTimeout(function() { messagesAnimation.classList.remove("animation"); }, 2000);
});