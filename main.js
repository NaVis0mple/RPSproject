
let btn = document.querySelector('#btn');
let Playerhand = '';
btn.addEventListener('click',(e)=>{
    document.getElementById("player").innerHTML= e.target.value;
    Playerhand = e.target.value;
    switchResult(Playerhand);

    document.getElementById('outcome').innerHTML=  switchResult(Playerhand);

});



    

function switchResult(Playerhand){
    let list = ["rock","paper","scissors"];
    function randomSelection(list) {return list [Math.floor((Math.random()*list.length))];}
    let Computerhand = randomSelection(list);
    document.getElementById("computer").innerHTML= Computerhand; 
    
switch(Playerhand) {
    
    case 'rock':
        if (Computerhand === 'rock'){
                return 'tie';}
            else if (Computerhand==='scissors'){
                return 'you win';
            }else{
                return 'you lose';
            };
    case 'paper':
        if (Computerhand === 'paper'){
            return 'tie';}
            else if (Computerhand==='scissors'){
                return 'you lose';
            }else{
                return 'you win';
            };
    case 'scissors':
        if (Computerhand === 'scissors'){
            return 'tie';}
            else if (Computerhand==='paper'){
                return 'you win';
            }else{
                return 'you lose';
            };
}
}
let result = switchResult(Playerhand) ;