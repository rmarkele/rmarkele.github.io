function criaPainelAlturas(pos) {
  txtH.text = document.querySelector("#Hplace .h-text");
  txtH.number = document.querySelector("#Hplace .h-number");
  txtH.text.innerHTML = strg.alturasRep[0][0] + strg.alturasRep[0][1];

  txtJ.text = document.querySelector("#Jplace .h-text");
  txtJ.number = document.querySelector("#Jplace .h-number");
  txtJ.text.innerHTML = strg.alturasRep[1][0] + strg.alturasRep[1][1];

  txtZ.text = document.querySelector("#Zplace .h-text");
  txtZ.number = document.querySelector("#Zplace .h-number");
  txtZ.text.innerHTML = strg.alturasRep[2][0] + strg.alturasRep[2][1];
}

function escrevePainelAlturas() {
  txtH.number.innerHTML = nfs(round(10 * PontoOperacao.Hop) / 10, 2, 1);
  txtJ.number.innerHTML = nfs(round(10 * (PontoOperacao.Hop - Z)) / 10, 2, 1);
  txtZ.number.innerHTML = nfs(round(10 * Z) / 10, 2, 1);
}
