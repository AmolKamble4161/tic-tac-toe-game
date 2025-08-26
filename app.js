let boxes = document.querySelectorAll('.box');
let resetBtn = document.getElementById('resetBtn');
let trunX = true; // player-1 : x ; player-2 : 0;
let newGameBtn = document.getElementById('newGameBtn');
let msgContainer = document.querySelector('.msg-container');
let msgP = document.getElementById('msg');

let winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(trunX){
            box.innerText = 'X';
            trunX = false;
            box.classList.add("ex");
            
        }else{
            box.innerText = 'O';
            trunX = true;
            box.classList.add("zero");
        }

        box.disabled = true;
        checkWinner();
    })
});

const checkWinner = () => {
    for(let pattern of winningPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                boxes[pattern[0]].classList.add('winBlink');
                boxes[pattern[1]].classList.add('winBlink');
                boxes[pattern[2]].classList.add('winBlink');
            }
        }
    }
}

const showWinner = (winner) => {
    msgP.innerText = `Congratulation! Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
}

const resetGame = () => {
    trunX = true;
    enableBoxes();
    msgContainer.classList.add('hide');
    boxes.forEach((box) => {
        box.classList.remove('zero');
        box.classList.remove('ex');
        box.classList.remove('winBlink');
    });
}

resetBtn.addEventListener('click', resetGame);

newGameBtn.addEventListener('click', resetGame);
