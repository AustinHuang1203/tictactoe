


//factories and modules
const gameboard = (()=> {
    let board=[0,0,0,0,0,0,0,0,0];

    const change = (x,y) => board[x] = y;
    const reset = () => {for(let i = 0; i<9; i++){
        change(i,0);
    }}

    return {
        board, change, reset
    };

})();

const gamecontroller = (()=>{
    
    const generate = () => {
        let gameboard1 = document.getElementById("gameboard");
        gameboard1.innerHTML = "";
        for (let i = 0;i<9;i++){
            if(gameboard.board[i] === 0){
                gameboard1.innerHTML += `<div class="gamesquare" id="gs${i}"></div>`;
            } 
            else if (gameboard.board[i] === 1){
                gameboard1.innerHTML += `<div class="gamesquare" id="gs${i}">X</div>`;
            } else {
                gameboard1.innerHTML += `<div class="gamesquare" id="gs${i}">O</div>`;
            }
        
    
        }
        for (let i = 0;i<9;i++){
            document.getElementById(`gs${i}`).addEventListener("click",()=>{additem(i)});
        }
    }

    const additem = (x) => {
        if(document.getElementById(`gs${x}`).innerHTML != ""){
            return;
        }
        else if(whoseturn == 0){
            gameboard.change(x,1);
            whoseturn = 1;
        } else{
            gameboard.change(x,2);
            whoseturn = 0;
        }
        gamecontroller.generate();
    }

    let whoseturn = 0;

    const reset = () => {gameboard.reset();
        whoseturn = 0;
        gamecontroller.generate();}


    const checkwin = () => {
        

    }
    



    return { generate, additem, whoseturn, reset,checkwin};

})();






//run at start
gamecontroller.generate();

// add event listerners
const reset1 = document.getElementById("reset");
reset1.addEventListener("click",gamecontroller.reset);