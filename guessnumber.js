let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber=Math.ceil(Math.random()*100);
function checkGuess() {
 let guesseNumber=parseInt(userInput.value);
 if(guesseNumber>randomNumber){
     gameResult.textContent="Too High, Try Again";
     gameResult.style.backgroundColor="#1e217c"
 }
 else if(guesseNumber<randomNumber){
     gameResult.textContent="Too Low, Try Again";
     gameResult.style.backgroundColor="#1e217c"
 }
 else if(guesseNumber===randomNumber){
     gameResult.textContent="Conguralations";
     gameResult.style.backgroundColor="green";
 }
}