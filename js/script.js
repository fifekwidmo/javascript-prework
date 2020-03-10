// global
let computerWins = 0;
let playerWins = 0;
let draws = 0;

function playGame(playerInput) {
    clearMessages()

    function getMoveName(argMoveId) {
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
    function displayResults(argComputerMove, argPlayerMove) {
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
            playerWins++;
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nozyce') {
            printMessage('Komputer wygrał!');
            computerWins++;
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce') {
            printMessage('Ty wygrywasz!');
            playerWins++;
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Komputer wygrał!');
            computerWins++;
        } else if (argComputerMove == 'nozyce' && argPlayerMove == 'papier') {
            printMessage('Komputer wygrał!');
            computerWins++;
        } else if (argComputerMove == 'nozyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
            playerWins++;
        } else if (argPlayerMove == 'nieznany ruch') {
            printMessage('Przegrana walkowerem')
            computerWins++;
        } else if (argComputerMove == argPlayerMove)
            printMessage('Remis')
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let argComputerMove = getMoveName(randomNumber);
    printMessage('Komputera ruch to: ' + argComputerMove);
    console.log('Gracz wpisał: ' + playerInput);
    let argPlayerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + argPlayerMove);

    displayResults(argComputerMove, argPlayerMove, playerWins, computerWins)
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