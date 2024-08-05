class saidaAgua {
    constructor(posx, posy, largura, altura, w) {
      this.posx = posx;
      this.posy = posy;
      this.largura = largura;
      this.altura = altura;
      this.w = w;
    }
  
    show() {
      push();
      angleMode(DEGREES);
  
      translate(this.posx + this.largura, this.posy);
      fill(50, 50, 255);
      noStroke();
      //strokeWeight(2);
      let mult1 = random(0.95, 1.05);
      let mult2 = random(0.95, 1.105);
      beginShape();
      vertex(mult2 * (this.largura + this.w), this.altura);
      vertex(mult1 * this.largura, this.altura);
      let x;
      let y;
      for (let i = 0; i < 90; i = i + 0.1) {
        x = mult1 * this.largura * cos(i);
        y = min(-this.largura * sin(i), this.altura);
        vertex(x, y);
      }
  
      for (let i = 90; i > 0; i = i - 0.1) {
        x = mult2 * (this.largura + this.w) * cos(i);
        y = min(-(this.largura + this.w) * sin(i), this.altura);
        vertex(x, y);
      }
      //vertex(- this.largura,0);
  
      endShape();
  
      pop();
    }
  }