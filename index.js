
function computerPlay(){
    const juego=["piedra","papel","tijera"];
    let num = Math.floor(Math.random() * 3);
    return juego[num];
} 
    // console.log(computerSelection);
    // console.log(playerSelection);
function playRound(computerSelection, playerSelection){
    if ((playerSelection === "tijera" && computerSelection === "papel")||
        (playerSelection === "papel" && computerSelection ==="piedra" )||
       (playerSelection === "piedra" && computerSelection === "tijera")){
            playerContador += 1 ;
            return "El jugador gana !! "+ playerSelection +" le gana a "+ computerSelection;   
        }
     else if ((computerSelection === "tijera" && playerSelection === "papel")||
           (computerSelection === "papel" && playerSelection === "piedra")||
           (computerSelection === "piedra" && playerSelection === "tijera")){
             computerContador  +=1;
             return  "La consola gana!! "+ computerSelection + " le gana a "+ playerSelection ;
         }
     else{
         return "Estan enpatados";
     }
    }
    function game(){
        for (let i = 0; i < 5; i++) {
            let computerSelection = computerPlay();
            let playerSelection = prompt("Elije Piedra , Papel o Tijeras").toLowerCase();
            console.log(playRound(computerSelection,playerSelection));
            console.log(playerContador);
            console.log(computerContador);
    };}
    let playerContador = 0;
    let computerContador = 0;
    game();
  
 
