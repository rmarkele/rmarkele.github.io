class valvula {
    constructor({posx, posy, largura, w, txt, lim}) {
      this.posx = posx;
      this.posy = posy;
      this.largura = largura;
      this.w = w;
      this.txt = txt;
      this.lim = lim;

      let {div, inputs, text, input, unit, slider} = createComponentInput({
        id: "valvula1",
        label: strg.textoValvulaDescarga,
        pos: [posx, posy + 30],
        lim: [0, 360]
      })
      slider.addEventListener('input', ()=>{
        let val =
          round(map(slider.value, 0, 360, this.lim[0], this.lim[1]) * 10) /
          10;
          input.value = nf(val, 0, 1);
      })

      input.addEventListener('change', ()=>{
        let val = checkForUndefined(input.value, 50);
        input.value = nf(constrain(val, this.lim[0], this.lim[1]), 0, 1);
        slider.value = map(val, this.lim[0], this.lim[1], 0, 360);
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
  
      translate(this.posx, this.posy);
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
  
      ellipse(this.largura / 2, 0, 2 * this.w, 2 * this.w);
  
      line(this.largura / 2, 0, this.largura / 2, -2 * this.w);
  
      push();
      noFill();
  
      arc(
        this.largura / 2,
        -2 * this.w,
        2 * this.w,
        this.w,
        0 - this.slider.value,
        90 - this.slider.value,
        PIE
      );
      arc(
        this.largura / 2,
        -2 * this.w,
        2 * this.w,
        this.w,
        90 - this.slider.value,
        180 - this.slider.value,
        PIE
      );
      arc(
        this.largura / 2,
        -2 * this.w,
        2 * this.w,
        this.w,
        180 - this.slider.value,
        270 - this.slider.value,
        PIE
      );
      arc(
        this.largura / 2,
        -2 * this.w,
        2 * this.w,
        this.w,
        270 - this.slider.value,
        360 - this.slider.value,
        PIE
      );
      pop();
  
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
  
      pop();
    }
    update({posx, posy, largura, w, txt, lim}) {
      this.posx = posx??this.posx;
      this.posy = posy??this.posy;
      this.largura = largura??this.largura;
      this.w = w??this.w;
      this.txt = txt??this.txt;
      this.lim = lim??this.lim;

      this.div.style.left = `${this.posx}px`;
      this.div.style.top = `${this.posy + 30}px`;
    }

}