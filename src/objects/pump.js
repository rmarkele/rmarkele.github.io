class bomba {
    constructor(posx, posy, largura, altura, w) {
      this.posx = posx;
      this.posy = posy;
      this.largura = largura;
      this.altura = altura;
      this.w = w;
  
      this.out = createP(strg.textoBomba);
      this.out.style("font-family", selFont);
      this.out.style("font-size", `${text_size}px`);
      this.out.style("margin: 5px 10px 5px 0; display: inline;");
  
      this.slider = createSlider(600, 1880, 1800, 1);
      this.slider.class("variable-slider")
      this.slider.input(() => {
        this.inp.value(this.slider.value());
      });
  
      this.inp = createInput("");
      this.inp.size(50);
      this.inp.style("font-family", selFont);
      this.inp.style("font-size", `${text_size}px`);
      this.inp.value(this.slider.value());
      this.inp.changed(() => {
        let val = checkForUndefined(this.inp.value(), 600);
        this.inp.value(constrain(val, 600, 1880));
        this.slider.value(val);
      });
  
      this.div = createDiv("");
      this.div.class("component-container");
      this.div.position(this.posx, this.posy + 22);
      this.div.parent("myCanvasContainer");
  
      this.div2 = createDiv("");
      this.div2.class("input-container");
  
      this.inputs = createDiv("");
      this.div2.parent(this.inputs);
      this.out.parent(this.div2);
      this.inp.parent(this.div2);
      this.inputs.child(this.slider);
      this.inputs.parent(this.div);
  
      this.slider.style("width: 100%;");
    }
  
    show() {
      push();
      angleMode(DEGREES);
  
      //descarga da bomba
      translate(this.posx, this.posy);
      fill(155);
      stroke(0);
      strokeWeight(2);
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
      strokeWeight(3);
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
      strokeWeight(2);
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
      strokeWeight(3);
      line(this.w / 2, -0.75 * this.w, (1.5 * this.w) / 2, -0.75 * this.w);
      line(this.w / 2, 0.75 * this.w, (1.5 * this.w) / 2, 0.75 * this.w);
  
      pop();
    }
  }
  