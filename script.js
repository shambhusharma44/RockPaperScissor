//caluclate age 
let  dateOfBirth = 1997;
var randomNumber1 = Math.floor(Math.random()*3)+1; // First Player
let computer_val;
switch(randomNumber1){
  case 1:
        computer_val="rock";
        document.querySelector(".player1").setAttribute("src","rock.jpg");
  break;

  case 2:
      computer_val="paper";
      document.querySelector(".player1").setAttribute("src","Paper.jpg");
  break;
  case 3:
        computer_val="scissor";
        document.querySelector(".player1").setAttribute("src","Scissor.jpg");
      break;
   
 }
var randomNumber2 = Math.floor(Math.random()*3) + 1; // second number
let humanResult;
switch(randomNumber2){
  case 1:
        humanResult="rock";
        document.querySelector(".player2").setAttribute("src","rock.jpg");
  break;

  case 2:
      humanResult="paper";
      document.querySelector(".player2").setAttribute("src","Paper.jpg");
  break;

  case 3:
         humanResult="scissor";
        document.querySelector(".player2").setAttribute("src","Scissor.jpg");
      break;
   
 }
//  for (val in computer_val){
//    for (ans in randomNumber2){
//      if computer_val[val]===randomNumber2[ans]{
//            document.querySelector(".result").innerHTML="Game Draw";
//      }

//    }
   
//  }
//  if ((computer_val==="rock" && randomNumber2==="paper") || (computer_val==="paper"&& randomNumber2==="scissor")) {
// document.querySelector(".result").innerHTML="Player 2 Win";
//  }
//  else if((computer_val==="paper" && randomNumber2==="rock") ||(computer_val==="rock" && randomNumber2==="scissor")){
//    document.querySelector(".result").innerHTML="Player 1 WIn";
//  }
//  else{
//    document.querySelector(".result").innerHTML="Game Draw";
//  }
let header = document.querySelector("h1");
if (computer_val ===humanResult)
{
  header.innerHTML="Game Draw";
}
else if ((computer_val==="rock")&&(humanResult==="scissor")||((computer_val==="scissor")&&(humanResult==="paper")))
{
  header.innerHTML="Player 1 Win";
}
else if (((computer_val==="rock")&&(humanResult==="paper")) ||((computer_val==="scissor")&&(humanResult==="rock")))
{
  header.innerHTML="Player 2 Win";
}

