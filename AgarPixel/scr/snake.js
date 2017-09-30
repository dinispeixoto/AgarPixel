function Snake(){
	this.x = scl/2;
	this.y = scl/2;
	this.size = 0;
	this.xspeed = 0;
	this.yspeed = 0;
	this.angle = 0.0;
	this.goal;

	this.up = function(){
		this.yspeed += -0.1;
	}

	this.down = function(){
		this.yspeed += 0.1;
	}

	this.right = function(){
		this.xspeed += 0.1;
	}

	this.left = function(){
		this.xspeed += -0.1;
	}

	this.eat = function(pos){
		return (dist(this.x, this.y, pos.x, pos.y ) < (scl+pos.scl)/2);
	}

	this.update = function(){

		this.x = this.x + this.xspeed * scl;
		this.y = this.y + this.yspeed * scl;
		
		if(this.x > width) this.x = 0;
		if(this.y > height) this.y = 0;
		if(this.x < 0) this.x = width;
		if(this.y < 0) this.y = height;
	}

	this.show = function(){
		fill(0,0,0);
		ellipse(this.x,this.y,scl,scl);
		switch(this.goal) {
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
		ellipse(this.x,this.y,scl-4,scl-4);
	}

	this.draw = function(){
		dx = mouseX - this.x;
		dy = mouseY - this.y;
		angle1 = atan2(dy, dx);
		this.x = mouseX - (cos(angle1) );
		this.y = mouseY - (sin(angle1) ); 
		//this.update();
		this.show();
	}
}

