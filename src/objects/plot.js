class plot {
    constructor(
      posx,
      posy,
      largura,
      altura,
      Hb,
      Hsys,
      xlim,
      ylim,
      xlabel,
      ylabel,
      xtick,
      ytick,
      PontoOperacao,
      demanda
    ) {
      this.posx = posx;
      this.posy = posy;
      this.largura = largura;
      this.altura = altura;
      this.Hb = Hb;
      this.Hsys = Hsys;
      this.xlim = xlim;
      this.ylim = ylim;
      this.xlabel = xlabel;
      this.ylabel = ylabel;
      this.xtick = xtick;
      this.ytick = ytick;
      this.PontoOperacao = PontoOperacao;
      this.demanda = demanda;
    }
    show() {
      let step = canvasW > 600 ? 1 : 2;
      let txtS = canvasW > 600 ? text_size : text_size - 2;
      let strW = canvasW > 600 ? 2 : 1;
      push();
      translate(this.posx, this.posy);
      noFill();
      stroke(0);
      strokeWeight(strW+1);
      rect(0, 0, this.largura, -this.altura);
      let xtickplot = [];
      for (var i = 0; i < this.xtick.length; i += step) {
        xtickplot[i] = map(
          this.xtick[i],
          this.xlim[0],
          this.xlim[1],
          0,
          this.largura
        );
        push();
        stroke(1, 50);
        strokeWeight(strW / 2);
        line(xtickplot[i], 0, xtickplot[i], -this.altura);
        pop();
        push();
        noStroke();
        fill(0);
        textSize(txtS)
        text(this.xtick[i], xtickplot[i] - 5, txtS + 1);
        pop();
      }
      push();
      strokeWeight(strW / 2);
      stroke(0);
      fill(0);
      text(this.xlabel, this.largura / 2, 1.8 * txtS);
      pop();
      let ytickplot = [];
      for (i = 0; i < this.ytick.length; i += step) {
        ytickplot[i] = map(
          this.ytick[i],
          this.ylim[0],
          this.ylim[1],
          0,
          -this.altura
        );
        push();
        stroke(1, 50);
        strokeWeight(strW / 2);
        line(0, ytickplot[i], this.largura, ytickplot[i]);
        pop();
        push();
        noStroke();
        fill(0);
        textAlign(RIGHT);
        textSize(txtS)
        text(this.ytick[i], -txtS + 2, ytickplot[i] + 5);
        pop();
      }
      push();
      strokeWeight(strW / 2);
      noStroke();
      fill(0);
  
      text(this.ylabel, -180, -this.altura - 20);
      pop();
  
      push();
      strokeWeight(strW);
      stroke(255, 0, 0);
      let xdataplot = [],
        ydataplot = [];
      beginShape();
  
      for (i = 0; i < this.Hsys.length; i += step) {
        xdataplot[i] = map(
          this.Hsys[i].x,
          this.xlim[0],
          this.xlim[1],
          0,
          this.largura
        );
        ydataplot[i] = map(
          this.Hsys[i].y,
          this.ylim[0],
          this.ylim[1],
          0,
          -this.altura
        );
        vertex(xdataplot[i], ydataplot[i]);
      }
  
      endShape();
      push();
      let xPonto = map(
        this.PontoOperacao.Vop,
        this.xlim[0],
        this.xlim[1],
        0,
        this.largura
      );
      let yPonto = map(
        this.PontoOperacao.Hop,
        this.ylim[0],
        this.ylim[1],
        0,
        -this.altura
      );
      let offsetarrow = canvasW <= 600 ? 20 : 0;
      let arrDist =  (10 * canvasW) / 1300;
      let lref =  canvasW > 600 ? -110 : -120;
      let space = canvasW > 600 ? 27.5 : 40;
      let Hx =((lref) * canvasW) / 1300 - offsetarrow;
  
      let Jx = ((lref + space) * canvasW) / 1300 - offsetarrow
      let Zx = ((lref + 2 * space) * canvasW) / 1300 - offsetarrow

      drawingContext.setLineDash([1, 7]);
      stroke(1, 200);
      strokeWeight(strW);
      line(Hx - arrDist, yPonto, -2*text_size, yPonto); //linha altura de carga
      line(0, yPonto, xPonto, yPonto); //linha altura de carga
  
      line(
        Zx - arrDist,
        ydataplot[0],
        -2*text_size,
        ydataplot[0]
      ); //linha altura de elevação
      line(0, ydataplot[0], tanqueRep.posx - this.posx, ydataplot[0]); //linha altura de elevação
  
      line(Hx - arrDist, 0, -2*text_size, 0); //linha base
      line(0, 0, tanqueRep.posx - this.posx, 0); //linha base
  
      line(Jx, 0, Jx, yPonto); //J
      //line(-50, ydataplot[0], -50, yPonto) //J
  
      drawingContext.setLineDash([]);
      stroke(0);
      let base, vec;
  
      // Z
      line(
        Zx - arrDist,
        ydataplot[0],
        Zx + arrDist,
        ydataplot[0]
      );
      if (ydataplot[0] < 0) {
        base = createVector(Zx, ydataplot[0]);
        vec = createVector(Zx, 0);
        drawArrow(base, vec, [0], 10);
      }
      line(Zx - arrDist, 0, Zx + arrDist, 0);
  
      //  J
      if (yPonto < ydataplot[0]) {
        line(
          Jx - arrDist,
          yPonto,
          Jx + arrDist,
          yPonto
        );
        base = createVector(Jx, yPonto);
        vec = createVector(Jx, ydataplot[0]);
        drawArrow(base, vec, [0], 10);
        line(
          Jx - arrDist,
          ydataplot[0],
          Jx + arrDist,
          ydataplot[0]
        );
      }
  
      // H
      line(
        Hx - arrDist,
        yPonto,
        Hx + arrDist,
        yPonto
      );
      if (yPonto < 0) {
        base = createVector(Hx, yPonto);
        vec = createVector(Hx, 0);
        drawArrow(base, vec, [0], -15);
      }
      line(Hx - arrDist, 0, Hx + arrDist, 0);
  
      push();
      strokeWeight(strW / 2);
      fill(0);
      textAlign(CENTER);
      textSize(txtS);
      textFont(selFont);
      text(strg.alturasRep[0][0], Hx, text_size + 2);
      text(strg.alturasRep[1][0], Jx, text_size + 2);
      text(strg.alturasRep[2][0], Zx, text_size + 2);
      pop();
  
      strokeWeight(strW * 5);
      push();
      stroke(0, 255, 0);
      let xDemanda = map(
        this.demanda.Vdemanda,
        this.xlim[0],
        this.xlim[1],
        0,
        this.largura
      );
      let yDemanda = map(
        this.demanda.Hdemanda,
        this.ylim[0],
        this.ylim[1],
        0,
        -this.altura
      );
  
      point(xDemanda, yDemanda);
      pop();
  
      point(xPonto, yPonto);
  
      pop();
  
      xdataplot = [];
      ydataplot = [];
      stroke(0);
      beginShape();
      for (i = 0; i < this.Hb.length; i++) {
        xdataplot[i] = map(
          this.Hb[i].x,
          this.xlim[0],
          this.xlim[1],
          0,
          this.largura
        );
        ydataplot[i] = map(
          this.Hb[i].y,
          this.ylim[0],
          this.ylim[1],
          0,
          -this.altura
        );
        vertex(xdataplot[i], ydataplot[i]);
      }
      endShape();
      pop();
  
      pop();
    }
  }