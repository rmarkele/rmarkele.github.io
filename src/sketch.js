
function setup() {

  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  // console.log(vh);

  canvasDimentions = document.querySelector("#myCanvasContainer").getBoundingClientRect();
  
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
  createWaterSystem();
  
  
  criaPainelAlturas();
  createLogo();

  baseSliderCreate();
  pipeSliderCreate();
  atualizaStrings();
  cenarioSelectEvent();
// bkgColor = canvasW>respLim[1]? 250:255;
  
  
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
  // let KD =  alphaD * Math.pow(parseFloat(sistemaConsumidor.slider.value), 2)
  // vazaoSaida = KD * Math.sqrt(PontoOperacao.Hop);
  // console.log(vazaoSaida)
  vazaoSaida = parseFloat(sistemaConsumidor.slider.value);
  
  lightMode();
  // plot1.demanda = {
  //   Vdemanda: min(vazaoSaida, Vmax),
  //   Hdemanda: max((-Hmax / (Vmax * Vmax)) * (vazaoSaida - Vmax) * (vazaoSaida + Vmax), 0)
  // };
  plot1.demanda = {
    Vdemanda: round(10 * parseFloat(sistemaConsumidor.slider.value))/10,
    Hdemanda: 0
  };

  let step;
  if(canvasW>respLim[1]){
    step =  1/8 * (vazaoEntrada - vazaoSaida);
  } else{
    step =  1/14 * (vazaoEntrada - vazaoSaida);
  }
  

  nivel = constrain(
      nivel + step,
      0,
      tanqueRep.altura
    );


  Z = max(
    map(max(nivel + nivel0 + hrep, hsaida + nivel0 + hrep), nivel0, altura, 0, ylim[1]),
    0
  );

  Z = min(Z, Hmax);

  tanqueRep.nivel = nivel;
  Hsys = geraCurvaSistema(Z, R, Vmax, ylim[1], fs);
  plot1.Hsys = Hsys;
  const PotH = PontoOperacao.Hop * PontoOperacao.Vop * 10 / 3600;
  const PotE = 48 * pow(velBomba / 1800, 3) *1000 / 3600;

  watt1.pot = PotH;

  watt2.pot = (100 * PotH) / PotE;

  mouseIsOver();

}























