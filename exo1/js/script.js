let letters = ['A','B','C','D','E','F','G','H','I','J',
              'K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']


function startOnDrag(event){
    console.log(event)
}

let myDivContainer = document.getElementById('container')
for (const key in letters) {

    let div = document.createElement('div')

    div.classList.add('card_item')
    
    div.textContent = letters[key]

    // activation la fonctionnalité glissé deposé
    div.setAttribute('draggable' , true)

    div.addEventListener('dragstart' , function(evt){
        evt.target.style.backgroundColor = 'blue'
    })


    div.addEventListener('dragend' , function(evt){
        evt.target.style.backgroundColor = 'black'
        let posX = evt.clientX;
        let poxY = evt.clientY;
    
        evt.target.style.left = posX + "px";
        evt.target.style.top = poxY + "px";
        evt.target.style.position = "absolute"; 
    })

    // ajout des differentes cases dans le DOM
    myDivContainer.appendChild(div)
}

