function drawArrow(base, vec, myColor, xoff) {
    let subBaseVec = p5.Vector.sub(vec, base);
    push();
    stroke(myColor);
    //strokeWeight(3);
    fill(myColor);
    translate(base.x, base.y);
    //text(txt,xoff,subBaseVec.mag() / 2);
    //p.ellipse(0, 0, arrowSize * 0.5);
    line(0, 0, subBaseVec.x, subBaseVec.y);
    rotate(subBaseVec.heading());
    let arrowSize = min(subBaseVec.mag() / 10, 10);
    translate(subBaseVec.mag() - arrowSize, 0);
  
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  
    rotate(180);
    translate(subBaseVec.mag() - arrowSize, 0);
    triangle(-arrowSize, arrowSize / 2, -arrowSize, -arrowSize / 2, 0, 0);
    pop();
  }