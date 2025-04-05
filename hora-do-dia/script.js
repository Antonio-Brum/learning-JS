function carregar(){
    var data = new Date();
    var hora = data.getHours();
    var divH = window.document.getElementById("divHora");
    var img = window.document.getElementById('image');

    if (hora >= 6 && hora < 13){
        divH.innerHTML = "Bom dia!";
        window.document.body.style.background = 'D16601';
        img.src = './manha.jpg';
    } else if(hora >= 13 && hora < 19){ 
        divH.innerHTML = "Boa tarde!";
        window.document.body.style.background = '#AFBFD7';
        img.src = './tarde.jpeg';
    } else {
        divH.innerHTML = 'Boa noite!';
        window.document.body.style.background = '#001226';
        img.src = './noite.png';
    }

    divH.innerHTML += ` Agora são ${hora}h`;
}