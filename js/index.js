let boton = document.getElementById("burger");

let nav = document.getElementById("menu");
let con=true

function menu(){

  if (con){
    nav.style.right='0';
    con=false
  }
  else{
    nav.style.right='-100%'
    con=true
  }
  
}

boton.addEventListener('click', menu);




