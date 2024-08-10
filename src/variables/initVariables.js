
//canvas
let canv;

//simulador
let indOf = {};
const selFont = "Helvetica";
let tanqueRep, saidaAgua1;
let vazaoEntrada;
let vazaoSaida;

let bombar,
  canoSaidaTanque1,
  canoSaidaTanque2,
  joelho1,
  joelho2,
  joelho3,
  valvula1,
  sistemaConsumidor,
  canoEntradaTanque2,
  cano1,
  cano2,
  plot1,
  watt1,
  watt2;
let Hb, Hsys;
let Hmax = 11;
let Vmax = 9.5;
let Z = 0;
const R0 = 0.14;
let R = 0.14;
let fs = 0.01;
let xlim = [0, 10];
let ylim = [0, 12];
let velBomba = 1800;
let base = 100;
let altura = 530;
let nivel0 = 180;
let nivel = nivel0;

let hrep = 0;
let hsaida = 0;

const xtick = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ytick = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let yref

const Rconst = 100;

let indexOf = {};

let canvasW = 1300;
let canvasH = 650;
let yscale = 1;
let text_size = 18;





let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const canvasDimentions = document.querySelector("#myCanvasContainer").getBoundingClientRect();

let bkgColor = 250;

let respLim = [600, 850, 1300];