




let row;
let nombre;


let bouttonDemarrer = document.getElementById('bouton1');
let bouton = document.getElementById('selecteur');

function loop(nombre) {

    if(isNaN(nombre) || nombre==="")
    {
        alert('Entrez un nombre SVP');
        location.reload();
        
    }

    row = setTimeout(function () { 

        document.getElementById("compteur1").innerHTML = nombre; 
        nombre--; 

        if (nombre >= 0) { 
            loop(nombre);
        }

    }, 1000);

}



bouttonDemarrer.addEventListener('click', changeBouttonDemarrer);

function changeBouttonDemarrer() {
    if (bouttonDemarrer.value === 'Demarrer') {
        bouttonDemarrer.value = 'Reinitialiser';
        bouttonDemarrer.style.backgroundColor = "#4d9900" ;
        demarrer();
    } else {
    bouttonDemarrer.value = 'Demarrer';
        demarrer();
        bouttonDemarrer.style.backgroundColor = "#336600" ;

    }

}





bouton.addEventListener('click', changeBoutton);

function changeBoutton() {
    if (bouton.value === 'Pause') {
        bouton.value = 'Reprendre';
        bouton.style.backgroundColor = "#0066ff" ;
        stopTimer();
    } else {
    bouton.value = 'Pause';
        stopTimer();
        loop(document.getElementById("compteur1").innerHTML);
        bouton.style.backgroundColor = "blue" ;
        
    }

}




function demarrer() {
    stopTimer();
    let i = document.getElementById('nombre').value;
    loop(i);
}

function stopTimer() {
    clearTimeout(row);
}


function reCharge() {
    stopTimer();
    location.reload();
}

//romain vairo //