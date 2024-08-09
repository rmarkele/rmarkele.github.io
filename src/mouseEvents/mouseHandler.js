function mouseIsOver() {
 let overBase = (mouseDist(tanqueRep.posx + 0.5 * base, tanqueRep.posy) <=  0.5 * base) || (baseSlider.classList.contains("clicked")) || (baseSlider.classList.contains("mouse-over"));
 if(overBase){   
    baseSlider.classList.add('active')
  }else{
    baseSlider.classList.remove('active')
  }

  let overPipeIn = mouseIsInRect(
        joelho3.posx,
        canoEntradaTanque2.posy,
        joelho3.largura + canoEntradaTanque2.largura,
        joelho3.w + canoEntradaTanque2.w 
    ) || (pipeSlider.classList.contains("clicked")) || (pipeSlider.classList.contains("mouse-over"));


  if(overPipeIn){
    pipeSlider.classList.add('active')
  }else{
    pipeSlider.classList.remove('active')
  }
  
}

function mousePressed() {
    //clicked on tank rep base
    baseClicked = mouseDist(tanqueRep.posx + 0.5 * base, tanqueRep.posy) <=  0.5 * base;
    pipeInClicked = mouseIsInRect(
        joelho3.posx,
        canoEntradaTanque2.posy,
        joelho3.largura + canoEntradaTanque2.largura,
        joelho3.w + canoEntradaTanque2.w 
    )
    
    
}


function touchEnded() { 
    mouseX =0; 
    mouseY =0; 
} 

function mouseDist(x, y){
    return Math.sqrt((mouseX - x) ** 2 +  (mouseY - y) ** 2)
}

function mouseIsInRect(x,y,w,h){
    return (mouseX>=x) && (mouseX <= x + w) && (mouseY>= y - h) && (mouseY <= y + h);
}

function updateRepTank(){ 
    tanqueRep.posy = yref - nivel0 - hrep;
    tanqueRep.altura = altura - nivel0 - hrep;
  
    baseTanqueRep.posy = tanqueRep.posy;
    baseTanqueRep.altura = hrep + 50 * yscale;

    cityPosx = tanqueRep.posx + tanqueRep.base + 40;
    cityPosy = tanqueRep.posy - tanqueRep.altura + (0.05 + 1.4 *  0.16) * canvasW ;
    cityW = (canvasW - cityPosx)/canvasW
    saidaTanqueH = joelho4.posy - tanqueRep.posy;
    if (canvasW <= respLim[1] && canvasW > respLim[0]) {
      cityPosx = 0.8 * canvasW;
      cityPosy = baseTanqueRep.posy + baseTanqueRep.altura + 8;
      saidaTanqueH = cityPosy - tanqueRep.posy+10;
    } else if (canvasW <= respLim[0]) {
    cityW = 0.2;
      cityPosx = 0.5 * (1 - cityW) * canvasW;
      cityPosy = cano1.posy + 2 * cano1.w;
      saidaTanqueH =
        cano1.posy + 2 * cano1.w -5 - tanqueRep.posy + (cityW / 2) * canvasW;
    }
    
    canoEntradaTanque2.posy =  altura - nivel0 - hrep - hsaida + joelho3.w;

    canoSaidaTanque2.posy = tanqueRep.posy;
    canoSaidaTanque2.largura =  saidaTanqueH;

    joelho3.posy = altura - nivel0 - hrep - hsaida + cano2.w + 32.5 * yscale;
    saidaAgua1.posy = canoEntradaTanque2.posy + (25 + 7.5) * yscale;

    saidaAgua1.altura =  hsaida;

    cano2.largura = joelho2.posy - (altura - nivel0 - hrep - hsaida + 15*yscale + 32.5 * yscale);

    let posy = tanqueRep.posy + 36;
    let hgt = altura - nivel0 - hrep + 72;;
    pipeSlider.style.top = posy + "px";
    pipeSlider.style.width = hgt + "px";

    pipeSlider.value = map(canoEntradaTanque2.posy, tanqueRep.posy, tanqueRep.posy - tanqueRep.altura, 0, 100);
    
  }
