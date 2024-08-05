//Seleção do idioma inicial
// let languageIndex = 0; //0: PT-BR, 1: EN-US

//createButton
let Help;

//createDiv
let divAjuda, txtH={}, txtZ={}, txtJ={};

//createP
// let logoTxt0, logoTxt1, help;

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
let xtick = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ytick = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let yref

const Rconst = 100;

let xlabel = "";
let ylabel;

// let atualizaInp = false;

// let idiomaBR, idiomaUS, idiomaSelected, listaIdioma, langMenu, styleElem;
let indexOf = {};

let light = {};
let LIMIARVAZAOBAIXA = 0.15;
let LIMIARVAZAOALTA = 0.85;

let canvasW = 1300;
let canvasH = 650;
let yscale = 1;
let text_size = 18;


light.PS = document.querySelector("#light-PS");
light.NORMAL = document.querySelector("#light-NORMAL");
light.PC = document.querySelector("#light-PC");
light.MODE = -1;

light.textoPS = document.querySelector("#light-PS p");
light.textoNORMAL = document.querySelector("#light-NORMAL p");
light.textoPC = document.querySelector("#light-PC p");

const canvasDimentions = document.querySelector("#myCanvasContainer").getBoundingClientRect();

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);