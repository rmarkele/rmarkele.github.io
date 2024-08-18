class bomba {
    constructor({posx, posy, largura, altura, w}) {
      this.posx = posx;
      this.posy = posy;
      this.largura = largura;
      this.altura = altura;
      this.w = w;
      this.rot=0;
      this.id = "pump"

      let {div, inputs, text, input, unit, slider} = createComponentInput({
        id: "bomba",
        label: strg.textoBomba,
        pos: [posx, posy + 30],
        lim: [660, 1880]
      })

      slider.addEventListener('input', ()=>{
        input.value = slider.value;
        velBomba = parseFloat(slider.value);
        Hmax = pow(velBomba / 1800, 2) * Hmax0;
        Vmax = (velBomba / 1800) * Vmax0;
      })

      input.addEventListener('change', ()=>{
        slider.value = input.value;
        velBomba = parseFloat(slider.value);
        Hmax = pow(velBomba / 1800, 2) * Hmax0;
        Vmax = (velBomba / 1800) * Vmax0;
      })

      this.div = div;
      this.inputs = inputs;
      this.text = text;
      this.input = input;
      this.unit = unit;
      this.slider = slider;

      

    }
  
    show() {
      push();
      angleMode(DEGREES);
  
      //descarga da bomba
      translate(this.posx, this.posy);
      fill(155);
      stroke(0);
      strokeWeight(strW);
      beginShape();
      vertex(1.5 * this.largura, 0);
      vertex(1.5 * this.largura, -this.altura + this.w / 2);
      vertex(1.5 * this.largura - this.w, -this.altura + this.w / 2);
      vertex(1.5 * this.largura - this.w, 0);
      endShape();
      beginShape();
      vertex(1.5 * this.largura + this.w / 2, -this.altura + this.w / 2);
      vertex(1.5 * this.largura + this.w / 2, -this.altura);
      vertex(1.5 * this.largura - 1.5 * this.w, -this.altura);
      vertex(1.5 * this.largura - 1.5 * this.w, -this.altura + this.w / 2);
      vertex(1.5 * this.largura + this.w / 2, -this.altura + this.w / 2);
      endShape();
      strokeWeight(strW);
      // line(
      //   1.5 * this.largura + this.w / 4,
      //   -this.altura + this.w / 2,
      //   1.5 * this.largura + this.w / 4,
      //   -this.altura + 0.75 * this.w
      // );
      // line(
      //   1.5 * this.largura - 1.5 * this.w + this.w / 4,
      //   -this.altura + this.w / 2,
      //   1.5 * this.largura + this.w / 4 - 1.5 * this.w,
      //   -this.altura + 0.75 * this.w
      // );
  
      stroke(0);
      strokeWeight(strW);
      // fill(230);
      ellipse(this.largura, 0, this.altura, this.altura);
      strokeWeight(strW - 1);
      fill(50,50,255);
      ellipse(this.largura, 0, 0.9 * this.altura,0.9 * this.altura);
      // fill(0);
      // ellipse(this.largura, 0, this.w,this.w);
      push()
      noFill();
      strokeWeight(strW);
      translate(this.largura, 0);
      let w_arc = 0.45 * this.altura - this.w / 2;
      rotate(this.rot)
      const n_imp = 5;
      const angInc = 360 / n_imp;
      for(let i =0; i<n_imp;i++){
        rotate(angInc)
        arc(this.w / 2 + w_arc , 0, 2 * w_arc, this.w/2, 180, 270);
      }
      this.rot = (this.rot - 10*parseFloat(bombar.slider.value)/1880) % angInc ;
      
      pop()
      fill(155);
      arc(this.largura, 0, this.w, this.w, -90, 90);
  
      beginShape();
      vertex(this.largura, -this.w / 2);
      vertex(this.w / 2, -this.w / 2);
      vertex(this.w / 2, this.w / 2);
      vertex(this.largura, this.w / 2);
      endShape();
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
  
      pop();
    }
    update({posx, posy, largura, altura, w}) {
      this.posx = posx??this.posx;
      this.posy = posy??this.posy;
      this.largura = largura??this.largura;
      this.altura = altura??this.altura;
      this.w = w??this.w;

      this.div.style.left = `${this.posx}px`;
      this.div.style.top = `${this.posy + 30}px`;
    }
}
  