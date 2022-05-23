export { DrawOutput };

class DrawOutput {
  constructor() {
    this.canvas = document.getElementById('draw-output');
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  drawLine(x1, y1, x2, y2) {
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.closePath();
    this.ctx.stroke();
  }
  
  drawSquare(x1, y1, size) {
    this.drawRectangle(x1, y1, size, size);
  }

  drawRectangle(x1, y1, width, height) {
    this.ctx.fillRect(x1, y1, width, height);
  }

  drawCircle(x, y, radius) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  drawTriangle(x, y, size) {
    this.ctx.beginPath();
    this.ctx.moveTo(x-(size/2), y+(size/2));
    this.ctx.lineTo(x, y-(size/2));
    this.ctx.lineTo(x+(size/2), y+(size/2));
    this.ctx.closePath();
    this.ctx.stroke();
  }
}