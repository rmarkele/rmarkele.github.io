const baseSlider = document.getElementById("base-slider");

function baseSliderCreate() {
    let posx =  tanqueRep.posx + tanqueRep.base / 2 - 6;
    const wdt = canvasW>respLim[0]?36:18;
    let posy = yref - nivel0 + wdt;
    let hgt = altura - nivel0 + wdt * 2;
    baseSlider.style.left = posx + "px";
    baseSlider.style.top = posy + "px";
    baseSlider.style.width = hgt + "px";
}

baseSlider.addEventListener("input", ()=>{
    let posy = map(baseSlider.value, 0, 100, yref - nivel0, yref - altura);
    hrep = constrain(yref - nivel0 -  posy, 0, altura-nivel0);  
    hsaida = constrain(hsaida, 0, - 10 + 40 - nivel0 - 25 - 7.5   - hrep + altura)
    updateRepTank();
})