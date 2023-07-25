let winOrLose = '';
// document.querySelector('.btn').addEventListener('click', counter)
document.querySelector('.rock').addEventListener('click', function() {
    rockPaperScissors('rock');
    document.querySelector('.rock').style.gridArea = '4 / 1 / 5 / 2';
    document.querySelector('.evilPc').style.gridArea = '4 / 3 / 5 / 4';
    document.querySelector('.paper').style.display = 'none';
    document.querySelector('.scissors').style.display = 'none';
    document.querySelector('.evilPc').style.animation = 'stops';
    document.querySelector('.winOrLose').innerHTML = `${winOrLose}`;
    document.querySelector('.winOrLose').style.display = 'grid';
    document.querySelector('#playAgain').style.display = 'grid';
    const explosionDiv = document.getElementById('explosion');
    explosionDiv.style.display = 'block';

    // Start the CSS animation
    explosionDiv.style.animation = 'none'; // reset animation
    setTimeout(() => {
        explosionDiv.style.animation = '';
    }, 10);

    // Hide the explosion div after the animation ends
    explosionDiv.addEventListener('animationend', () => {
        explosionDiv.style.display = 'none';
    });
});
document.querySelector('.paper').addEventListener('click', function () {
    rockPaperScissors('paper');
    document.querySelector('.paper').style.gridArea = '4 / 1 / 5 / 2';
    document.querySelector('.evilPc').style.gridArea = '4 / 3 / 5 / 4';
    document.querySelector('.rock').style.display = 'none';
    document.querySelector('.scissors').style.display = 'none';
    document.querySelector('.evilPc').style.animation = 'stops';
    document.querySelector('.winOrLose').innerHTML = `${winOrLose}`;
    document.querySelector('.winOrLose').style.display = 'grid';
    document.querySelector('#playAgain').style.display = 'grid';
    const explosionDiv = document.getElementById('explosion');
    explosionDiv.style.display = 'block';

    // Start the CSS animation
    explosionDiv.style.animation = 'none'; // reset animation
    setTimeout(() => {
        explosionDiv.style.animation = '';
    }, 10);

    // Hide the explosion div after the animation ends
    explosionDiv.addEventListener('animationend', () => {
        explosionDiv.style.display = 'none';
    });
});
document.querySelector('.scissors').addEventListener('click', function () {
    rockPaperScissors('scissors');
    document.querySelector('.scissors').style.gridArea = '4 / 1 / 5 / 2';
    document.querySelector('.evilPc').style.gridArea = '4 / 3 / 5 / 4';
    document.querySelector('.rock').style.display = 'none';
    document.querySelector('.paper').style.display = 'none';
    document.querySelector('.evilPc').style.animation = 'stops';
    document.querySelector('.winOrLose').innerHTML = `${winOrLose}`;
    document.querySelector('.winOrLose').style.display = 'grid';
    document.querySelector('#playAgain').style.display = 'grid';
    const explosionDiv = document.getElementById('explosion');
    explosionDiv.style.display = 'block';

    // Start the CSS animation
    explosionDiv.style.animation = 'none'; // reset animation
    setTimeout(() => {
        explosionDiv.style.animation = '';
    }, 10);

    // Hide the explosion div after the animation ends
    explosionDiv.addEventListener('animationend', () => {
        explosionDiv.style.display = 'none';
    });
});

document.querySelector('#playAgain').addEventListener('click', function () {
    location.reload();
});

let count = 0;

function counter() {
    return console.log(count += 1)
}

function rockPaperScissors(playerChoice) {
    let computerChoice = Math.random()*10;
    if (computerChoice <= 3.33) {
        computerChoice = 'rock'
    }else if (computerChoice > 3.33 && computerChoice <= 6.66) {
        computerChoice = 'paper'
    }else {
        computerChoice = 'scissors';
    }
    console.log(computerChoice)
    console.log(playerChoice)

    if (playerChoice === computerChoice) {
        winOrLose = 'TIE!!!';
        return console.log('tie'), setTimeout(() => {
            alert(`You chose ${playerChoice} and the computer chose ${computerChoice}, it's a tie!!!`);
        }, 1000);
    }else if (playerChoice === 'rock' && computerChoice === 'paper') {
        winOrLose = 'Computer Wins!!!';
    return console.log('computer wins'), setTimeout(() => {
        alert(`You chose Rock and the computer chose ${computerChoice}, computer wins!!!`);
    }, 1000);
    }else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        winOrLose = 'Player wins!!!';
        return console.log('player wins'), setTimeout(() => {
            alert(`You chose Rock and the computer chose ${computerChoice}, player wins!!!`);
        }, 1000);
    }else if (playerChoice === 'paper' && computerChoice === 'rock') {
        winOrLose = 'Player wins!!!';
        return console.log('player wins'), setTimeout(() => {
            alert(`You chose Paper and the computer chose ${computerChoice}, player wins!!!`);
        }, 1000);
    }else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        winOrLose = 'Computer Wins!!!';
        return console.log('computer wins'), setTimeout(() => {
            alert(`You chose Paper and the computer chose ${computerChoice}, computer wins!!!`);
        }, 1000);
    }else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        winOrLose = 'Computer Wins!!!';
        return console.log('computer wins'),  setTimeout(() => {
            alert(`You chose Scissors and the computer chose ${computerChoice}, computer wins!!!`);
        }, 1000);
    }else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        winOrLose = 'Player wins!!!';
        return console.log('player wins'), setTimeout(() => {
            alert(`You chose Scissors and the computer chose ${computerChoice}, player wins!!!`);
        }, 1000);
    }
}


// alert(`You chose Scissors and the computer chose ${computerChoice}, computer wins!!!`)