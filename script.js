let tds = document.getElementsByClassName("td");

let text = document.getElementById("text");

let x = document.getElementById("x");

let o = document.getElementById("o");

let currentPlayer = "X";

x.textContent = 0

o.textContent = 0

for (let td of tds)
    {
        td.addEventListener("click", () => {
        if (td.textContent === "") {
            td.textContent = currentPlayer;
        }
        
        let winner = checkWin(td.textContent);
        
        if (winner)
        {
            text.textContent = `Player ${currentPlayer} wins!`;

            if (currentPlayer === "X")
            {
                x.textContent = parseInt(x.textContent) + 1
            }
            else if (currentPlayer === "o")
            {
                o.textContent = parseInt(o.textContent) + 1
            }
            currentPlayer = "";
            setTimeout(() => {
                resetGame();
            }, 1500);
        } 
        else {
            currentPlayer = (currentPlayer === "X") ? "O" : "X";
        }  
})}
    
   
    
function checkWin(player) {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
        
    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (tds[a].textContent === player && tds[b].textContent === player && tds[c].textContent === player) {
            return true;
        }
    }
        
    return false;
}
    

function resetGame() {
    for (let td of tds) {
        td.textContent = "";
    }
    currentPlayer = "X";
    text.textContent = "";
}
    
    
 