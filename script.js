const btns = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset-btn");
const newBtn = document.querySelector(".new-btn");
const msgBox = document.querySelector(".msg-box");
const winMsg = document.querySelector("#winner-msg") ;

console.dir(msgBox) ;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let turn = true ; // turn true for O and false for X

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if(turn){
        btn.innerText = "X" ;
        turn = false ;   
    }
    else{
        btn.innerText = "O" ;
        turn = true ;
    }
    btn.disabled = true ;
    checkWinner() ;
  });
});

const reset = () =>{
    btns.forEach((btn) =>{
        btn.innerText = "" ;
    });
    enableBtns() ;
    turn = true ;
    msgBox.style.display = "none" ;
    resetBtn.style.display = "block" ;

}

const newGame = () => {
    
    reset() ;
}

const disableBtns = () => {
    for(let btn of btns){
        btn.disabled = true
    }
};
const enableBtns = () => {
    for(let btn of btns){
        btn.disabled = false;
    }
};

const showWinner = (winner) => {
    winMsg.innerText = `Congratulations Winner is ${winner}` ;
    msgBox.style.display = "block" ;
    disableBtns() ;
    resetBtn.style.display = "none" ;
    // msgBox.classList.remove("hide") ;
};

const checkWinner = () =>{
    for(pattern of winPatterns){
        
        // console.log(pattern[0] , pattern[1] , pattern[2]);
        // console.log(btns[pattern[0]] ,btns[pattern[2]],btns[pattern[2]]);
        
        let pos1Val = btns[pattern[0]].innerText ;
        let pos2Val = btns[pattern[1]].innerText ;
        let pos3Val = btns[pattern[2]].innerText ;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val) ;
            }
        }
    }
};

resetBtn.addEventListener("click", ()=> {
    reset();   
} );

newBtn.addEventListener("click", ()=> {
    reset();   
} );
