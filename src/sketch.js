
function setup() {
  
  canvasW = canvasDimentions.width;
  canvasH = canvasDimentions.height;
  canv = createCanvas(canvasW, canvasH);
  canv.parent("myCanvasContainer");

  text_size = canvasW > respLim[1] ? 18 : 14;
  strW = canvasW > respLim[0] ? 2 : 1;
  
  textSize(text_size);
  textStyle(NORMAL);
  textFont(selFont);


  Hb = geraCurvaBomba(Hmax, Vmax, fs);
  Hsys = geraCurvaSistema(Z, R, Vmax, ylim[1], fs);

  idiomaSelect();
  criaEstrutura();
  
  

  createFlowPanel();
  if (canvasW > respLim[0]) {
    criaPainelAlturas([-50  , (20 * canvasW) / 1300]);
  } else {
    criaPainelAlturas([-85, (20 * canvasW) / 1300]);
  }

  baseSliderCreate();
  pipeSliderCreate();
  atualizaStrings();
  cenarioSelectEvent();
  bkgColor = canvasW>respLim[1]? 250:255;
  
  
}

function draw() {

  background(bkgColor);

  Hb = geraCurvaBomba(Hmax, Vmax, fs);
  plot1.Hb = Hb;

  drawWaterSystem();
  escrevePainelAlturas();
  updateFlowPanel();

  let Rmult = 50/ map(parseFloat(valvula1.slider.value), 0, 360, 0, Rconst);
  R = R0/10 * pow(Rmult, 2);
  PontoOperacao = calculaPontoDeOperacao(Z, R, Hmax, Vmax);
  plot1.PontoOperacao = PontoOperacao;
  vazaoEntrada = PontoOperacao.Vop;
  vazaoSaida = parseFloat(sistemaConsumidor.slider.value);
  
  lightMode();
  plot1.demanda = {
    Vdemanda: min(vazaoSaida, Vmax),
    Hdemanda: max((-Hmax / (Vmax * Vmax)) * (vazaoSaida - Vmax) * (vazaoSaida + Vmax), 0)
  };

  let step;
  if(canvasW>respLim[1]){
    step =  1/8 * (vazaoEntrada - vazaoSaida);
  } else{
    step =  1/14 * (vazaoEntrada - vazaoSaida);
  }
  nivel = constrain(
    nivel + step,
    nivel0 + hrep,
    altura
  );

  Z = max(
    map(max(nivel, hsaida + nivel0 + hrep), nivel0, altura, 0, ylim[1]),
    0
  );

  tanqueRep.nivel = nivel - nivel0 - hrep;
  Hsys = geraCurvaSistema(Z, R, Vmax, ylim[1], fs);
  plot1.Hsys = Hsys;
  const PotH = PontoOperacao.Hop * PontoOperacao.Vop * 10 / 3600;
  const PotE = 48 * pow(velBomba / 1800, 3) *1000/3600;

  watt1.pot = PotH;

  watt2.pot = (100 * PotH) / PotE;

  mouseIsOver();

}























