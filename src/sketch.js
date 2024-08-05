
function setup() {
  
  canvasW = canvasDimentions.width;
  canvasH = canvasDimentions.height;
  canv = createCanvas(canvasW, canvasH);
  canv.parent("myCanvasContainer");
  textSize(18);
  text_size = 18
  if (canvasW <= 800) {
    text_size = 14;
    textSize(14);
  }

  textStyle(NORMAL);
  textFont(selFont);


  Hb = geraCurvaBomba(Hmax, Vmax, fs);
  Hsys = geraCurvaSistema(Z, R, Vmax, ylim[1], fs);

  criaEstrutura();
  idiomaSelect();

  createFlowPanel();
  if (canvasW > 600) {
    criaPainelAlturas([-50  , (20 * canvasW) / 1300]);
  } else {
    criaPainelAlturas([-85, (20 * canvasW) / 1300]);
  }
  atualizaStrings();
  cenarioSelectEvent();
}

function draw() {
  background(250);
  velBomba = bombar.slider.value();

  Hmax = pow(velBomba / 1800, 2) * 11;
  Vmax = (velBomba / 1800) * 9.5;

  Hb = geraCurvaBomba(Hmax, Vmax, fs);
  plot1.Hb = Hb;

  drawWaterSystem();
  escrevePainelAlturas();
  updateFlowPanel();

  let Rmult = 50 / map(valvula1.slider.value(), 0, 360, 0, Rconst);
  R = R0 * pow(Rmult, 2);
  PontoOperacao = calculaPontoDeOperacao(Z, R, Hmax, Vmax);
  plot1.PontoOperacao = PontoOperacao;
  vazaoEntrada = PontoOperacao.Vop;
  vazaoSaida = map(sistemaConsumidor.slider.value(), 0, 360, 0, 10);
  lightMode();
  plot1.demanda = {
    Vdemanda: min(vazaoSaida, Vmax),
    Hdemanda: max(
      (-Hmax / (Vmax * Vmax)) * (vazaoSaida - Vmax) * (vazaoSaida + Vmax),
      0
    ),
  };

  nivel = constrain(
    nivel + (100 / base)* canvasW/10000 * (vazaoEntrada - vazaoSaida),
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
  const PotH = PontoOperacao.Hop * PontoOperacao.Vop;
  const PotE = 48 * pow(velBomba / 1800, 3);

  watt1.pot = PotH;

  watt2.pot = (100 * PotH) / PotE;

  mouseIsOver();

}






















