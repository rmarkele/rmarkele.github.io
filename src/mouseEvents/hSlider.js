document.querySelectorAll(".h-slider").forEach(el=>{
    el.addEventListener('mousedown',()=>{
        el.classList.add("clicked");
    })
})

document.querySelectorAll(".h-slider").forEach(el=>{
    el.addEventListener('mouseover',()=>{
        el.classList.add("mouse-over");
    })
})

document.querySelectorAll(".h-slider").forEach(el=>{
    el.addEventListener('mouseup',()=>{
        el.classList.remove("clicked");
    })
})
document.querySelectorAll(".h-slider").forEach(el=>{
    el.addEventListener('mouseout',()=>{
        el.classList.remove("mouse-over");
    })
})