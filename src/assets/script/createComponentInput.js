function createComponentInput({id, label, pos, lim , img}){

      let div = document.createElement('div');
      div.classList.add("component-input")
      div.setAttribute("id",id);
      div.innerHTML = `
        ${img?`<div>${img}</div>`:""}
        <div class="inputs-container">
          <div class="component-label">
            <div class="label-text"> ${label[0]} </div>
            <input type = "text "class="label-input" value="0"/>
            <div class="label-unit"> ${label[1]} </div>
          </div>
          <input type = "range" min="${lim[0]}" max="${lim[1]}" class="component-slider variable-slider" value="0"/>
        </div>
      `
      div.style.left = `${pos[0]}px`;
      div.style.top = `${pos[1]}px`
  
      document.querySelector(`#myCanvasContainer`).appendChild(div);

      
      let inputs = document.querySelector(`#${id} .inputs-container`);
      let text = document.querySelector(`#${id} .label-text`);
      let input = document.querySelector(`#${id} .label-input`);
      let unit = document.querySelector(`#${id} .label-unit`);
      let slider = document.querySelector(`#${id} .component-slider`);

      
      return {div, inputs, text, input, unit, slider}
}