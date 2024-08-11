const Params = {}; 
function getSystemParams() {
    base = 100;
    yscale=1;
    altura = 530;
    nivel0 = 180;
    nivel = nivel0;
    
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
  
    Params.tanqueFont = {
      base: base, 
      altura: 0.5 * altura, 
      nivel: nivel, 
      posx: xref, 
      posy: yref
    };
  
    Params.baseTanqueFont = {
      base: base, 
      altura: 0.1 * altura, 
      posx: xref, 
      posy: yref
    };
  
    Params.canoSaidaTanque1 = {
      posx: Params.tanqueFont.posx + Params.tanqueFont.base,
      posy: Params.tanqueFont.posy - 10,
      largura: 0.04 * canvasW,
      w: 15 * yscale,
      flange1: 0,
      flange2: 1
    };
  
    Params.bombar = {
      posx: Params.canoSaidaTanque1.posx + Params.canoSaidaTanque1.largura,
      posy: Params.canoSaidaTanque1.posy,
      largura: 0.04 * canvasW * bombaMult,
      altura: 60 * bombaMult,
      w: 15 * yscale
    };
    Params.joelho1 = {
      posx: Params.bombar.posx + 1.5 * Params.bombar.largura,
      posy: Params.bombar.posy - Params.bombar.altura,
      largura: 25 * yscale,
      w: 15 * yscale,
      flange1: 1,
      flange2: 1,
      ang: 0
    };
  
    Params.valvula1 = {
      posx: Params.joelho1.posx + Params.joelho1.largura,
      posy: Params.joelho1.posy - Params.joelho1.largura - Params.joelho1.w / 2,
      largura: valvula1Mult * canvasW - Params.joelho1.posx - Params.joelho1.largura,
      w: 15 * yscale,
      txt: strg.textoValvulaDescarga,
      lim: [0, 100],
    };
  
    Params.cano1 = {
      posx: Params.valvula1.posx + Params.valvula1.largura,
      posy: Params.valvula1.posy,
      largura: cano1Mult * canvasW - (Params.valvula1.posx + Params.valvula1.largura),
      w: 15 * yscale,
      flange1: 1,
      flange2: 1
    };
    Params.joelho2 = {
      posx: Params.cano1.posx + Params.cano1.largura - 25 * yscale,
      posy: Params.cano1.posy - 32.5 * yscale,
      largura: 25 * yscale,
      w: 15 * yscale,
      flange1: 1,
      flange2: 1,
      ang: 180
    };
  
    Params.cano2 = {
      posx: Params.joelho2.posx + Params.joelho2.largura + 32.5 * yscale,
      posy: Params.joelho2.posy - Params.joelho2.largura + 25 * yscale,
      largura: Params.joelho2.posy - (altura - nivel0 - hrep - hsaida + 15*yscale + 32.5 * yscale), 
      w: 15 * yscale,
      flange1: 1,
      flange2: 1,
      ang: -90
    };
  
    Params.joelho3 = {
      posx: Params.cano2.posx + Params.cano2.w / 2,
      posy: altura - nivel0 - hrep - hsaida + Params.cano2.w + 32.5 * yscale,
      largura: 25 * yscale,
      w: 15 * yscale,
      flange1: 1,
      flange2: 1,
      ang: 0
    };
  
    Params.canoEntradaTanque2 = {
      posx: Params.joelho3.posx + Params.joelho3.largura,
      posy: altura - nivel0 - hrep - hsaida + Params.joelho3.w,
      largura: canoEntradaMult * canvasW - (Params.joelho3.posx + Params.joelho3.largura),
      w: 15 * yscale,
      flange1: 1,
      flange2: 0
    };
  
    Params.saidaAgua1 = {
      posx: Params.canoEntradaTanque2.posx + Params.canoEntradaTanque2.largura - 25*yscale,
      posy: Params.canoEntradaTanque2.posy + (25 + 7.5) * yscale,
      largura: 25 * yscale,
      altura: (hsaida - 25) * yscale,
      w: 15 * yscale
    };
  
    Params.tanqueRep = {
      base: base,
      altura: altura - nivel0 - hrep,
      nivel: nivel - nivel0 - hrep,
      posx: Params.canoEntradaTanque2.posx + Params.canoEntradaTanque2.largura,
      posy: yref - nivel0 - hrep
    };
  
    Params.baseTanqueRep = {
      base: base,
      altura: hrep + 50 * yscale,
      posx: Params.tanqueRep.posx,
      posy: Params.tanqueRep.posy  
    };
  
    let cityPosx = (0.91 - 0.08) * canvasW ;
    let cityPosy = Params.tanqueRep.posy - Params.tanqueRep.altura + (0.04 + 1.4 *  0.16) * canvasW ;
    let cityW = 0.16;
    let saidaTanqueH = cityPosy - 32.5 * yscale;
    if (canvasW <= respLim[1] && canvasW > respLim[0]) {
      cityPosx = 0.8 * canvasW;
      cityW = 0.2;
      cityPosy = Params.baseTanqueRep.posy + Params.baseTanqueRep.altura + 8;
      saidaTanqueH = cityPosy - Params.tanqueRep.posy+10;
    } else if (canvasW <= respLim[0]) {
      cityW = 0.2;
      cityPosx = 0.5 * (1 - cityW) * canvasW;
      cityPosy = Params.cano1.posy + 2 * Params.cano1.w;
      saidaTanqueH =
      Params.cano1.posy + 2 * Params.cano1.w -5 - Params.tanqueRep.posy + (cityW / 2) * canvasW;
    }
    
    
    Params.canoSaidaTanque2 = {
      posx: Params.tanqueRep.posx + 0.5 * Params.tanqueRep.base,
      posy: Params.tanqueRep.posy,
      largura: saidaTanqueH,
      w: 15 * yscale,
      flange1: 0,
      flange2: 1,
      ang: 90
    };

  
    let joelho4Angle = 270;
    let joelhopos = [
        Params.canoSaidaTanque2.posx + 7.5 * yscale,
      cityPosy + cityW * canvasW * 220/300 - 45 * yscale 
    ];
    if (canvasW <= respLim[0]) {
      joelho4Angle = 180;
      joelhopos = [
        Params.canoSaidaTanque2.posx - (25 + 15 + 15 + 2) * yscale,
        Params.canoSaidaTanque2.posy + Params.canoSaidaTanque2.largura,
      ];
    }
  
    Params.joelho4 = {
      posx: joelhopos[0],
      posy: joelhopos[1],
      largura: 25 * yscale,
      w: 15 * yscale,
      flange1: 1,
      flange2: 1,
      ang: joelho4Angle
    };
  
    let cano3W = cityPosx - Params.joelho4.posx - Params.joelho4.largura + Params.joelho4.w;
    let cano3Angle = 0;
    if (canvasW <= respLim[0]) {
      cano3W = -(cityPosx + cityW * canvasW + -Params.joelho4.posx - Params.joelho4.largura - Params.joelho4.w);
      cano3Angle = 180;
    }
  
    Params.cano3 = {
      posx: Params.joelho4.posx + Params.joelho4.largura,
      posy: Params.joelho4.posy + Params.joelho4.largura + Params.joelho4.w/2,
      largura: cano3W,
      w: 15 * yscale,
      flange1: 1,
      flange2: 0,
      ang: cano3Angle
    };
    
  
    Params.sistemaConsumidor = {
        posx: cityPosx,
        posy: cityPosy,
        largura: cityW * canvasW,
        w: 15 * yscale,
        txt: strg.textovazaoDemandada,
        lim: [0, 100],
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    let wattMult = 0.16 / 2;
    let watt1X = 0.91 * canvasW;
    let watt1Y = Params.tanqueRep.posy - Params.tanqueRep.altura + wattMult * canvasW;
    let watt2X = 0.91 * canvasW;
    let watt2Y = watt1Y + 1.7 * wattMult * canvasW;
    let plotX = 0.2 * canvasW;
    let plotW = 0.42 * canvasW;
    if (canvasW <= respLim[1] && canvasW > respLim[0]) {
      watt1X = 0.4 * canvasW + wattMult * canvasW;
      watt1Y = Params.baseTanqueFont.posy + Params.baseTanqueFont.altura;
      watt2X = watt1X + 2.1 * wattMult * canvasW;
      watt2Y = watt1Y;
      plotX = 0.28 * canvasW;
    } else if (canvasW <= respLim[0]) {
      wattMult = 0.18;
      watt1X = 0.2 * canvasW;
      watt1Y = 0.63 * canvasH;
      watt2X = 0.8 * canvasW;
      watt2Y = watt1Y;
      plotX = 0.26 * canvasW;
      plotW = 0.5 * canvasW
    }
    Params.watt1 = {
      posx: watt1X,
      posy: watt1Y,
      raio: wattMult * canvasW,
      min: 0,
      max: 20,
      pot: 0,
      txt: strg.textoPotenciaHidraulica,
      cor: [255, 0, 0]
    };
    
    Params.watt2 = {
      posx: watt2X,
      posy: watt2Y,
      raio: wattMult * canvasW,
      min: 0,
      max: 100,
      pot: 0,
      txt: strg.textoRendimentoEstimado,
      cor: [0, 0, 255],
      showDigital: true
    };
    PontoOperacao = calculaPontoDeOperacao(Z, R, Hmax, Vmax);
    let PontoDemanda = {
      Vdemanda: 0,
      Hdemanda: 0,
    };

    Params.plot1 = {
      posx: plotX,
      posy: Params.tanqueFont.posy - nivel0,
      largura: plotW,
      altura: (580 - 230) * yscale,
      Hb: Hb,
      Hsys: Hsys,
      xlim: xlim,
      ylim: ylim,
      xlabel: "",
      ylabel: "",
      xtick: xtick,
      ytick: ytick,
      PontoOperacao: PontoOperacao,
      demanda: PontoDemanda
    };
}