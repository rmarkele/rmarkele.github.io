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
  
      this.largura = largura;
      this.height = largura * 220 / 300; 
      this.w = w;
      this.txt = txt;
      this.lim = lim;

      let {div, inputs, text, input, unit, slider} = createComponentInput({
        img: `<img width = "${largura}px" height = "${this.height}px" alt="" src="src\\assets\\images\\city.jpeg" />`,
        id: "city",
        label: strg.textoValvulaDescarga,
        pos: [posx, posy],
        step: 0.1,
        lim
      })

      slider.addEventListener('input', ()=>{
          input.value = nf(slider.value, 0, 1);
      })

      input.addEventListener('change', ()=>{
        input.value = nf(constrain(val, this.lim[0], this.lim[1]), 0, 1);
        slider.value = input.value;
      })
      this.div = div
      this.inputs = inputs;
      this.text = text;
      this.input = input;
      this.unit = unit;
      this.slider = slider;
    }
  
  }