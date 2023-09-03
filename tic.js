let curr='X';
let board=['','','','','','','','',''];
let won=false;
function makeMove(button){
    const index=parseInt(button.id);
    if(!board[index] && !won){
        board[index]=curr;
        button.innerText=curr;
        if(checkWin()){
            document.getElementById('result').innerText=`player ${curr} wins!`
            won=true;
        }else if(!board.includes('')){
            document.getElementById('result').innerText="It's a draw!";
            won=true;
        }else{
            curr=(curr === 'X') ? '0' :'X';
            document.getElementById('result').innerText=`player ${curr}'s Turn`;
        }
    }
}
function checkWin(){
    const winConditions=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    for(const condition of winConditions){
        const[a,b,c]=condition;
        if(board[a] && board[a] === board[b] && board[a]===board[c]){
            return true; 
        }
    }
    return false;
}
function resetGame(){
    gameBoard=['','','']
}