function createWaterSystem() {
    getSystemParams();

    tanqueFont = new tanque(Params.tanqueFont);
    baseTanqueFont = new baseTanque(Params.baseTanqueFont); 
    canoSaidaTanque1 = new cano(Params.canoSaidaTanque1);  
    bombar = new bomba(Params.bombar);
    joelho1 = new joelho(Params.joelho1);  
    valvula1 = new valvula(Params.valvula1);  
    cano1 = new cano(Params.cano1);
    joelho2 = new joelho(Params.joelho2);  
    cano2 = new cano(Params.cano2);  
    joelho3 = new joelho(Params.joelho3);  
    canoEntradaTanque2 = new cano(Params.canoEntradaTanque2);  
    saidaAgua1 = new saidaAgua(Params.saidaAgua1);  
    tanqueRep = new tanque(Params.tanqueRep); 
    baseTanqueRep = new baseTanque(Params.baseTanqueRep);   
    canoSaidaTanque2 = new cano(Params.canoSaidaTanque2);  
    joelho4 = new joelho(Params.joelho4);  
    cano3 = new cano(Params.cano3);
    sistemaConsumidor = new sistemaAgua(Params.sistemaConsumidor);

    watt1 = new wattimetro(Params.watt1);
    watt2 = new wattimetro(Params.watt2);
    plot1 = new plot(Params.plot1);

    
    
    if(canvasW<=respLim[0]){
      document.querySelector('#myCanvasContainer').appendChild(bombar.inputs);
      document.querySelector('#myCanvasContainer').appendChild(valvula1.inputs);
      document.querySelector('#myCanvasContainer').appendChild(sistemaConsumidor.inputs);
    }
  }