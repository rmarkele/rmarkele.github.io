class sistemaAgua {
  constructor({posx, posy, largura, w, txt, lim}) {
    this.posx = posx;
    this.posy = posy;

    this.largura = largura;
    this.height = largura * 220 / 300; 
    this.w = w;
    this.txt = txt;
    this.lim = lim;

    let {div, image, inputs, text, input, unit, slider} = createComponentInput({
      img: `<img width = "${largura}px" height = "${this.height}px" alt="" src="src\\assets\\images\\city.jpeg" />`,
      id: "city",
      label: strg.textoValvulaDescarga,
      pos: [posx, posy],
      step: 1,
      lim
    })

    slider.addEventListener('input', ()=>{
        input.value = nf(slider.value, 0, 1);
    })

    input.addEventListener('change', ()=>{
      input.value = nf(constrain(val, this.lim[0], this.lim[1]), 0, 1);
      slider.value = input.value;
    })
    this.div = div;
    this.image = image;
    this.inputs = inputs;
    this.text = text;
    this.input = input;
    this.unit = unit;
    this.slider = slider;
  }
  update({posx, posy, largura, w, txt, lim}){
    this.posx = posx??this.posx;
    this.posy = posy??this.posy;
    this.largura = largura??this.largura;
    this.height = largura * 220 / 300; 
    this.w = w??this.w;
    this.txt = txt??this.txt;
    this.lim = lim??this.lim;

    this.div.style.left = `${this.posx}px`;
    this.div.style.top = `${this.posy}px`;
    this.image.style.width = `${this.largura}px`
    this.image.style.height = `${this.height}px`
  }
  
}