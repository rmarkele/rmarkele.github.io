const flowPanel =  document.getElementById("flow-panel")

const pumpFlow = {
    // arrow: document.querySelector("#pump-flow .flow-arrow"),
    text: document.querySelector("#pump-flow .flow-text"),
    number: document.querySelector("#pump-flow .flow-number"),
    unit: document.querySelector("#pump-flow .flow-unit")
};

const cityFlow = {
    arrow: document.querySelector("#city-flow .flow-arrow"),
    img: document.querySelector("#city-flow .flow-arrow img"),
    text: document.querySelector("#city-flow .flow-text"),
    number: document.querySelector("#city-flow .flow-number"),
    unit: document.querySelector("#city-flow .flow-unit")
}

function createFlowPanel(){
    let posy = valvula1.posy + valvula1.w + 2;
    if(canvasW<=600){
        posy = cano3.posy + 2 * cano3.w + 10;
        let posx = 0.25 * canvasW;
        flowPanel.style.left = posx + 'px'
    }

    flowPanel.style.top = posy + 'px'
    
}

function updateFlowPanel(){

    // console.log(cityFlow.img.src)

    pumpFlow.number.innerHTML =  nfs(round(10 * vazaoEntrada) / 10, 0, 1);
    
    if (nivel > 21) {
        cityFlow.number.innerHTML =  nfs(round(10 * vazaoSaida) / 10, 0, 1);
    } else {
        cityFlow.number.innerHTML =  nfs(round(10 * vazaoEntrada) / 10, 0, 1);
    }

    if (vazaoEntrada > vazaoSaida + 0.02) {
        cityFlow.img.src = ".\\src\\assets\\images\\ne_arrow.png"
      } else if (vazaoEntrada < vazaoSaida - 0.02) {
        cityFlow.img.src = ".\\src\\assets\\images\\se_arrow.png"
      } else {
        cityFlow.img.src = ".\\src\\assets\\images\\right_arrow.png"
      }

}