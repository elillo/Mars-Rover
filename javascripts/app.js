// Rover Object Goes Here
// ======================
var rover = {

  nombre: "MarsRover",
  position : [0,0], 
  direction: "N",
  travelLog : []

}
// ======================

var obstacles = {
  x: [6,3],
  y: [7,5]
}

/* LUNAR SURFACE: r - MARSROVER, X - OBSTACLES, 0 - EMPTY SPACE */

//   [r, X, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, X, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, X, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, X, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, X, 0, 0, 0, 0, 0, 0, 0]

   


 /* TURN TO THE LEFT */


function turnLeft(rover){
  
  switch(rover.direction){

    case "N": rover.direction = "W"; 

    break;
    
    case "E": rover.direction = "N"; 

    break;
    
    case "S": rover.direction = "E"; 
    break;
    case "W": rover.direction = "S"; 

    break;
    
    }
    console.log(`I go to the left and my position is: ${rover.position}`);

  }

 
      /* TURN TO THE RIGHT */ 

function turnRight(rover){

  switch(rover.direction){

    case "N": rover.direction = "E"; 

    break;
    
    case "E": rover.direction = "S"; 

    break;
    
    case "S": rover.direction = "W"; 

    break;
    
    case "W": rover.direction = "N"; 

    break;
  
   }
   console.log(`I go to the right and my position is: ${rover.position}`);
  }

  
     /* MOVEMENT TOWARDS AHEAD */


function moveForward(rover){

  switch(rover.direction){

    case "N": rover.position[1]--; 
      break;
    
    case "E": rover.position[0]++; 
      break;
    
    case "S": rover.position[1]++; 
      break;
    
    case "W": rover.position[0]--; 
      break;
}
 
 console.log(`I'm going forward and my position is: ${rover.position}`);

}

    /* MOVEMENT TOWARDS BACK */

  
function moveBackward(rover) {
  
  switch(rover.direction) {
    
    case 'N':
      rover.position[1]++;
     break;
    
    case 'E':
      rover.position[0]--;
     break;
    
    case 'S':
      rover.position[1]--;
     break;
    
     case 'W':
      rover.position[0]++;
     break;
  }
  console.log(`I'm going backward and my position is: ${rover.position}`)
}
         
   /*  MARSROVER MOVEMENT  */

function moveRover(moveOptions, rover) {
   
      X = rover.position[0];
      Y = rover.position[1];
      
  for (var i= 0; i<moveOptions.length;i++){
    if(validMovement(rover)==true && checkObstacles()==false){ 
       
   switch (moveOptions[i]) {
      
    case "F":
      moveForward(rover);
     break;
      
    case "B":
      moveBackward(rover);
     break;
      
    case "R":
      turnRight(rover);
     break;
      
    case "L":
      turnLeft(rover);
     break;
        
    default: console.log("The movement you are trying to make is not valid");
    } 
    
  
  }else{
  
    console.log("invalid coordinates");

   } 

  }
      /* PUSH COORDINATES IN TRAVELOG */
  rover.travelLog.push(`[${rover.position[0]},${rover.position[1]}]`)

  console.log(rover.travelLog);
} 

 
     
     /* MOVEMENT'S VALIDATION  */
 
function validMovement(rover) {
  x = rover.position[0];
  y = rover.position[1];
  
   if( (x>=0) && (x<=10) && (y>=0) && (y<=10)){
      
    return true;
    
  }

}

function checkObstacles(){
  //iterate through obstacles array to check x,y coordinates of obstacles
  for(var j = 0; j < obstacles.x.length; j++){
    //check to see if rover x,y is same as obstacle x,y. If true, you will hit obstacle.
    if(rover.position[0] === obstacles.x[j] && rover.position[1] === obstacles.y[j]){
      console.log("you are about to hit an obstacle");
      return true;
    }
  } return false;
}


   /* CALL THE FUNCTION MOVE ROVER */


     /*   List of commands: 
           
          R go to the right
          L go to the left
          F go forward
          B go back            */

/*  Write your commands between the quotes  */

/* Example  moveRover("RFFFFRFF",rover); */

moveRover("",rover);





  