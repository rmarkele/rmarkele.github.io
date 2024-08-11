class joelho {
    constructor({posx, posy, largura, w, flange1, flange2, ang}) {
      this.posx = posx;
      this.posy = posy;
      this.largura = largura;
      this.w = w;
      this.flange1 = flange1;
      this.flange2 = flange2;
      this.ang = ang;
    }
  
    show() {
      push();
      angleMode(DEGREES);
  
      translate(this.posx + this.largura, this.posy);
      rotate(this.ang);
      fill(155);
      stroke(0);
      strokeWeight(strW);
      beginShape();
      for (let i = 0; i < 90; i = i + 0.1) {
        let x = -this.largura * cos(i);
        let y = -this.largura * sin(i);
        vertex(x, y);
      }
      for (let i = 90; i > 0; i = i - 0.1) {
        let x = -(this.largura + this.w) * cos(i);
        let y = -(this.largura + this.w) * sin(i);
        vertex(x, y);
      }
      vertex(-this.largura, 0);
  
      endShape();
  
      if (this.flange1) {
        translate(-this.largura - this.w / 2, 0);
        rotate(-90);
        beginShape();
        vertex(this.w / 2, -this.w);
        vertex(0, -this.w);
        vertex(0, this.w);
        vertex(this.w / 2, this.w);
        vertex(this.w / 2, -this.w);
        endShape();
        strokeWeight(strW);
        line(this.w / 2, -0.75 * this.w, (1.5 * this.w) / 2, -0.75 * this.w);
        line(this.w / 2, 0.75 * this.w, (1.5 * this.w) / 2, 0.75 * this.w);
        rotate(90);
      }
  
      if (this.flange2) {
        strokeWeight(strW);
        translate(this.largura + this.w / 2, -this.largura - this.w / 2);
        rotate(180);
        beginShape();
        vertex(this.w / 2, -this.w);
        vertex(0, -this.w);
        vertex(0, this.w);
        vertex(this.w / 2, this.w);
        vertex(this.w / 2, -this.w);
        endShape();
        strokeWeight(strW);
        line(this.w / 2, -0.75 * this.w, (1.5 * this.w) / 2, -0.75 * this.w);
        line(this.w / 2, 0.75 * this.w, (1.5 * this.w) / 2, 0.75 * this.w);
      }
      pop();
    }
    update({posx, posy, largura, w, flange1, flange2, ang}) {
      this.posx = posx??this.posx;
      this.posy = posy??this.posy;
      this.largura = largura??this.largura;
      this.w = w??this.w;
      this.flange1 = flange1??this.flange1;
      this.flange2 = flange2??this.flange2;
      this.ang = ang??this.ang;
    }
}