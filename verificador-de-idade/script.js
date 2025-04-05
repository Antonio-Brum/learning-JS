window.document.getElementById("verifyButton").addEventListener("click", verify);

function verify(){
    var date = new Date();
    var thisYear = date.getFullYear();
    var year = window.document.getElementById('inputYear').value;
    if (year.length == 0 || year > thisYear){
        window.alert("Erro! Verifique os dados e tente novamente");
    } else {
        var gender = window.document.querySelector('input[name="gender"]:checked'); //querySelector já encontra o radio com a propriedade 'checked'. Usando getElementByName() seria preciso fazer um loop pelos radios
        var age = thisYear - year;

        var img = document.createElement('img');
        img.setAttribute('id', 'foto')// == <img id="foto">
        img.style.borderRadius='50%';
        img.style.height='200px';
        img.style.width='200px';
        img.style.margin='auto';
        if (gender.value == "masculine"){
            if (age <= 12){
                img.setAttribute('src','bebe-homem.jpg');
            } else if(age <= 21){
                img.setAttribute('src', 'jovem-homem.jpg');
            } else if(age < 60){
                img.setAttribute('src', 'adulto-homem.jpg');
            } else {
                img.setAttribute('src', 'idoso-homem.jpg');
            }
            window.document.getElementById("res").innerHTML = `Um homem de ${age} anos`
            window.document.getElementById("divResult").appendChild(img);
        } else {
            if (age <= 12){
                img.setAttribute('src','bebe-mulher.jpg');
            } else if(age <= 21){
                img.setAttribute('src', 'jovem-mulher.jpg');
            } else if(age < 60){
                img.setAttribute('src', 'adulto-mulher.jpg');
            } else {
                img.setAttribute('src', 'idoso-mulher.jpg');
            }
            window.document.getElementById("res").innerHTML = `Uma mulher de ${age} anos`
            window.document.getElementById("divResult").appendChild(img);
        }
    }
}