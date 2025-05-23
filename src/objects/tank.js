class baseTanque {
    constructor({base, altura, posx, posy}) {
      this.base = base;
      this.altura = altura;
      this.nivel = nivel;
      this.posx = posx;
      this.posy = posy;
    }
    show() {
      const w = yscale;
      push();
      angleMode(DEGREES);
      translate(this.posx, this.posy);
      noStroke();
      strokeWeight(1);
      fill(100,210);
      beginShape();
      vertex(-0.01 * this.base, 0);
      vertex(1.01 * this.base, 0);
      vertex(1.2 * this.base, this.altura);
      vertex(-0.2 * this.base, this.altura);
      vertex(-0.01 * this.base, 0);
      endShape();
      arc(base / 2, this.altura * .999 ,  1.4 * base, 20 * w, 0,180);
      pop();
    }
    update({base, altura, posx, posy}) {
      this.base = base??this.base;
      this.altura = altura??this.altura;
      this.posx = posx??this.posx;
      this.posy = posy??this.posy;
    }
  }
  
  class tanque {
    constructor({base, altura, nivel=0, posx, posy}) {
      this.base = base;
      this.altura = altura;
      this.nivel = nivel;
      this.posx = posx;
      this.posy = posy;
    }

    show() {
      const w = yscale;
      push();
      angleMode(DEGREES);
      translate(this.posx, this.posy);
      noStroke();
      strokeWeight(1);
      if(round(100 * this.nivel) /100 > 0){
        fill(50, 50, 255);
        beginShape();
        vertex(0, 0);
        vertex(0 + this.base, 0);
        vertex(0 + this.base, - this.nivel);
        vertex(0, -this.nivel);
        vertex(0, 0);
        endShape();
        arc(0 + base / 2, 0, base, 20 * w, 0, 360);
        stroke(10);
        arc(0 + base / 2, -this.nivel, base, 20 * w, 0, 360);
      } else if (PontoOperacao.Vop>0){
        fill(50,50,255);
        stroke(0);
        strokeWeight(strW);
        arc(0 + base / 2, 0, base, 20 * w, 0, 360);
        fill(100,100,255);
        arc(0 + base / 2, 0, 25*yscale, 25*yscale * 20 * w / base, 0, 360);
      } else{
        fill(155);
        stroke(0);
        strokeWeight(strW);
        arc(0 + base / 2, 0, base, 20 * w, 0, 360);
        fill(210);
        arc(0 + base / 2, 0, 25*yscale, 25*yscale * 20 * w / base, 0, 360);
      }
      pop();
  
      push();
      angleMode(DEGREES);
      stroke(0);
      strokeWeight(strW);
      noFill(0);
      translate(this.posx, this.posy);
      line(0, -this.altura, 0, 0);
      arc(0 + base / 2, 0, base, 20 * w, 0, 180);
      line(base, 0, base, -this.altura);
      arc(0 + base / 2, -this.altura, base, 20 * w, 0, 360);
      pop();
    }

    update({base, altura, nivel, posx, posy}) {
      this.base = base??this.base;
      this.altura = altura??this.altura;
      this.nivel = nivel??this.nivel;
      this.posx = posx??this.posx;
      this.posy = posy??this.posy;
    }
}