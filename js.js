console.log("check")
// player type rock paper or scissor
let Playerhand = prompt("your turn") ;
// convert typein into uppercase 
function SensitiveChange(word) {
    return word.toUpperCase();
};

//and return to the html
window.onload = function(){   //to solve https://stackoverflow.com/questions/18239430/cannot-set-property-innerhtml-of-null
document.getElementById("player").innerHTML= SensitiveChange(Playerhand) ;
}

// computer (random of r p s)

// compare 

//return outcome 