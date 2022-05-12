player="p1";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function newGame(){

  player="p1";

  alert('Le joueur 1 commence !');

const numberp1 = document.getElementById("number-p1");
numberp1.textContent = '0';
const numberp2 = document.getElementById("number-p2");
numberp2.textContent = '0';
const scorep1 = document.getElementById("score-p1");
scorep1.textContent = '0';
const scorep2 = document.getElementById("score-p2");
scorep2.textContent = '0';

}


function RollDice(){

  
  const dice = document.getElementById("dice-pic");
  const scorep1 = document.getElementById("score-p1"); //cumul des tirs de dé
  const scorep2 = document.getElementById("score-p2"); //cumul des tirs de dé
  const numberp1 = document.getElementById("number-p1"); //score validé
  const numberp2 = document.getElementById("number-p2"); //score valide


  const random=getRandomInt(1, 7);
  if(player=="p1"){scorep1.textContent=parseInt(scorep1.textContent)+random;}
  else{if(player=="p2"){scorep2.textContent=parseInt(scorep2.textContent)+random;}}
 
  if(random==1){
    document.getElementById("dice").src="assets/dice_1.png";


    if(player=="p1"){
      scorep1.textContent="0";
      player="p2";
      alert('Vous avez tiré le chiffre 1 ! Au tour du joueur 2 !');
    }else{
      scorep2.textContent="0";
      player="p1";
      alert('Vous avez tiré le chiffre 1 ! Au tout du Joueur 1 !')
    }

    }

if(random==2){document.getElementById("dice").src="assets/dice_2.png";}
if(random==3){document.getElementById("dice").src="assets/dice_3.png";}
if(random==4){document.getElementById("dice").src="assets/dice_4.png";}
if(random==5){document.getElementById("dice").src="assets/dice_5.png";}
if(random==6){document.getElementById("dice").src="assets/dice_6.png";}

}

function Hold() {

  const numberp1 = document.getElementById("number-p1"); //score validé
  const numberp2 = document.getElementById("number-p2"); //score valide
  const scorep1 = document.getElementById("score-p1"); //cumul des tirs de dé
  const scorep2 = document.getElementById("score-p2"); //cumul des tirs de dé


  if(player=="p1")
  {
  numberp1.textContent= parseInt(numberp1.textContent) + parseInt(scorep1.textContent);
  scorep1.textContent="0";
  player="p2";
  if(parseInt(numberp1.textContent)>=100)
  {

    alert("Le joueur 1 a gagné !!!");
    newGame();
    
  }else{

  alert("Au tour du joueur 2 !");

  }

  }else{

  numberp2.textContent= parseInt(numberp2.textContent) + parseInt(scorep2.textContent);
  scorep2.textContent="0";
  player="p1";
  if(parseInt(numberp2.textContent)>=100)
  {
    alert('Le joueur 2 a gagné !!!');
    newGame();
  }else{

  alert("Au tour du joueur 1 !");
  }

  }


}

