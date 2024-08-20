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
        pos: [posx, posy + this.largura/2],
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
      const k1 = 0.5;
      const k2 = 0.1
      const R1 = k1 * this.largura;
      const R2 =  sqrt(pow(k2 * this.largura,2) + pow(k1 * this.largura - this.w,2));
      const Theta1 = 0;
      const Theta2 = 360 - Math.atan2(k2 * this.largura, k1 * this.largura - this.w) * 180 / Math.PI;

      push();
      angleMode(DEGREES);
  
      //descarga da bomba
      translate(this.posx, this.posy);
      fill(155);
      stroke(0);
      strokeWeight(strW);

      // FLANGE DO CANO DE ENTRADA
      beginShape();
        vertex(-this.w / 2, -this.w);
        vertex(0, -this.w);
        vertex(0, this.w);
        vertex(-this.w / 2, this.w);
        vertex(-this.w / 2, -this.w);
      endShape();
      line(0, -0.75 * this.w, (0.5 * this.w) / 2, -0.75 * this.w);
      line(0, 0.75 * this.w, (0.5 * this.w) / 2, 0.75 * this.w);

       //IMPELIDOR
       push()
       translate(this.largura/2, 0)
       stroke(255)
       fill(50,50,255);
       strokeWeight(strW);
       let w_arc = 0.85 * R2;
       ellipse(0, 0,  2 * w_arc, 2 * w_arc);
       rotate(this.rot)
       const n_imp = 5;
       const angInc = 360 / n_imp;
       for(let i =0; i<n_imp;i++){
         rotate(angInc)
         arc(w_arc/2, -this.w/2,  w_arc,  this.w/2, 180, 350);
       }
       this.rot = (this.rot - 10*parseFloat(bombar.slider.value)/1880) % angInc ;
      
       pop()

      //VOLUTA
      push()
      translate(this.largura/2, 0)
      fill(155,150);
      // fill(50,50,255);
      beginShape();
      vertex(0.5 * this.largura, R2 * sin(Theta2));
      let xi, yi;
        for(let i = Theta1; i<Theta2; i+=10){
          let r = map(i, Theta1, Theta2, R1, R2);
          xi = r * cos(i);
          yi = r * sin(i);
          vertex(xi, yi);
        }
        vertex(xi, R2 * sin(Theta2));
        // vertex(0.5 * this.largura, yi);
        
      endShape();
      //CANO SAIDA
      fill(155,150)
      beginShape();
        vertex(xi, R2 * sin(Theta2));
        vertex(0.5 * this.largura - this.w, -this.altura + this.w/2);
        vertex(0.5 * this.largura, -this.altura + this.w/2);
        vertex(0.5 * this.largura, R2 * sin(Theta2));
      endShape();

      // FLANGE DO CANO DE saida
      fill(155)
      beginShape();
        vertex(0.5 * this.largura - 1.5 * this.w, -this.altura + this.w/2);
        vertex(0.5 * this.largura - 1.5 * this.w, -this.altura );
        vertex(0.5 * this.largura + 0.5 * this.w, -this.altura );
        vertex(0.5 * this.largura + 0.5 * this.w, -this.altura + this.w/2);
      endShape(CLOSE);
      line(0.5 * this.largura + 0.25 * this.w, -this.altura + 0.5 * this.w,0.5 * this.largura + 0.25 * this.w, -this.altura + 0.75 * this.w);
      line(0.5 * this.largura - 1.25 * this.w, -this.altura + 0.5 * this.w,0.5 * this.largura - 1.25 * this.w, -this.altura + 0.75 * this.w);
        
      pop()

     


      //CANO ENTRADA
      beginShape();
        vertex(this.largura / 2, -this.w / 2);
        vertex(0, -this.w / 2);
        vertex(0, this.w / 2);
        vertex(this.largura/2, this.w / 2);
      endShape();
      arc(this.largura / 2, 0, this.w, this.w, -90, 90);

      

      

      // beginShape();
      // vertex(1.5 * this.largura, 0);
      // vertex(1.5 * this.largura, -this.altura + this.w / 2);
      // vertex(1.5 * this.largura - this.w, -this.altura + this.w / 2);
      // vertex(1.5 * this.largura - this.w, 0);
      // endShape();
      // beginShape();
      // vertex(1.5 * this.largura + this.w / 2, -this.altura + this.w / 2);
      // vertex(1.5 * this.largura + this.w / 2, -this.altura);
      // vertex(1.5 * this.largura - 1.5 * this.w, -this.altura);
      // vertex(1.5 * this.largura - 1.5 * this.w, -this.altura + this.w / 2);
      // vertex(1.5 * this.largura + this.w / 2, -this.altura + this.w / 2);
      // endShape();
      // strokeWeight(strW);
  
  
      // stroke(0);
      // strokeWeight(strW);
      // // fill(230);
      // ellipse(this.largura, 0, this.altura, this.altura);
      // strokeWeight(strW - 1);
      // fill(50,50,255);
      // ellipse(this.largura, 0, 0.9 * this.altura,0.9 * this.altura);
      // // fill(0);
      // // ellipse(this.largura, 0, this.w,this.w);
      
      
      
      
      // push()
      // noFill();
      // strokeWeight(strW);
      // translate(this.largura, 0);
      // let w_arc = 0.45 * this.altura - this.w / 2;
      // rotate(this.rot)
      // const n_imp = 5;
      // const angInc = 360 / n_imp;
      // for(let i =0; i<n_imp;i++){
      //   rotate(angInc)
      //   arc(this.w / 2 + w_arc , 0, 2 * w_arc, this.w/2, 180, 270);
      // }
      // this.rot = (this.rot - 10*parseFloat(bombar.slider.value)/1880) % angInc ;
      
      // pop()
      // fill(155);
      // arc(this.largura, 0, this.w, this.w, -90, 90);
  
      
      // strokeWeight(strW);
      // line(this.w / 2, -0.75 * this.w, (1.5 * this.w) / 2, -0.75 * this.w);
      // line(this.w / 2, 0.75 * this.w, (1.5 * this.w) / 2, 0.75 * this.w);
  
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
  