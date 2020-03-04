let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
    computerMove = 'kamień';
} else if (randomNumber == '2') {
    computerMove = 'papier';
} else if (randomNumber == '3') {
    computerMove = 'nozyce';
}

printMessage('Komputera ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nozyce';
}

printMessage('Twój ruch to: ' + playerMove);

if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'nozyce') {
    printMessage('Komputer wygrał!');
} else if (computerMove == 'kamień' && playerMove == 'kamień') {
    printMessage('Remis!');
} else if (computerMove == 'papier' && playerMove == 'papier') {
    printMessage('Remis');
} else if (computerMove == 'papier' && playerMove == 'nozyce') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'kamień') {
    printMessage('Komputer wygrał!');
} else if (computerMove == 'nozyce' && playerMove == 'nozyce') {
    printMessage('Remis');
} else if (computerMove == 'nozyce' && playerMove == 'papier') {
    printMessage('Komputer wygrał!');
} else if (computerMove == 'nozyce' && playerMove == 'kamień')
    printMessage('Ty wygrywasz!');