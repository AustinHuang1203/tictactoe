


//factories and modules
const gameboard = (()=> {
    let board=[0,0,0,0,0,0,0,0,0];
    const reset = () => {board = [0,0,0,0,0,0,0,0,0];}
    const change = (x,y) => board[x] = z;

    return {
        board, reset, change
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
            document.getElementById(`gs${i}`).addEventListener("click",()=>additem(i));
    
        }
    }

    const additem = (x) => {
        gameboard.board[x] = 1;
        generate;
        console.log("hi");
    }



    return { generate, additem};

})();






//run at start
gamecontroller.generate();