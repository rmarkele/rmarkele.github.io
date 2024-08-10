class wattimetro {
    constructor(posx, posy, raio, min, max, pot, txt, cor, showDigital = true) {
      this.posx = posx;
      this.posy = posy;
      this.raio = raio;
      this.min = min;
      this.max = max;
      this.pot = pot;
      this.txt = txt;
      this.cor = cor;
      this.showDigital = showDigital;
    }
    show() {
      push();
      angleMode(DEGREES);
      translate(this.posx, this.posy);
      fill(240, 240, 240);
      stroke(0);
      strokeWeight(strW + 1);
      let ang1 = -210;
      let ang2 = 30;
  
      arc(0, 0, this.raio * 2, this.raio * 2, ang1, ang2);
      let xb1 = this.raio * cos(ang1);
      let xb2 = this.raio * cos(ang2);
      let yb = this.raio * sin(ang1);
      noStroke();
      triangle(xb1, yb, xb2, yb, 0, 0);
      stroke(0);
      line(xb1, yb, xb2, yb);
  
      push();
      noStroke();
  
      fill(this.cor);
      textAlign(CENTER);
      textSize(text_size - 4);
      text(this.txt[0], 0, -0.4 * this.raio);
      text(this.txt[1], 0, -0.25 * this.raio);
      if (this.showDigital) {
        rectMode(RADIUS);
        fill(255);
        rect(0, 0.25 * this.raio, 30, 10);
        fill(this.cor);
        text(nfs(this.pot, 2, 1), 0, 0.3 * this.raio);
      }
  
      pop();
  
      let i = 0;
  
      for (i = ang1 - 90; i <= ang2 - 90; i += 24) {
        push();
        rotate(i);
        line(0, 0.95 * this.raio, 0, this.raio);
  
        push();
        strokeWeight(1 * strW/2);
        fill(0);
        translate(0, 0.75 * this.raio);
        rotate(-i);
        textAlign(CENTER);
        textSize(text_size - 4);
        let txt = round(map(i, ang1 - 90, ang2 - 90, this.min, this.max));
        text(txt, 0, 0);
        pop();
  
        pop();
      }
  
      push();
      let ang = map(this.pot, this.min, this.max, ang1 - 90, ang2 - 90);
      rotate(ang);
      noStroke();
      fill(50, 50, 50);
      beginShape();
      vertex(-7, 0);
      vertex(7, 0);
      vertex(0.5, 0.9 * this.raio);
      vertex(-0.5, 0.9 * this.raio);
      vertex(-7, 0);
      endShape();
      stroke(0);
      strokeWeight(20 * strW / 2);
      point(0, 0);
      pop();
  
      pop();
    }
  }