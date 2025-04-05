window.document.getElementById('inputButton').addEventListener('click', count);

function count(){
    var inputs = document.querySelectorAll('#inputDiv input');

    var isValid = Array.from(inputs).every(sexo => sexo.value.trim() !== "");

    var result = window.document.getElementById('resDiv');
    if (!isValid){
        result.innerHTML = 'Impossível contar';
    } else {
        var startValue = Number(window.document.getElementById('startInput').value);
        var endValue = Number(window.document.getElementById('endInput').value);
        var stepValue = Number(window.document.getElementById('stepInput').value);

        if (stepValue <= 0){
            window.alert('Passo inválido! Considerando Passo = 1')
            stepValue = 1;
        }
        
        result.innerHTML = '';
        if(startValue < endValue){
            for(startValue; startValue <= endValue; startValue+=stepValue){
                result.innerHTML += `${startValue} &#x1F449 `;
            }
        } else {
            for(startValue; startValue >= endValue; startValue-=stepValue){
                result.innerHTML += `${startValue} &#x1F449 `;
        }
    }
        result.innerHTML += '&#x1F3F4';
}
}