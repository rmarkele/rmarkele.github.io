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
      this.w = w;
      this.txt = txt;
      this.lim = lim;

      let {inputs, text, input, unit, slider} = createComponentInput({
        img: `<img class = "cityimg" width = "${largura}px" alt="" src="src\\assets\\images\\city.jpeg" />`,
        id: "city",
        label: strg.textoValvulaDescarga,
        pos: [posx, posy],
        lim
      })

      slider.addEventListener('input', ()=>{
          input.value = nf(slider.value, 0, 1);
      })

      input.addEventListener('change', ()=>{
        input.value = nf(constrain(val, this.lim[0], this.lim[1]), 0, 1);
        slider.value = input.value;
      })


      this.inputs = inputs;
      this.text = text;
      this.input = input;
      this.unit = unit;
      this.slider = slider;
    }
  
  }