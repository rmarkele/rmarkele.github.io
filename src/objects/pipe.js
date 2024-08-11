class cano {
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
      translate(this.posx, this.posy);
      if (this.ang) {
        rotate(this.ang);
      }
  
      fill(155);
      stroke(0);
      strokeWeight(strW);
      beginShape();
      vertex(0, -this.w / 2);
      vertex(this.largura, -this.w / 2);
      vertex(this.largura, this.w / 2);
      vertex(0, this.w / 2);
      vertex(0, -this.w / 2);
      endShape();
  
      if (this.flange1) {
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
  
      if (this.flange2) {
        strokeWeight(strW);
        beginShape();
        vertex(this.largura, -this.w);
        vertex(this.largura - this.w / 2, -this.w);
        vertex(this.largura - this.w / 2, this.w);
        vertex(this.largura, this.w);
        vertex(this.largura, -this.w);
        endShape();
  
        strokeWeight(strW);
        line(
          this.largura - this.w / 2,
          -0.75 * this.w,
          this.largura - 0.75 * this.w,
          -0.75 * this.w
        );
        line(
          this.largura - this.w / 2,
          0.75 * this.w,
          this.largura - 0.75 * this.w,
          0.75 * this.w
        );
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