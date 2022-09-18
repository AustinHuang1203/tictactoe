


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
        checkwin();
    }

    let whoseturn = 0;

    const reset = () => {gameboard.reset();
        whoseturn = 0;
        gamecontroller.generate();}


    const checkwin = () => {
        let checkb = gameboard.board;
        console.log(checkb.slice(0,3))
        if(
            checkb[0] == 1 && checkb[1] == 1 && checkb[2] == 1 ||
            checkb[3] == 1 && checkb[4] == 1 && checkb[5] == 1 ||
            checkb[6] == 1 && checkb[7] == 1 && checkb[8] == 1 ||
            checkb[0] == 1 && checkb[3] == 1 && checkb[6] == 1 ||
            checkb[1] == 1 && checkb[4] == 1 && checkb[7] == 1 ||
            checkb[2] == 1 && checkb[5] == 1 && checkb[8] == 1 ||
            checkb[0] == 1 && checkb[4] == 1 && checkb[8] == 1 ||
            checkb[2] == 1 && checkb[4] == 1 && checkb[6] == 1 
        ){
            console.log("x win");
        }
        else if (
            checkb[0] == 2 && checkb[1] == 2 && checkb[2] == 2 ||
            checkb[3] == 2 && checkb[4] == 2 && checkb[5] == 2 ||
            checkb[6] == 2 && checkb[7] == 2 && checkb[8] == 2 ||
            checkb[0] == 2 && checkb[3] == 2 && checkb[6] == 2 ||
            checkb[1] == 2 && checkb[4] == 2 && checkb[7] == 2 ||
            checkb[2] == 2 && checkb[5] == 2 && checkb[8] == 2 ||
            checkb[0] == 2 && checkb[4] == 2 && checkb[8] == 2 ||
            checkb[2] == 2 && checkb[4] == 2 && checkb[6] == 2 
        ) {
            console.log("O win");
        }

    }
    



    return { generate, additem, whoseturn, reset,checkwin};

})();






//run at start
gamecontroller.generate();

// add event listerners
const reset1 = document.getElementById("reset");
reset1.addEventListener("click",gamecontroller.reset);