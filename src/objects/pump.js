class bomba {
    constructor(posx, posy, largura, altura, w) {
      this.posx = posx;
      this.posy = posy;
      this.largura = largura;
      this.altura = altura;
      this.w = w;
      this.id = "pump"

      let {inputs, text, input, unit, slider} = createComponentInput({
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
      line(
        1.5 * this.largura + this.w / 4,
        -this.altura + this.w / 2,
        1.5 * this.largura + this.w / 4,
        -this.altura + 0.75 * this.w
      );
      line(
        1.5 * this.largura - 1.5 * this.w + this.w / 4,
        -this.altura + this.w / 2,
        1.5 * this.largura + this.w / 4 - 1.5 * this.w,
        -this.altura + 0.75 * this.w
      );
  
      stroke(0);
      strokeWeight(strW);
      fill(230);
      ellipse(this.largura, 0, this.altura, this.altura);
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
  }
  