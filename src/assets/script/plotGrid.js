function plotGrid() {
    push();
    stroke(100);
    for (let i = 0; i < 100; i = i += 10) {
      line(0, (i / 100) * canvasH, canvasW, (i / 100) * canvasH);
      line((i / 100) * canvasW, 0, (i / 100) * canvasW, canvasH);
    }
    pop();
  }