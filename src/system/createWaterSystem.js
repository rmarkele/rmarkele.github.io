function createWaterSystem() {
    let cano1Mult = 0.62;
    let canoEntradaMult = 0.7;
    let valvula1Mult = 0.33;
    let bombaMult = yscale;
    if(canvasW > respLim[1] && canvasW <= respLim[2]){
      yscale = 0.9;
      base *= 0.8;
      bombaMult = yscale
    }else if (canvasW <= respLim[1] && canvasW > respLim[0]) {
      yscale = 0.8;
      base *= 0.5;
      cano1Mult = 0.72;
      canoEntradaMult = 0.9;
      bombaMult = yscale
    } else if (canvasW <= respLim[0]) {
      yscale = 0.4;
      base *= 0.3;
      cano1Mult = 0.78;
      canoEntradaMult = 0.87;
      bombaMult = 0.4;
      valvula1Mult = 0.4
    }
    nivel0 *= yscale;
    nivel = nivel0;
    altura *= yscale;
    hrep *= yscale;
    hsaida *= yscale;
  
    let xref = 0.1 * canvasW - base;
    yref = 550 * yscale;
  
    tanqueFont = new tanque(base, 0.5 * altura, nivel, xref, yref);
  
    baseTanqueFont = new baseTanque(base, 0.1 * altura, xref, yref);
  
    canoSaidaTanque1 = new cano(
      tanqueFont.posx + tanqueFont.base,
      tanqueFont.posy - 10,
      0.04 * canvasW,
      15 * yscale,
      0,
      1
    );
  
    bombar = new bomba(
      canoSaidaTanque1.posx + canoSaidaTanque1.largura,
      canoSaidaTanque1.posy,
      0.04 * canvasW * bombaMult,
      60 * bombaMult,
      15 * yscale
    );
    joelho1 = new joelho(
      bombar.posx + 1.5 * bombar.largura,
      bombar.posy - bombar.altura,
      25 * yscale,
      15 * yscale,
      1,
      1,
      0
    );
  
    valvula1 = new valvula(
      joelho1.posx + joelho1.largura,
      joelho1.posy - joelho1.largura - joelho1.w / 2,
      valvula1Mult * canvasW - joelho1.posx - joelho1.largura,
      15 * yscale,
      strg.textoValvulaDescarga,
      10,
      [0, 100],
      -10
    );
    
  
    cano1 = new cano(
      valvula1.posx + valvula1.largura,
      valvula1.posy,
      cano1Mult * canvasW - (valvula1.posx + valvula1.largura),
      15 * yscale,
      1,
      1
    );
    joelho2 = new joelho(
      cano1.posx + cano1.largura - 25 * yscale,
      cano1.posy - 32.5 * yscale,
      25 * yscale,
      15 * yscale,
      1,
      1,
      180
    );
  
    cano2 = new cano(
      joelho2.posx + joelho2.largura + 32.5 * yscale,
      joelho2.posy - joelho2.largura + 25 * yscale,
      joelho2.posy - (altura - nivel0 - hrep - hsaida + 15*yscale + 32.5 * yscale), 
      15 * yscale,
      1,
      1,
      -90
    );
  
    joelho3 = new joelho(
      cano2.posx + cano2.w / 2,
      altura - nivel0 - hrep - hsaida + cano2.w + 32.5 * yscale,
      25 * yscale,
      15 * yscale,
      1,
      1,
      0
    );
  
    canoEntradaTanque2 = new cano(
      joelho3.posx + joelho3.largura,
      altura - nivel0 - hrep - hsaida + joelho3.w,
      canoEntradaMult * canvasW - (joelho3.posx + joelho3.largura),
      15 * yscale,
      1,
      0
    );
  
    saidaAgua1 = new saidaAgua(
      canoEntradaTanque2.posx + canoEntradaTanque2.largura - 25*yscale,
      canoEntradaTanque2.posy + (25 + 7.5) * yscale,
      25 * yscale,
      (hsaida - 25) * yscale,
      15 * yscale
    );
  
    tanqueRep = new tanque(
      base,
      altura - nivel0 - hrep,
      nivel - nivel0 - hrep,
      canoEntradaTanque2.posx + canoEntradaTanque2.largura,
      yref - nivel0 - hrep
    );
  
    baseTanqueRep = new baseTanque(
      base,
      hrep + 50 * yscale,
      tanqueRep.posx,
      tanqueRep.posy
    );
  
    let cityPosx = tanqueRep.posx + tanqueRep.base + 40;
    let cityPosy = tanqueRep.posy - tanqueRep.altura + (0.05 + 1.4 *  0.16) * canvasW ;
    let cityW = (canvasW - cityPosx)/canvasW;
    let saidaTanqueH = cityPosy + cityW * canvasW * 0.6 - 32.5 * yscale - tanqueRep.posy;
    if (canvasW <= respLim[1] && canvasW > respLim[0]) {
      cityPosx = 0.8 * canvasW;
      cityW = 0.2;
      cityPosy = baseTanqueRep.posy + baseTanqueRep.altura + 8;
      saidaTanqueH = cityPosy - tanqueRep.posy+10;
    } else if (canvasW <= respLim[0]) {
      cityW = 0.2;
      cityPosx = 0.5 * (1 - cityW) * canvasW;
      cityPosy = cano1.posy + 2 * cano1.w;
      saidaTanqueH =
        cano1.posy + 2 * cano1.w -5 - tanqueRep.posy + (cityW / 2) * canvasW;
    }
    
    
    canoSaidaTanque2 = new cano(
      tanqueRep.posx + 0.5 * tanqueRep.base,
      tanqueRep.posy,
      saidaTanqueH,
      15 * yscale,
      0,
      1,
      90
    );

  
    let joelho4Angle = 270;
    let joelhopos = [
      canoSaidaTanque2.posx + 7.5 * yscale,
      cityPosy + cityW * canvasW * 0.6 - 32.5 * yscale
    ];
    if (canvasW <= respLim[0]) {
      joelho4Angle = 180;
      joelhopos = [
        canoSaidaTanque2.posx - (25 + 15 + 15 + 2) * yscale,
        canoSaidaTanque2.posy + canoSaidaTanque2.largura,
      ];
    }
  
    joelho4 = new joelho(
      joelhopos[0],
      joelhopos[1],
      25 * yscale,
      15 * yscale,
      1,
      1,
      joelho4Angle
    );
  
    let cano3W = cityPosx - joelho4.posx - joelho4.largura + joelho4.w;
    if (canvasW <= respLim[0]) {
      cano3W = cityPosx + cityW * canvasW + -joelho4.posx - joelho4.largura - joelho4.w;
    }
  
    cano3 = new cano(
      joelho4.posx + joelho4.largura + (canvasW>respLim[0]? 0 : - joelho4.w/2),
      joelho4.posy + joelho4.largura + joelho4.w/2,
      cano3W,
      15 * yscale,
      1,
      0,
      0
    );
  
    
  
    sistemaConsumidor = new sistemaAgua(
      strg.sistemaConsumidor,
      cityPosx,
      cityPosy,
      cityW * canvasW,
      15 * yscale,
      strg.textovazaoDemandada,
      160,
      [0, 10],
      -100
    );
  
    if(canvasW<=respLim[0]){
      document.querySelector('#myCanvasContainer').appendChild(bombar.inputs);
      document.querySelector('#myCanvasContainer').appendChild(valvula1.inputs);
      document.querySelector('#myCanvasContainer').appendChild(sistemaConsumidor.inputs);
      
      // bombar.inputs.parent("myCanvasContainer")
      // bombar.inputs.position(0, 0.7*canvasH)
      // bombar.inputs.style(`width:${canvasW}px`)
  
      // valvula1.inputs.parent("myCanvasContainer")
      // valvula1.inputs.position(0, 0.8*canvasH)
      // valvula1.inputs.style(`width:${canvasW}px`)
  
      // sistemaConsumidor.inputs.parent("myCanvasContainer")
      // sistemaConsumidor.inputs.position(0, 0.9*canvasH)
      // sistemaConsumidor.inputs.style(`width:${canvasW}px`)
    }
  }