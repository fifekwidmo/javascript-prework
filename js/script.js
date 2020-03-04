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

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let argComputerMove = getMoveName(randomNumber);

// if (randomNumber == 1) {
//     computerMove = 'kamień';
// } else if (randomNumber == '2') {
//     computerMove = 'papier';
// } else if (randomNumber == '3') {
//     computerMove = 'nozyce';
// }

printMessage('Komputera ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let argPlayerMove = getMoveName(playerInput);

// if (playerInput == '1') {
//     playerMove = 'kamień';
// } else if (playerInput == '2') {
//     playerMove = 'papier';
// } else if (playerInput == '3') {
//     playerMove = 'nozyce';
// }

printMessage('Twój ruch to: ' + argPlayerMove);


function displayResults(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if (argComputerMove == 'kamień' && argPlayerMovw == 'papier') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nozyce') {
        printMessage('Komputer wygrał!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
        printMessage('Remis!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
        printMessage('Remis');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Komputer wygrał!');
    } else if (argComputerMove == 'nozyce' && argPlayerMove == 'nozyce') {
        printMessage('Remis');
    } else if (argComputerMove == 'nozyce' && argPlayerMove == 'papier') {
        printMessage('Komputer wygrał!');
    } else if (argComputerMove == 'nozyce' && argPlayerMove == 'kamień')
        printMessage('Ty wygrywasz!');
}


// if (computerMove == 'kamień' && playerMove == 'papier') {
//     printMessage('Ty wygrywasz!');
// } else if (computerMove == 'kamień' && playerMove == 'nozyce') {
//     printMessage('Komputer wygrał!');
// } else if (computerMove == 'kamień' && playerMove == 'kamień') {
//     printMessage('Remis!');
// } else if (computerMove == 'papier' && playerMove == 'papier') {
//     printMessage('Remis');
// } else if (computerMove == 'papier' && playerMove == 'nozyce') {
//     printMessage('Ty wygrywasz!');
// } else if (computerMove == 'papier' && playerMove == 'kamień') {
//     printMessage('Komputer wygrał!');
// } else if (computerMove == 'nozyce' && playerMove == 'nozyce') {
//     printMessage('Remis');
// } else if (computerMove == 'nozyce' && playerMove == 'papier') {
//     printMessage('Komputer wygrał!');
// } else if (computerMove == 'nozyce' && playerMove == 'kamień')
//     printMessage('Ty wygrywasz!');