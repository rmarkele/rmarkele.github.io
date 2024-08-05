
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
    nivel + (100 / base)* canvasW/4000 * (vazaoEntrada - vazaoSaida),
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

function geraCurvaBomba(Hmax, Vmax, fs) {
  const Npoints = Vmax / fs;
  let Hb = [];
  for (let i = 0; i <= Npoints; i++) {
    let Hi = (-Hmax / (Vmax * Vmax)) * (i * fs - Vmax) * (i * fs + Vmax);
    Hb[i] = createVector(i * fs, Hi);
  }
  return Hb;
}

function geraCurvaSistema(Z, R, Vmax, Ymax, fs) {
  const Npoints = Vmax / fs;
  let Hs = [];
  if (R < Infinity) {
    for (let i = 0; i <= Npoints; i++) {
      let Hi = Z + R * (i * fs) * (i * fs);
      if (Hi <= Ymax) {
        Hs[i] = createVector(i * fs, Hi);
      } else {
        let Vlim = sqrt((Ymax - Z) / R);
        Hs[i] = createVector(Vlim, Ymax);
        break;
      }
    }
  } else {
    Hs[0] = createVector(0, 0);
    Hs[1] = createVector(0, Ymax);
  }
  return Hs;
}

function calculaPontoDeOperacao(Z, R, Hmax, Vmax) {
  let V, H;
  if (R < Infinity) {
    const Num = max(Hmax - Z, 0);
    const Den = R + Hmax / (Vmax * Vmax);

    V = sqrt(Num / Den);
    H = min(Z + R * V * V, Hmax);
  } else {
    V = 0;
    H = Hmax;
  }
  let PontoOperacao = {
    Vop: V,
    Hop: H,
  };

  return PontoOperacao;
}

function potenciaEletrica(V, N) {
  const Phmax = 458.2;
  const Vmax = 5.75;
  const Nmax = 1880;
  const K = 10;
  const rendimento = 0.75;
  const P0 = Phmax / rendimento - K * Vmax;
  return (K * V + P0) * pow(N / Nmax, 3);
}

function checkForUndefined(x, x0) {
  if (typeof x !== "undefined") {
    return checkForNaN(x, x0);
  } else {
    return x0;
  }
}

function checkForNaN(x, x0) {
  if (float(x) === float(x)) {
    return float(x);
  } else {
    return x0;
  }
}







function lightMode() {
  let mode = 1;
  if (PontoOperacao.Vop < LIMIARVAZAOBAIXA * Vmax) {
    mode = 0;
  } else if (PontoOperacao.Vop > LIMIARVAZAOALTA * Vmax) {
    mode = 2;
  }

  if (mode !== light.MODE) {
    light.MODE = mode;
    light.PS.classList.remove("on");
    light.NORMAL.classList.remove("on");
    light.PC.classList.remove("on");

    light.PS.classList.add("off");
    light.NORMAL.classList.add("off");
    light.PC.classList.add("off");

    switch (mode) {
      case 0:
        light.PS.classList.add("on");
        light.PS.classList.remove("off");
        break;
      case 1:
        light.NORMAL.classList.add("on");
        light.NORMAL.classList.remove("off");
        break;
      case 2:
        light.PC.classList.add("on");
        light.PC.classList.remove("off");
        break;
      default:
        break;
    }
  }
}


