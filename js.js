//5game
let i = 0
for (;i<5;i++){


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
function switchResult(Playerhand){
switch(Playerhand) {
    case 'rock':
        if (Computerhand === 'rock'){
            return ('tie');}
            else if (Computerhand==='scissors'){
                return ('you win');
            }else{
                return ('you lose');
            };
            break;
    case 'paper':
        if (Computerhand === 'paper'){
            return ('tie');}
            else if (Computerhand==='scissors'){
                return ('you lose');
            }else{
                return ('you win');
            };
            break;
    case 'scissors':
        if (Computerhand === 'scissors'){
            return ('tie');}
            else if (Computerhand==='paper'){
                return ('you win');
            }else{
                return ('you lose');
            };
            break;
}
}   
//grab outcome from compare function
let outcomes = switchResult(Playerhand);

//if outcomesbad
if (outcomes===undefined) {
    document.write("<p>"+"game"+(i+1)+":"+"wrongword"+"</p>")}
else {document.write("<p>"+"game"+(i+1)+":"+outcomes +"</p>")};

console.log(i);
console.log(outcomes);
}