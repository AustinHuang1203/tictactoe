


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
                gameboard1.innerHTML += `<div class="gamesquare1" id="gs${i}">O</div>`;
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
        let checkc = true;
        for (let i = 0; i<9; i++){
            if (checkb[i] == 0){
                checkc = false;
            }
        }
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
            document.getElementById("banner1").innerHTML="X wins!"
            console1.open();
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
            document.getElementById("banner1").innerHTML="O wins!"
            console1.open();
        }
        else if (
            checkc
        ) {
            document.getElementById("banner1").innerHTML="Draw!"
            console1.open();
        }

    }
    



    return { generate, additem, reset,checkwin};

})();


const console1 = (() => {


    const close = () => {
        document.getElementById("indicator").style.visibility = "hidden";
        document.getElementById("background1").style.visibility = "hidden";
        gamecontroller.reset();
    }

    const open = () => {
        document.getElementById("indicator").style.visibility = "visible";
        document.getElementById("background1").style.visibility = "visible";
    }


    return { close, open };

})();






//run at start
gamecontroller.generate();

// add event listerners
const reset1 = document.getElementById("reset");
reset1.addEventListener("click",gamecontroller.reset);
document.getElementById("background1").addEventListener("click",console1.close);