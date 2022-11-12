//5game
// player type rock paper or scissor
let Playerhand = SensitiveChange(prompt("your turn")) ;
// convert typein into uppercase 
function SensitiveChange(word) {
    return word.toLowerCase();
}
//computergeneratorRandom
let list = ["rock","paper","scissors"];

function randomSelection(list){    //random=0~0.99999     floor = 1.85421->1
    return list [Math.floor((Math.random()*list.length))];
}
//return to html
let Computerhand = randomSelection(list);
window.onload = function(){   //to solve https://stackoverflow.com/questions/18239430/cannot-set-property-innerhtml-of-null
    document.getElementById("player").innerHTML= SensitiveChange(Playerhand);
    document.getElementById("computer").innerHTML= Computerhand;
    }
// check typein and compare
if (Playerhand === "rock"||Playerhand ==="paper"||Playerhand ==="scissors"){      
} else {alert("wrong word");}

// compare 
switch(Playerhand) {
    case 'rock':
        if (Computerhand === 'rock'){
            alert('tie');}
            else if (Computerhand==='scissors'){
                alert('you win');
            }else{
                alert('you lose');
            };
            break;
    case 'paper':
        if (Computerhand === 'paper'){
            alert('tie');}
            else if (Computerhand==='scissors'){
                alert('you lose');
            }else{
                alert('you win');
            };
            break;
    case 'scissors':
        if (Computerhand === 'scissors'){
            alert('tie');}
            else if (Computerhand==='paper'){
                alert('you win');
            }else{
                alert('you lose');
            };
            break;
}           
//return outcome 