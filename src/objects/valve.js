class valvula {
    constructor(posx, posy, largura, w, txt, offset = 0, lim, offsettxt = 0) {
      this.posx = posx;
      this.posy = posy;
      this.largura = largura;
      this.w = w;
  
      this.txt = txt;
      this.lim = lim;
  
      this.slider = createSlider(0, 360, 180, 1);
      this.slider.class("variable-slider")
      this.slider.input(() => {
        let val =
          round(map(this.slider.value(), 0, 360, this.lim[0], this.lim[1]) * 10) /
          10;
        this.inp.value(nf(val, 0, 1));
      });
  
      this.out = createP(txt);
      this.out.style("font-family", selFont);
      this.out.style("font-size", `${text_size}px`);
      this.out.style("margin: 5px 10px 5px 0; display: inline;");
  
      this.inp = createInput("");
      this.inp.size(50);
      this.inp.style("font-family", selFont);
      this.inp.style("font-size", `${text_size}px`);
      this.inp.value(
        nf(
          round(map(this.slider.value(), 0, 360, this.lim[0], this.lim[1]) * 10) /
            10
        ),
        0,
        1
      );
      this.inp.changed(() => {
        let val = checkForUndefined(this.inp.value(), 50);
        this.inp.value(nf(constrain(val, this.lim[0], this.lim[1]), 0, 1));
        this.slider.value(map(val, this.lim[0], this.lim[1], 0, 360));
      });
  
      this.div = createDiv("");
      this.div.class("component-container");
      this.div.position(this.posx, this.posy + 20);
  
      this.div2 = createDiv("");
      this.div2.class("input-container");
  
      this.div.parent("myCanvasContainer");
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
  
      translate(this.posx, this.posy);
      fill(155);
      stroke(0);
      strokeWeight(2);
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
        0 - this.slider.value(),
        90 - this.slider.value(),
        PIE
      );
      arc(
        this.largura / 2,
        -2 * this.w,
        2 * this.w,
        this.w,
        90 - this.slider.value(),
        180 - this.slider.value(),
        PIE
      );
      arc(
        this.largura / 2,
        -2 * this.w,
        2 * this.w,
        this.w,
        180 - this.slider.value(),
        270 - this.slider.value(),
        PIE
      );
      arc(
        this.largura / 2,
        -2 * this.w,
        2 * this.w,
        this.w,
        270 - this.slider.value(),
        360 - this.slider.value(),
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
      strokeWeight(3);
      line(this.w / 2, -0.75 * this.w, (1.5 * this.w) / 2, -0.75 * this.w);
      line(this.w / 2, 0.75 * this.w, (1.5 * this.w) / 2, 0.75 * this.w);
  
      strokeWeight(2);
      beginShape();
      vertex(this.largura, -this.w);
      vertex(this.largura - this.w / 2, -this.w);
      vertex(this.largura - this.w / 2, this.w);
      vertex(this.largura, this.w);
      vertex(this.largura, -this.w);
      endShape();
  
      strokeWeight(3);
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
  }