var pixel;
var scl = 30;
var food_scl;
var food_list = new Array();
var score;
var total_balls;
var max_balls = 25;
var change_colour;
var speed;
var restart;

function setup(){
	restart = 0;
	food_scl = 20;
	speed = 0.01;
	score = 0;
	total_balls = 0;
	createCanvas(1200,600);
	setupPixel();
	setupFood();
	frameRate(60);
	change_colour = 1;
	noCursor();
}

function setupPixel(){
	pixel = new Pixel();
	pixel.goal = Math.floor(Math.random() * 5) + 1;
}

function setupFood(){
	for(i=0; i < max_balls; i++){
		addRandomFood(total_balls);
		total_balls++;
	}
}

function draw(){
	var running = 1;

	if(!(score%10) && change_colour && score) updateGoal();
	background(80);

  	pixel.draw();
  	for(i=0; i<total_balls && running; i++){
	  	if(pixel.eat(food_list[i]) && food_list[i].colour != pixel.goal){
	  		change_colour = 1;
	  		score++;
			addRandomFood(i);
	  	}
	  	else if(pixel.eat(food_list[i]) && food_list[i].colour == pixel.goal){
	  		running = 0;
	  	}
 	}
 	if(running){
  		drawFood();
  		fill(255,255,255);
	  	textStyle(BOLD);
	  	textSize(20);
  		text("Score: " + score, width-120, height-20);
  	}
  	else{
  		fill(255,255,255);
  		textStyle(BOLD);
	  	textSize(20);
  		text("Score: " + score, width-120, height-20);
  		textSize(100);
  		textStyle(BOLD);
		text("GAME OVER",width/4,height/2);
		textSize(30);
		text("Press ENTER to restart.",width/4+140,height/2+80);
		noLoop();
		restart = 1;
  	}
}

function drawFood(){
	for(i=0; i<total_balls; i++)
		food_list[i].draw();
}

function updateGoal(){
	console.log("ANTIGO GOAL: " + pixel.goal);
	new_goal = Math.floor(Math.random() * 5) + 1;
	console.log("new goal: " + new_goal);
	if(new_goal == pixel.goal)
		pixel.goal = (new_goal++)%6;
	else pixel.goal = new_goal;

	if(!pixel.goal) pixel.goal = 6;
	console.log("NOVO GOAL: " + pixel.goal);
	change_colour = 0;
	speed*=1.2;
	food_scl+=5;
}

function addRandomFood(indice){
	var c = floor(random(width/scl));
	var r = floor(random(height/scl));
	var aux_x = Math.random();
	var aux_y = Math.random();
	var colour = Math.floor(Math.random() * 5) + 1;  

	if(aux_x >= 0.5) xspeed = speed;
	else xspeed = -speed;
	if(aux_y >= 0.5) yspeed = speed;
	else yspeed = -speed;

	food_list[indice] = new Food(c*scl,r*scl,xspeed,yspeed,food_scl,colour);
}


function keyPressed(){
	if(keyCode == UP_ARROW){
		pixel.up();
	}
	else if(keyCode == DOWN_ARROW){
		pixel.down();
	}
	else if(keyCode == RIGHT_ARROW){
		pixel.right();
	}
	else if(keyCode == LEFT_ARROW){
		pixel.left();
	}

	else if(keyCode == ENTER){
		if(restart){
			setup();
			loop();
		}
	}
}

function keyReleased(){
	if(keyCode == UP_ARROW){
		pixel.down();
	}
	else if(keyCode == DOWN_ARROW){
		pixel.up();
	}
	else if(keyCode == RIGHT_ARROW){
		pixel.left();
	}
	else if(keyCode == LEFT_ARROW){
		pixel.right();
	}
}

