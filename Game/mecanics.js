//General tools
const Playbutton = document.querySelector(".game");
const box = document.querySelector(".box");
const score = document.querySelector(".score");
const scoreAi = document.querySelector(".Num-ai");
const PlayerName = document.querySelector(".Name-player")
const Player = document.querySelector(".player-name")

//players tools
const rock = document.querySelector(".Rock");
const paper = document.querySelector(".Paper");
const scissor = document.querySelector(".Scissor");

//Ai tools
const rockAi = document.querySelector(".Rock-ai");
const paperAi = document.querySelector(".Paper-ai");
const scissorAi = document.querySelector(".Scissor-ai");

var enteredName;



Playbutton.addEventListener("click", logging);


function logging() {

  enteredName = window.prompt("Enter your name:");
 

  if(enteredName.length > 0){
    const startY = window.scrollY; 
    const endY = startY + 900; 
    const duration = 500; 
    const startTime = performance.now(); 
  
      function animateScroll(timestamp) {
      const elapsed = timestamp - startTime; 
      const progress = Math.min(elapsed / duration, 1); 
      const scrollValue = startY + (endY - startY) * progress; 
  
      window.scrollTo(0, scrollValue); 

      if (progress < 1) {
      window.requestAnimationFrame(animateScroll);
    }
    }
    window.requestAnimationFrame(animateScroll);
    
  }

  else if(enteredName.length === 0){
    alert("You must enter a name to play!")

  }

  Player.innerText = enteredName + "'s";
}


window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};



window.addEventListener('scroll', function() {
  const clouds = document.getElementById('clouds');
  const scrollPosition = window.scrollY || window.pageYOffset;
  const threshold = 100;

  if (scrollPosition > threshold) {
    clouds.style.display = 'none';
  } else {
    clouds.style.display = 'block';
  }
});



const Winner = document.querySelector(".Winner");
const PointAi = document.getElementById("score-value");
const PointPlayer = document.getElementById("score-player");

//Rock move
rock.addEventListener("click", () =>{


rock.style.backgroundColor = "#16e048";
paper.style.backgroundColor = "#074906";
scissor.style.backgroundColor = "#074906";

let randomizer = Math.floor(Math.random()* 3) + 1;



if(randomizer === 1){
  rockAi.style.backgroundColor = "red";
  paperAi.style.backgroundColor = "pink";
  scissorAi.style.backgroundColor = "pink";
  Winner.innerHTML = "Tie!";
}

else if(randomizer === 2){
  paperAi.style.backgroundColor = "red";
  rockAi.style.backgroundColor = "pink";
  scissorAi.style.backgroundColor = "pink";
  Winner.innerHTML = enteredName + " Lose!";
  PointAi.innerHTML = parseInt(PointAi.innerHTML) + 1;
  
  if(parseInt(PointAi.innerHTML) === 5){

    Winner.innerHTML ="Lucifer is the champion!";
    PointAi.innerHTML  = 0;
    PointPlayer.innerHTML = 0;
  }

}

else if(randomizer === 3){
  scissorAi.style.backgroundColor = "red";
  rockAi.style.backgroundColor = "pink";
  paperAi.style.backgroundColor = "pink";
  Winner.innerHTML = enteredName + " Win!";
  PointPlayer.innerHTML = parseInt(PointPlayer.innerHTML) + 1;

   if(parseInt(PointPlayer.innerHTML) === 5){
    Winner.innerHTML = enteredName + " is the champion!";
    PointAi.innerHTML = 0;
    PointPlayer.innerHTML  = 0;

    const sound = document.getElementById("Sound");
      if (sound) {
      sound.play();
      sound.currentTime = 0; 
  
  }
  confetti({
    particleCount: 250,
    spread: 100,
    origin: { y: 0.6 }
  });
     }
   }
})

//Paper move
paper.addEventListener("click", () => {

  paper.style.backgroundColor = "#16e048";
  rock.style.backgroundColor = "#074906";
  scissor.style.backgroundColor = "#074906";

  let randomizer = Math.floor(Math.random()* 3) + 1;
  
  
  if(enteredName === "" || enteredName === undefined || enteredName === NaN || enteredName === null){
    enteredName = "You";
  }

  if(randomizer === 1){
    paperAi.style.backgroundColor = "red";
    rockAi.style.backgroundColor = "pink";
    scissorAi.style.backgroundColor = "pink";
    Winner.innerHTML = "Tie!";
  }
  
  else if(randomizer === 2){
    rockAi.style.backgroundColor = "red";
    paperAi.style.backgroundColor = "pink";
    scissorAi.style.backgroundColor = "pink";
    Winner.innerHTML = enteredName + " Win!";
    PointPlayer.innerHTML = parseInt(PointPlayer.innerHTML) + 1;

    if(parseInt(PointPlayer.innerHTML)=== 5){
      Winner.innerHTML = enteredName + " is the champion!";
      PointAi.innerHTML = 0;
      PointPlayer.innerHTML  = 0;
     }
  }
  
  else if(randomizer === 3){
    scissorAi.style.backgroundColor = "red";
    paperAi.style.backgroundColor = "pink";
    rockAi.style.backgroundColor = "pink";
    Winner.innerHTML = enteredName + " Lose!";
    PointAi.innerHTML = parseInt(PointAi.innerHTML) + 1;

    if(parseInt(PointAi.innerHTML) === 5){

      Winner.innerHTML ="Lucifer is the champion!";
      PointAi.innerHTML  = 0;
      PointPlayer.innerHTML = 0;

      const sound = document.getElementById("Sound");
      if (sound) {
      sound.play();
      sound.currentTime = 0; 
  
  }
  confetti({
    particleCount: 250,
    spread: 100,
    origin: { y: 0.6 }
  });
     }
    }
  }
)


//Scissor move
  scissor.addEventListener("click", () => {

  paper.style.backgroundColor = "#074906";
  rock.style.backgroundColor = "#074906";
  scissor.style.backgroundColor = "#16e048";

  let randomizer = Math.floor(Math.random()* 3) + 1;
  
  if(enteredName === "" || enteredName === undefined || enteredName === NaN || enteredName === null){
    enteredName = "You";
  }
  
  if(randomizer === 1){
    paperAi.style.backgroundColor = "red";
    rockAi.style.backgroundColor = "pink";
    scissorAi.style.backgroundColor = "pink";
    Winner.innerHTML = enteredName + " Win!";
    PointPlayer.innerHTML = parseInt(PointPlayer.innerHTML) + 1;

    if(parseInt(PointPlayer.innerHTML) === 5){
      Winner.innerHTML = enteredName + " is the champion!";
      PointAi.innerHTML = 0;
      PointPlayer.innerHTML  = 0;

      const sound = document.getElementById("Sound");
      if (sound) {
      sound.play();
      sound.currentTime = 0; 
  
  }
  confetti({
    particleCount: 250,
    spread: 100,
    origin: { y: 0.6 }
  });
     }
  }
  
  else if(randomizer === 2){
    rockAi.style.backgroundColor = "red";
    paperAi.style.backgroundColor = "pink";
    scissorAi.style.backgroundColor = "pink";
    Winner.innerHTML = enteredName + " Lose!";
    PointAi.innerHTML = parseInt(PointAi.innerHTML) + 1;
    
    if(parseInt(PointAi.innerHTML) === 5){

      Winner.innerHTML ="Lucifer is the champion!";
      PointAi.innerHTML  = 0;
      PointPlayer.innerHTML = 0;
    }
  }
  
  else if(randomizer === 3){
    scissorAi.style.backgroundColor = "red";
    paperAi.style.backgroundColor = "pink";
    rockAi.style.backgroundColor = "pink";
    Winner.innerHTML = "Tie!";
  }

  if(enteredName === "" || enteredName === undefined || enteredName === NaN || enteredName === null){
    enteredName = "Your";
  }
})

