const txtH={}, txtZ={}, txtJ={};

function criaPainelAlturas() {
  txtH.text = document.querySelector("#Hplace .h-text");
  txtH.number = document.querySelector("#Hplace .h-number");
  txtH.unit = document.querySelector("#Hplace .h-unit");

  

  txtJ.text = document.querySelector("#Jplace .h-text");
  txtJ.number = document.querySelector("#Jplace .h-number");
  txtJ.unit = document.querySelector("#Jplace .h-unit");

  txtJ.text.innerHTML = strg.alturasRep[1][0] + strg.alturasRep[1][1];

  txtZ.text = document.querySelector("#Zplace .h-text");
  txtZ.number = document.querySelector("#Zplace .h-number");
  txtZ.unit = document.querySelector("#Zplace .h-unit");

  txtZ.text.innerHTML = strg.alturasRep[2][0] + strg.alturasRep[2][1];
}

function escrevePainelAlturas() {
  let zcalc = Math.min(PontoOperacao.Hop,  plot1.Hsys[0].y)
  txtH.number.innerHTML = nfs(round(10 * PontoOperacao.Hop) / 10, 2, 1);
  txtJ.number.innerHTML =nfs(round(10 * (PontoOperacao.Hop - zcalc)) / 10, 2, 1);
  txtZ.number.innerHTML = nfs(round(10 * zcalc) / 10, 2, 1);
}
