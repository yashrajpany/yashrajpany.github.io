let min= 1, max = 10, winNum  = randomWiningNum(min, max), guessLeft = 3;

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');



minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown',function(e){

if (e.target.className === 'play-again'){
    window.location.reload();
}
});

guessBtn.addEventListener('click', function(){
let guess = parseInt(guessInput.value);

if(isNaN(guess) || guess < min || guess > max){
    setmessage(`Please enter a value between ${min} and ${max}`, 'red');
guessInput.style.borderColor = 'red';
}

if(guess === winNum){
    setmessage(`${winNum} is correct!, YOU WIN🥳`, 'green');
    guessInput.style.borderColor = 'green';
    guessInput.disabled = true;
    guessAgain();
}else {
    if(guess< winNum){
        setmessage(`The number is greater than ${guess}.You are left with ${guessLeft} guess left`, 'red');
        guessInput.value = " ";
        guessLeft--;
    } else {
        setmessage(`The number is less than ${guess}.You are left with ${guessLeft} guess left`, 'red');
        guessInput.value = " ";
        guessLeft--;
    }
    if(guessLeft === 0){
        guessInput.disabled = true;
        setmessage(`Game Over. The corrrect number was ${winNum}. Better luck next time.`, 'red');
        guessInput.style.borderColor = 'red';
        guessBtn.style.borderColor = 'red';
        guessAgain();
    }
}
})

function setmessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
} 

function guessAgain(){
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

function randomWiningNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}