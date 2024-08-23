let humanScore=0;
let computerScore=0;
function getComputerChoice(){
    let randNum=Math.round(Math.random()*2)+1;
    if(randNum===1){
        return "rock";
    }
    else if(randNum===2){
        return "paper";
    }
    else{
        return "scissor"
    }
}

function getHumanChoice(){
    let choice=prompt("enter your move");
    choice=choice.toLowerCase();
    if(choice==='rock'||choice==='paper'||choice==='scissor'){
        return choice; 
    }
    else{
        alert('please enter a vaild move');
    }
}
let humanChoice=getHumanChoice;
let compChoice=getComputerChoice;
function playRound(human,comp){
    if(human===comp){
        console.log('tie');
    }
    else if(human==='rock'&&comp==='paper'){
        console.log("you lose");
        computerScore++;
    }
    else if(human==='paper'&&comp==='scissor'){
        console.log("you lose");
        computerScore++;
    }
    else if(human==='scissor'&&comp==='rock'){
        console.log("you lose");
        computerScore++;
    }
    else if(human==='paper'&&comp==='rock'){
        console.log("you win");
        humanScore++;
    }
    else if(human==='scissor'&&comp==='paper'){
        console.log("you win");
        humanScore++;
    }
   
    else if(human==='rock'&&comp==='scissor'){
        console.log("you win");
        humanScore++;
    }
}

function playGame(){
   for(let i=0;i<=5;i++){
    playRound(humanChoice(),compChoice());
   }
}
playGame();