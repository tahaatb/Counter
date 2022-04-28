let increment = document.querySelector(".add");
let reset = document.querySelector(".reset");
let numberCount = document.querySelector(".number-count");
let integer = 0;


increment.onclick = function(){
    integer += 1;
    
    numberCount.innerHTML = integer; 
};

reset.onclick = function(){
    integer = 0;
    numberCount.innerHTML = '0'; 
};