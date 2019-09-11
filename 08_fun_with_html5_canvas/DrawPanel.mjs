class DrawPanel {
  constructor(canvas) {
    const context = canvas.getContext('2d');
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.lineWidth = 100;

    this.canvas = canvas;
    this.context = context;

    this.isDrawing = false;
    this.lastX = 0;
    this.lastY = 0;
    this.hue = 0;
    this.isDirection = true;

    this.draw = this.draw.bind(this);
    this.beginDraw = this.beginDraw.bind(this);
    this.endDraw = this.endDraw.bind(this);
  }

  draw({ offsetX, offsetY }) {
    if (!this.isDrawing) return;

    this.context.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
    this.context.beginPath();
    this.context.moveTo(this.lastX, this.lastY);
    this.context.lineTo(offsetX, offsetY);
    this.context.stroke();

    [this.lastX, this.lastY] = [offsetX, offsetY];
    this.hue = this.hue >= 360 ? 0 : this.hue + 1;
    this.isDirection =
      this.context.lineWidth >= 100 || this.context.lineWidth <= 1
        ? !this.isDirection
        : this.isDirection;
    this.context.lineWidth = this.isDirection
      ? this.context.lineWidth + 1
      : this.context.lineWidth - 1;
  }

  beginDraw({ offsetX, offsetY }) {
    this.isDrawing = true;
    [this.lastX, this.lastY] = [offsetX, offsetY];
  }

  endDraw() {
    this.isDrawing = false;
  }

  init() {
    this.canvas.addEventListener('mousemove', this.draw);
    this.canvas.addEventListener('mousedown', this.beginDraw);
    this.canvas.addEventListener('mouseup', this.endDraw);
    this.canvas.addEventListener('mouseout', this.endDraw);
  }

  destroy() {
    this.canvas.removeEventListener('mousemove', this.draw);
    this.canvas.removeEventListener('mousedown', this.beginDraw);
    this.canvas.removeEventListener('mouseup', this.endDraw);
    this.canvas.removeEventListener('mouseout', this.endDraw);
  }
}

export default DrawPanel;
