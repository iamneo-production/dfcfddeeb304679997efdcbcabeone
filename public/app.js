// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    if(cells[index]==='' && !isGameOver()){
        cells[index] = currentPlayer;
        element.textContent=currentPlayer;
        currentPlayer= currentPlayer === 'X' ? 'O' : 'X';
        updateResult();
    }
};

const isGameOver= () => {
    for (let condition of conditions){
        const [a,b,c]=condition;
        if(cells[a] && cells[a] === cells[b] && cells[a] === cells[c]){
            result.textContent=`player ${cells[a]} wins!`;
            return true;
        }
    }
    if(cells.every(cell => cell !=='')){
        result.textContent="It's draw!";
        return true;
    }
    return false;
};
const updateResult = () =>{
    if(!isGameOver()){
        result.textContent=`Player ${currentPlayer}'s Turn`;
    }
};
const resetGame = () => {
    cells=['','','','','','','','',''];
    currentPlayer='X';
    result.textContent=`Player ${currentPlayer}'s Turn`;
    btns.forEach(btn =>{
        btn.textContent='';
        btn.disabled=false;
    });
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);
