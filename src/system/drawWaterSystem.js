function drawWaterSystem() {
    // plotGrid();
    if (vazaoEntrada > 0) {
      saidaAgua1.show();
    }
    watt1.show();
    watt2.show();
    plot1.show();
    baseTanqueFont.show();
    tanqueFont.show();
    bombar.show();
    canoSaidaTanque1.show();
    joelho1.show();
    valvula1.show();
    cano1.show();
    joelho2.show();
    cano2.show();
    joelho3.show();
    baseTanqueRep.show();
    canoSaidaTanque2.show();
    canoEntradaTanque2.show();
    tanqueRep.show();
    if (canvasW <= respLim[0] || canvasW > respLim[1]) {
      joelho4.show();
      cano3.show();
    }
    // sistemaConsumidor.show();
  }