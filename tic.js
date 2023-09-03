let curr='X';
let board=['','','','','','','','',''];
let won=false;
function makeMove(button){
    const index=parseInt(button.id);
    if(!board[index] && !won){
        board[index]=curr;
        button.innerText=curr;
        if(checkWin()){
            document.getElementById('result').innerText='player ${curr} wins!'
            won=true;
        }else if(!board.includes('')){
            document.getElementById('result').innerText="It's a draw!";
            won=true;
        }else{
            curr=(curr === 'X') ? '0' :'X';
            document.getElementById('result').innerText='player ${curr}'s Turn'
        }
    }
}