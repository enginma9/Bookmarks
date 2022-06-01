window.onload = Dice_All();

function Dice_Roll(){
  let d = 1 + Math.floor(Math.random()*6);
  switch(d){
    case 1:
     out = "&#9856;";
    break;
    case 2:
     out = "&#9857;";
    break;
    case 3:
     out = "&#9858;";
    break;
    case 4:
     out = "&#9859;";
    break;
    case 5:
     out = "&#9860;";
    break;
    case 6:
     out = "&#9861;";
    break;
  }
  document.getElementById("Dice_Cube").innerHTML = out;
}

function Dice_Roll2(){
  let roll = 1 + Math.floor(Math.random()*2);
  let result = "Q";
  if(roll == 1){ result = "H";  }
  else{result = "T"; }
  document.getElementById("DoubleDice_2").innerHTML = result;
}

function Dice_Roll4(){
  let roll = 1 + Math.floor(Math.random()*4);
  document.getElementById("DoubleDice_4").innerHTML = roll;
}

function Dice_Roll6(){
  let roll = 1 + Math.floor(Math.random()*6);
  document.getElementById("DoubleDice_6").innerHTML = roll;
}

function Dice_Roll8(){
  let roll = 1 + Math.floor(Math.random()*8);
  document.getElementById("DoubleDice_8").innerHTML = roll;
}

function Dice_Roll10(){
  let roll = Math.floor(Math.random()*10);
  document.getElementById("DoubleDice_10").innerHTML = roll;
}

function Dice_Roll100(){
  let roll = 10 * Math.floor(Math.random()*10);
  document.getElementById("DoubleDice_2x10").innerHTML = roll;
}

function Dice_Roll12(){
  let roll = 1 + Math.floor(Math.random()*12);
  document.getElementById("DoubleDice_12").innerHTML =  roll;
}

function Dice_Roll20(){
  let roll = 1 + Math.floor(Math.random()*20);
  document.getElementById("DoubleDice_20").innerHTML = roll;
}

function Dice_All(){
  Dice_Roll();
  Dice_Roll2();
  Dice_Roll4();
  Dice_Roll6();
  Dice_Roll8();
  Dice_Roll10();
  Dice_Roll100();
  Dice_Roll12();
  Dice_Roll20();
}

function Change_BG(){
 document.body.style.backgroundImage = "url(Images/TileBG.jpg)";
}

function Pick_Food(){
  let d = 1 + Math.floor(Math.random()*7);
  switch(d){
    case 1:
     out = "&#127812;"
    break;
    case 2:
     out = "&#127845;"
    break;
    case 3:
     out = "&#127852;"
    break;
    case 4:
     out = "&#127860;"
    break;
    case 5:
     out = "&#127869;"
    break;
    case 6:
     out = "&#127871;"
    break;
    case 7:
     out = "&#127922;"
    break;
  }
  document.getElementById("Foodie").innerHTML = '<h1>' + out + '</h1>';
}
