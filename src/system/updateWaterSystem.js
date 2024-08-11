// screen.orientation.addEventListener("change", (event) => {
//     const type = event.target.type;
//     const angle = event.target.angle;
//     canvasDimentions = document
//     .querySelector("#myCanvasContainer")
//     .getBoundingClientRect();
//   alert(`w: ${canvasDimentions.width}, h: ${canvasDimentions.height}`);
//     updateWaterSystem(angle);
// });

function updateWaterSystem(angle) {
  canvasDimentions = document
    .querySelector("#myCanvasContainer")
    .getBoundingClientRect();
  canvasW = angle==0? canvasDimentions.width : canvasDimentions.height;
  canvasH = angle= 0? canvasDimentions.height: canvasDimentions.width;
  resizeCanvas(canvasW, canvasH);

  text_size = canvasW > respLim[1] ? 18 : 14;
  strW = canvasW > respLim[0] ? 2 : 1;

  textSize(text_size);

  getSystemParams();

  tanqueFont.update(Params.tanqueFont);
  baseTanqueFont.update(Params.baseTanqueFont);
  canoSaidaTanque1.update(Params.canoSaidaTanque1);
  bombar.update(Params.bombar);
  joelho1.update(Params.joelho1);
  valvula1.update(Params.valvula1);
  cano1.update(Params.cano1);
  joelho2.update(Params.joelho2);
  cano2.update(Params.cano2);
  joelho3.update(Params.joelho3);
  canoEntradaTanque2.update(Params.canoEntradaTanque2);
  saidaAgua1.update(Params.saidaAgua1);
  tanqueRep.update(Params.tanqueRep);
  baseTanqueRep.update(Params.baseTanqueRep);
  canoSaidaTanque2.update(Params.canoSaidaTanque2);
  joelho4.update(Params.joelho4);
  cano3.update(Params.cano3);
  sistemaConsumidor.update(Params.sistemaConsumidor);
  updateRepTank();

  watt1.update(Params.watt1);
  watt2.update(Params.watt2);
  plot1.update(Params.plot1);

  if (canvasW <= respLim[0]) {
    document.querySelector("#myCanvasContainer").appendChild(bombar.inputs);
    document.querySelector("#myCanvasContainer").appendChild(valvula1.inputs);
    document
      .querySelector("#myCanvasContainer")
      .appendChild(sistemaConsumidor.inputs);
  } else {
    bombar.div.appendChild(bombar.inputs);
    valvula1.div.appendChild(valvula1.inputs);
    sistemaConsumidor.div.appendChild(sistemaConsumidor.inputs);
  }

  let posy = valvula1.posy + valvula1.w + 2;
  let posx = 0.45 * canvasW;
  if (canvasW <= 600) {
    posy = cano3.posy + 2 * cano3.w + 10;
    posx = 0.25 * canvasW;
    flowPanel.style.left = posx + "px";
  }
  flowPanel.style.left = posx + "px";
  flowPanel.style.top = posy + "px";

  baseSliderCreate();
  pipeSliderCreate();
  baseSlider.value = map(tanqueRep.posy, yref - nivel0, yref - altura, 0, 100);
  pipeSlider.value = map(canoEntradaTanque2.posy, tanqueRep.posy, tanqueRep.posy - tanqueRep.altura, 0, 100);
}
