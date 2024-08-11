class saidaAgua {
    constructor({posx, posy, largura, altura, w}) {
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
      let mult1 = random(0.95, 1.1)* max(PontoOperacao.Vop/100, 0.1);
      let mult2 = random(0.95, 1.3)* max(PontoOperacao.Vop/100, 0.1);
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
    update({posx, posy, largura, altura, w}) {
      this.posx = posx??this.posx;
      this.posy = posy??this.posy;
      this.largura = largura??this.largura;
      this.altura = altura??this.altura;
      this.w = w??this.w;
    }
}