const pipeSlider = document.getElementById("pipe-slider");

function pipeSliderCreate() {
    let posx =  joelho3.posx + (joelho3.largura + canoEntradaTanque2.largura) / 2;
    let posy = tanqueRep.posy + 36;
    let hgt = altura - nivel0 - hrep + 72;
    pipeSlider.style.left = posx + "px";
    pipeSlider.style.top = posy + "px";
    pipeSlider.style.width = hgt + "px";
    
}

pipeSlider.addEventListener("input", ()=>{
    let posy = map(pipeSlider.value, 0, 100, tanqueRep.posy, yref - altura);
    hsaida = altura - nivel0 - hrep - posy + joelho3.w;
    hsaida = constrain(hsaida, 0, altura - nivel0 - hrep)
    updateRepTank()
})
