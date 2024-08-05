function criaEstrutura() {
    createWaterSystem();
    let wattMult = 0.16 / 2;
    let watt1X = 0.91 * canvasW;
    let watt1Y = tanqueRep.posy - tanqueRep.altura + wattMult * canvasW;
    let watt2X = 0.91 * canvasW;
    let watt2Y = watt1Y + 1.7 * wattMult * canvasW;
    let plotX = 0.2 * canvasW;
    if (canvasW <= 800 && canvasW > 500) {
      watt1X = 0.4 * canvasW + wattMult * canvasW;
      watt1Y = baseTanqueFont.posy + baseTanqueFont.altura;
      watt2X = watt1X + 2.1 * wattMult * canvasW;
      watt2Y = watt1Y;
      plotX = 0.28 * canvasW;
    } else if (canvasW <= 600) {
      wattMult = 0.18;
      watt1X = 0.2 * canvasW;
      watt1Y = 0.65 * canvasH;
      watt2X = 0.8 * canvasW;
      watt2Y = watt1Y;
      plotX = 0.34 * canvasW;
    }
  
    watt1 = new wattimetro(
      watt1X,
      watt1Y,
      wattMult * canvasW,
      0,
      80,
      0,
      strg.textoPotenciaHidraulica,
      [255, 0, 0]
    );
    watt2 = new wattimetro(
      watt2X,
      watt2Y,
      wattMult * canvasW,
      0,
      100,
      0,
      strg.textoRendimentoEstimado,
      [0, 0, 255],
      false
    );
    PontoOperacao = calculaPontoDeOperacao(Z, R, Hmax, Vmax);
    let PontoDemanda = {
      Vdemanda: 0,
      Hdemanda: 0,
    };
    ylabel = strg.grafico;
    plot1 = new plot(
      plotX,
      tanqueFont.posy - nivel0,
      0.42 * canvasW,
      (580 - 230) * yscale,
      Hb,
      Hsys,
      xlim,
      ylim,
      xlabel,
      ylabel,
      xtick,
      ytick,
      PontoOperacao,
      PontoDemanda
    );
  
  
  }