function mouseIsOver() {
 let overBase = mouseDist(tanqueRep.posx + 0.5 * base, tanqueRep.posy) <=  0.5 * base
 if(overBase){   
    let basevec = createVector(tanqueRep.posx + 0.5 * base, tanqueRep.posy);
    let xoff = 20;
    let hgt = 20;
    let wdt = 5;
    push()
        strokeWeight(4);
        translate(basevec.x,basevec.y);
        fill(255,0,0);
        stroke(155,120,120);
        line(0,xoff,0,xoff + hgt);
        beginShape();
            vertex(-wdt,xoff + hgt);
            vertex(wdt,xoff + hgt);
            vertex(0,xoff + hgt + wdt);
            
        endShape(CLOSE);

        line(0, - xoff,0, - xoff - hgt);
        beginShape();
            vertex(-wdt,- xoff - hgt);
            vertex(wdt, - xoff - hgt);
            vertex(0,- xoff - hgt - wdt);
            
        endShape(CLOSE);
    pop()
  }

  let overPipeIn = mouseIsInRect(
        joelho3.posx,
        canoEntradaTanque2.posy,
        joelho3.largura + canoEntradaTanque2.largura,
        joelho3.w + canoEntradaTanque2.w 
    )


  if(overPipeIn){
    let basevec = createVector(canoEntradaTanque2.posx + 0.5 * canoEntradaTanque2.largura, canoEntradaTanque2.posy);
    let xoff = 20;
    let hgt = 20;
    let wdt = 5;
    push()
        strokeWeight(4);
        translate(basevec.x,basevec.y);
        fill(255,0,0);
        stroke(155,120,120);
        line(0,xoff,0,xoff + hgt);
        beginShape();
            vertex(-wdt,xoff + hgt);
            vertex(wdt,xoff + hgt);
            vertex(0,xoff + hgt + wdt);
            
        endShape(CLOSE);

        line(0, - xoff,0, - xoff - hgt);
        beginShape();
            vertex(-wdt,- xoff - hgt);
            vertex(wdt, - xoff - hgt);
            vertex(0,- xoff - hgt - wdt);
            
        endShape(CLOSE);
    pop()
  }
  

  if(overBase || overPipeIn){
    cursor(HAND)
  }
  else{
    cursor(ARROW)
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

function mouseDragged(){
    if(baseClicked){
        hrep = constrain(altura - nivel0 -  mouseY, 0, altura-nivel0);
        
        hsaida = constrain(hsaida, 0, - 10 + 40 - nivel0 - 25 - 7.5   - hrep + altura)
        updateRepTank();
    }

    if(pipeInClicked){
        hsaida = yref - 10 + 40 - nivel0 - 25 - 7.5 - mouseY - hrep;
        hsaida = constrain(hsaida, 0, - 10 + 40 - nivel0 - 25 - 7.5   - hrep + altura)
        updateRepTank()
    }

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
    saidaTanqueH = cityPosy + cityW * canvasW * 0.6 - 32.5 * yscale - tanqueRep.posy;
    if (canvasW <= 800 && canvasW > 500) {
      cityPosx = 0.8 * canvasW;
      cityPosy = baseTanqueRep.posy + baseTanqueRep.altura + 8;
      saidaTanqueH = cityPosy - tanqueRep.posy+10;
    } else if (canvasW <= 500) {
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

    saidaAgua1.altura =  (hsaida) * yscale;

    cano2.largura = joelho2.posy - (altura - nivel0 - hrep - hsaida + 15*yscale + 32.5 * yscale);
  }
