export { DrawOutput };

/***************************************************************************************************/
/***		DrawOutput class																	                                       ***/
/***																							                                               ***/
/***		@authors : Florian BENMAHDJOUB, Etienne LECOANT										                       ***/
/***																							                                               ***/
/***		The DrawOutput class is used to draw various shapes onto the interpreter's 	 		         ***/
/***		graphic output : the canvas.														                                 ***/
/***************************************************************************************************/
   
class DrawOutput {
  constructor() {
    this.canvas = document.getElementById('draw-output');
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }
   
  /**
   * checks the types and passes the values to the DrawOutput class to draw the line
   * @param {number} x1 the position on the x axis of the line's start
   * @param {number} y1 the position on the y axis of the line's start
   * @param {number} x2 the position on the x axis of the line's end
   * @param {number} y2 the position on the y axis of the line's end
   */
  drawLine(x1, y1, x2, y2) {
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.closePath();
    this.draw(false);
  }

  /**
   * draws a square onto the canvas at the given coordonates
   * @param {number} x the position on the x axis of the square's upper left corner
   * @param {number} y the position on the y axis of the square's upper left corner
   * @param {number} size the width and height of the square
   * @param {string} color the color in which the square will be painted
   * @param {boolean} drawmode true if the square should be fully painted, false if it should only be outlined
   */
  drawSquare(x, y, size, rotation, color, drawmode) {
    this.drawRectangle(x, y, size, size, rotation, color, drawmode);
  }

  /**
   * draws a rectangle onto the canvas at the given coordonates
   * @param {number} x the position on the x axis of the rectangle's upper left corner
   * @param {number} y the position on the y axis of the rectangle's upper left corner
   * @param {number} width the width of the rectangle
   * @param {number} height the height of the rectangle
   * @param {string} color the color in which the rectangle will be painted
   * @param {boolean} drawmode true if the rectangle should be fully painted, false if it should only be outlined
   */
  drawRectangle(x, y, width, height, rotation, color, drawmode) {
    //Sets the color
    this.setColor(color); 

    //Sets the rotation
    //this.rotate(rotation);

    //Draws the path
    this.ctx.beginPath();
    this.ctx.rect(x, y, width, height); 
    this.ctx.closePath();

    //Draws the selected path
    this.draw(drawmode); 

    //Resets the color back to default 
    this.resetColor(); 
  }

  /**
   * draws a circle onto the canvas at the given coordonates
   * @param {number} x the position on the x axis of the circle's center
   * @param {number} y the position on the y axis of the circle's center
   * @param {number} radius the radius of the circle
   * @param {string} color the color in which the circle will be painted
   * @param {boolean} drawmode true if the circle should be fully painted, false if it should only be outlined
   */
  drawCircle(x, y, radius, rotation, color, drawmode) {
    //Sets the color
    this.setColor(color); 

    //Sets the rotation
    this.rotate(rotation);

    //Draws the path
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
    this.ctx.closePath();

    //Draws the selected path
    this.draw(drawmode);

    //Resets the color back to default 
    this.resetColor();
  }

  /**
   * draws a triangle onto the canvas at the given coordonates
   * @param {number} x the position on the x axis of the triangle's center
   * @param {number} y the position on the y axis of the triangle's center
   * @param {number} size the size of the triangle's sides
   * @param {string} color the color in which the triangle will be painted
   * @param {boolean} drawmode true if the triangle should be fully painted, false if it should only be outlined
   */
  drawTriangle(x, y, size, rotation, color, drawmode) {
    //Sets the color
    this.setColor(color); 

    //Sets the rotation
    this.rotate(rotation);

    //Draws the path
    this.ctx.beginPath();
    this.ctx.moveTo(x-(size/2), y+(size/2));
    this.ctx.lineTo(x, y-(size/2));
    this.ctx.lineTo(x+(size/2), y+(size/2));
    this.ctx.closePath();

    //Draws the selected path
    this.draw(drawmode);

    //Resets the color back to default 
    this.resetColor();
  }

  /**
   * clears a specific range on the canvas, given by the value passed in arguments
   * @param {string} range the area to be cleared
   */
   drawClear(range) {
    //Switch on the selected range
    switch (range) {
      case 'all': //Clears the whole canvas
        this.ctx.clearRect(0, 0, this.width, this.height);
        break;

      case 'top': //Clears the top of the canvas
        this.ctx.clearRect(0, 0, this.width, this.height/2);
        break;

      case 'bottom': //Clears the bottom of the canvas
        this.ctx.clearRect(0, this.height/2, this.width, this.height);
        break;

      case 'half-left': //Clears the left-half of the canvas
        this.ctx.clearRect(0, 0, this.width/2, this.height);
        break;

      case 'half-right': //Clears the right-half of the canvas
        this.ctx.clearRect(this.width/2, 0, this.width, this.height);
        break;

      case 'top-left': //Clears the top-left quarter of the canvas
        this.ctx.clearRect(0, 0, this.width/2, this.height/2);
        break;
          
      case 'top-right': //Clears the top-right quarter of the canvas
        this.ctx.clearRect(this.width/2, 0, this.width, this.height/2);
        break;
        
      case 'bottom-left': //Clears the bottom-left quarter of the canvas
        this.ctx.clearRect(0, this.height/2, this.width/2, this.height);
        break;
        
      case 'bottom-right': //Clears the bottom-right quarter of the canvas
        this.ctx.clearRect(this.width/2, this.height/2, this.width, this.height);
        break;        

      default: //Failsafe case, this technically should never be reached
        Error("Error: Unrecognized range to clear the canvas.");
        break;
    }
    
  }

  /**
   * clears a rectangle between the given coordonates
   * @param {number} x1 the position on the x axis of the area's start
   * @param {number} y1 the position on the y axis of the area's start
   * @param {number} x2 the position on the x axis of the area's end
   * @param {number} y2 the position on the y axis of the area's end
   */
  drawClearArea(x1, y1, x2, y2) {
    this.ctx.clearRect(x1, y1, x2, y2);
  }

  /**
   * sets the fill and stroke colors to the desired one (defaults to black)
   * @param {string} color the color to be set
   */
  setColor(color = "black") {
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = color;
  }

  /**
   * resets the fill and stroke colors back to black
   * @param {string} color the color to be set
   */
  resetColor() {
    this.ctx.strokeStyle = "black";
    this.ctx.fillStyle = "black";
  }

  /**
   * set the canvas up to rotate the next shape that is drawn
   * @param {number} angle the angle of rotation in degrees
   */
  rotate(angle) {
    this.ctx.rotate((Math.PI / 180) * angle);
  }

  /**
   * draws a previously defined shape according to the drawmode
   * @param {boolean} drawmode true if the shape should be fully painted, false if it should only be outlined 
   */
  draw(drawmode = true) {
    if (drawmode) { 
      this.ctx.fill(); 
    }
    else { 
      this.ctx.stroke(); 
    }
    this.ctx.closePath();
  }
}