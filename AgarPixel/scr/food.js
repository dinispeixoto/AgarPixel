//Functions related to the food of the game

function Food(a,b,c,d,e,f){
	this.x = a;
	this.y = b;
	this.xspeed = c;
	this.yspeed = d;
	this.scl = e;
	this.colour = f;

	this.show = function(){

		switch(this.colour) {
		    case 1: // rosa
		        fill(236,171, 177);
		        break;
		    case 2: // azul
		        fill(85, 65, 220);
		        break;
			case 3: // verde
		        fill(60, 200, 130);
		        break;
			case 4: // roxo lilás wtv
		        fill(150, 65, 155);
		        break;
	        case 5: // laranja
		        fill(230, 180, 45);
		        break;
	        case 6: // azul bebe
		        fill(130, 215, 220);
		        break;
        }
		ellipse(this.x,this.y,this.scl,this.scl);
	}

	this.update = function(){

		this.x = this.x + this.xspeed * this.scl;
		this.y = this.y + this.yspeed * this.scl;
		
		if(this.xspeed > 0){
			if(this.x + this.scl/2 >= width) this.xspeed *= -1;
		}
		else if(this.xspeed < 0){
			if(this.x - this.scl/2 <= 0) this.xspeed *= -1;		
		}

		if(this.yspeed > 0){
			if(this.y + this.scl/2 >= height) this.yspeed *= -1;
		}
		else if(this.yspeed < 0){
			if(this.y - this.scl/2 <= 0) this.yspeed *= -1;
		}	
	}

	this.draw = function(){
		this.update();
  		this.show();
	}

}
