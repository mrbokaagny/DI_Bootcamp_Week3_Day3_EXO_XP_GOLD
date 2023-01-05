let paragrh = document.getElementById('paragrh')
paragrh.setAttribute('draggable','true');

// changement de la couleur lors du deplacement du paragraphe
paragrh.addEventListener('dragstart' , function(e){
    e.target.style.backgroundColor = 'red'
})

// 
paragrh.addEventListener('dragend' , function(e){
    e.target.style.backgroundColor = 'aliceblue'
    let posX = e.clientX;
    let poxY = e.clientY;

    e.target.style.left = posX + "px";
    e.target.style.top = poxY + "px";
    e.target.style.position = "absolute"; 
})