class sistemaAgua {
    constructor(
      label,
      posx,
      posy,
      largura,
      w,
      txt,
      offset = 0,
      lim,
      offsettxt = 0
    ) {
      this.posx = posx;
      this.posy = posy;
  
      this.label = createDiv(
        '<img alt="" src="src\\assets\\images\\city.jpeg" />'
      );
      this.label.class("cityimg");
      this.label.style(`border: none; padding: 0; width:${largura}px`);
  
      this.largura = largura;
      this.w = w;
      this.txt = txt;
      this.lim = lim;
      this.slider = createSlider(0, 360, 180, 1);
      // this.slider.size(this.largura);
  
      this.slider.input(() => {
        let val =
          round(map(this.slider.value(), 0, 360, this.lim[0], this.lim[1]) * 10) /
          10;
        this.inp.value(nf(val, 0, 1));
      });
  
      this.out = createP(txt);
      this.out.style("font-family", selFont);
      this.out.style("margin: 5px 10px 5px 0;");
      this.out.style(`font-size: ${text_size}px; display: inline;`);
  
      this.inp = createInput("");
      this.inp.size(40);
      this.inp.style("font-family", selFont);
      this.inp.style("font-size", `${text_size}px`);
      this.inp.value(
        nf(
          round(map(this.slider.value(), 0, 360, this.lim[0], this.lim[1]) * 10) /
            10,
          0,
          1
        )
      );
      this.inp.changed(() => {
        let val = checkForUndefined(this.inp.value(), 50);
        this.inp.value(nf(constrain(val, this.lim[0], this.lim[1]), 0, 1));
        this.slider.value(map(val, this.lim[0], this.lim[1], 0, 360));
      });
  
      this.div = createDiv("");
      this.div.class("component-container");
      this.div.position(this.posx, this.posy);
      this.label.parent(this.div);
  
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
  
  }