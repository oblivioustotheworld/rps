const btn1=document.querySelector('.rock');
const btn=document.querySelector('.paper');
const btn3=document.querySelector('.sci');
const dis=document.querySelector('.display');
const p=document.createElement('p');
const p1=document.createElement('p');

btn1.addEventListener("click",(e)=>playRound('rock'));
btn.addEventListener("click",(e)=>playRound('paper'));
btn3.addEventListener("click",(e)=>playRound('scissor'));

let humanScore=0;
let computerScore=0;
let round=0;

var compChoice=getComputerChoice();
function getComputerChoice(){
    let randNum=Math.round(Math.random()*2)+1;
    if(randNum===1){
        return 'rock';
    }
    else if(randNum===2){
        return 'paper';
    }
    else{
        return 'scissor'
    }
}
function playRound(move){

    
    switch(move){
        case('rock'):{
            if(compChoice==='rock'){
                console.log('tie');
            }
            else if(compChoice==='paper'){
                console.log('lose');
                computerScore++;
            }
            else{
                console.log('winner');
                humanScore++;
            }
            break;
        }
        case('paper'):{
            if(compChoice==='paper'){
                console.log('tie');
            }
            else if(compChoice==='rock'){
                console.log('winner');
                humanScore+2;
            }
            else{
                console.log('lose');
                computerScore++;
            }
            break;
            
        }
        default:{
            if(compChoice==='paper'){
                console.log('winner');
                humanScore++;
            }
            else if(compChoice==='rock'){
                console.log('lose');
                computerScore++;
            }
            else{
               
                console.log('tie');
            }break;
         
        }
       
    }
    if(humanScore===computerScore){
        p1.textContent='TIE'
    }
    else if(humanScore>computerScore){
        p1.textContent='you are the winner'
    }
    else{
        p1.textContent='The computer is the winner'
    }
    p.textContent=`human score ${humanScore} and computer score ${computerScore}`;
  
  
}
dis.appendChild(p);
dis.appendChild(p1);