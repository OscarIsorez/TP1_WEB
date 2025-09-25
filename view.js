Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    console.log("Rectangle paint")
    ctx.beginPath();
    ctx.rect(this.originX, this.originY, this.width, this.height)
    // ctx.rect(initX,initY,finalX,finalY);
    // ctx.stroke();
    
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {
    console.log("Line paint")
    //TODO Manager color
    ctx.beginPath();
    ctx.moveTo(this.originX, this.originY);
    ctx.lineTo(this.finalX, this.finalY);
    ctx.stroke();
  };    
  
  Drawing.prototype.paint = function(ctx, canvas) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.shapes.forEach(function(eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });
  };
  