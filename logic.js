let btns = document.querySelectorAll('button');
let computerChoice = document.getElementById('computerChoice');
let winNumber = '';
for (item of btns) {
    item.addEventListener('click', (e) => {
        let btnText = e.target.innerText;
        //designing spinners
        let bordersColor = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light']
        computerChoice.innerHTML = `<div class="spinner-border text-${bordersColor[aiChoose(0, 8)]}" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>`
        setTimeout(() => {
            let aiChoices = ['Rock', 'Paper', 'Scissors']
            let aiChoice = aiChoices[aiChoose(0, 3)];
            computerChoice.innerText = aiChoice;
            winCondition(aiChoice, btnText);
        }, 800);
    })
}



function winCondition(aiChoice, btnText) {
    let winnerBox = document.querySelector('.winnerBox');
    if (btnText === aiChoice) {
        winnerBox.innerHTML = `<h1>It's a tie</h1>`
    }
    if (btnText === 'Rock' && aiChoice === 'Paper') {
        winnerBox.innerHTML = `<h1>You loose!</h1>`
        winNumber--;
    }
    if (btnText === 'Rock' && aiChoice === 'Scissors') {
        winnerBox.innerHTML = `<h1>You Won!</h1>`
        winNumber++;
    }

    if (btnText === 'Paper' && aiChoice === 'Rock') {
        winnerBox.innerHTML = `<h1>You Won!</h1>`
        winNumber++;
    }
    if (btnText === 'Paper' && aiChoice === 'Scissors') {
        winnerBox.innerHTML = `<h1>You loose!</h1>`
        winNumber--;
    }

    if (btnText === 'Scissors' && aiChoice === 'Rock') {
        winnerBox.innerHTML = `<h1>You loose!</h1>`
        winNumber--;
    }
    if (btnText === 'Scissors' && aiChoice === 'Paper') {
        winnerBox.innerHTML = `<h1>You Won!</h1>`
        winNumber++;
    }

    let score = document.querySelector('.score');
    score.innerText = winNumber;
}



function aiChoose(a, b) {
    let randomNumber = Math.floor(a + (b - a) * Math.random());
    return randomNumber;
}