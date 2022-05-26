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
    this.ctx.stroke();
  }

  /**
   * draws a square onto the canvas at the given coordonates
   * @param {number} x the position on the x axis of the square's upper left corner
   * @param {number} y the position on the y axis of the square's upper left corner
   * @param {number} size the width and height of the square
   */
  drawSquare(x, y, size) {
    this.drawRectangle(x, y, size, size);
  }

  /**
   * draws a rectangle onto the canvas at the given coordonates
   * @param {number} x the position on the x axis of the rectangle's upper left corner
   * @param {number} y the position on the y axis of the rectangle's upper left corner
   * @param {number} width the width of the rectangle
   * @param {number} height the height of the rectangle
   */
  drawRectangle(x, y, width, height) {
    this.ctx.fillRect(x, y, width, height);
  }

  /**
   * draws a circle onto the canvas at the given coordonates
   * @param {number} x the position on the x axis of the circle's center
   * @param {number} y the position on the y axis of the circle's center
   * @param {number} radius the radius of the circle
   */
  drawCircle(x, y, radius) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
    this.ctx.closePath();
    this.ctx.fill();
  }

  /**
   * draws a triangle onto the canvas at the given coordonates
   * @param {number} x the position on the x axis of the triangle's center
   * @param {number} y the position on the y axis of the triangle's center
   * @param {number} size the size of the triangle's sides
   */
  drawTriangle(x, y, size) {
    this.ctx.beginPath();
    this.ctx.moveTo(x-(size/2), y+(size/2));
    this.ctx.lineTo(x, y-(size/2));
    this.ctx.lineTo(x+(size/2), y+(size/2));
    this.ctx.closePath();
    this.ctx.fill();
  }

  /**
   * draws a triangle onto the canvas at the given coordonates
   * @param {rangeToClear} x the position on the x axis of the triangle's center
   */
   drawClear(range) {
    switch (range) {
      case 'all':
        this.ctx.clearRect(0, 0, this.width, this.height);
        break;

      case 'top':
        this.ctx.clearRect(0, 0, this.width, this.height/2);
        break;

      case 'bottom':
        this.ctx.clearRect(0, this.height/2, this.width, this.height);
        break;

      case 'half-left':
        this.ctx.clearRect(0, 0, this.width/2, this.height);
        break;

      case 'half-right':
        this.ctx.clearRect(this.width/2, 0, this.width, this.height);
        break;

      case 'top-left':
        this.ctx.clearRect(0, 0, this.width/2, this.height/2);
        break;
          
      case 'top-right':
        this.ctx.clearRect(this.width/2, 0, this.width, this.height/2);
        break;
        
      case 'bottom-left':
        this.ctx.clearRect(0, this.height/2, this.width/2, this.height);
        break;
        
      case 'bottom-right':
        this.ctx.clearRect(this.width/2, this.height/2, this.width, this.height);
        break;        

      default:
        break;
    }
    
  }
}