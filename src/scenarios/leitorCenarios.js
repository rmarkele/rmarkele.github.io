function cenarioSelectEvent() {
  let i =  selPar.value;
  let inp1 = checkForUndefined(cenarios[i].abertura_v1, 50);
  inp1 = constrain(inp1, 0, 100);
  valvula1.inp.value(nf(inp1, 0, 1));
  let v1 = map(inp1, 0, 100, 0, 360);
  valvula1.slider.value(v1);

  let inp2 = checkForUndefined(cenarios[i].demanda, 5);
  inp2 = constrain(inp2, 0, 10);
  sistemaConsumidor.inp.value(nf(inp2, 0, 1));
  let v2 = map(inp2, 0, 10, 0, 360);
  v2 = constrain(v2, 0, 360);
  sistemaConsumidor.slider.value(v2);

  let inp3 = checkForUndefined(cenarios[i].RPM, 1800);
  inp3 = constrain(inp3, 600, 1880);
  bombar.inp.value(inp3);
  bombar.slider.value(inp3);

  LIMIARVAZAOBAIXA = checkForUndefined(
    cenarios[i].Limiar_Vazao_Baixa / 100,
    0.15
  );
  LIMIARVAZAOALTA = checkForUndefined(
    cenarios[i].Limiar_Vazao_Excessiva / 100,
    0.85
  );

  cenarios[i].Elevacao_Tanque = constrain(cenarios[i].Elevacao_Tanque, 0, 12);
  cenarios[i].Elevacao_Saida_Agua = constrain(cenarios[i].Elevacao_Saida_Agua, 0, 12 - cenarios[i].Elevacao_Tanque);

  hrep = round(1000 * map(checkForUndefined(cenarios[i].Elevacao_Tanque, 0), 0, ylim[1], 0, altura - nivel0)) / 1000;

  hsaida = round(1000 * map(checkForUndefined(cenarios[i].Elevacao_Saida_Agua, 0), 0, ylim[1], 0, altura - nivel0)) / 1000;

  updateRepTank();
  baseSlider.value = map(tanqueRep.posy, yref - nivel0, yref - altura, 0, 100);
  pipeSlider.value = map(canoEntradaTanque2.posy, tanqueRep.posy, tanqueRep.posy - tanqueRep.altura, 0, 100);
    
}
