var numList = [];

window.document.getElementById("inputButton").addEventListener('click', add);
window.document.getElementById("endButton").addEventListener('click', finalize);

function somatory(object){
    var some = 0;
    for (var i = 0; i < object.length; i++){
        some += object[i];
    }
    return some;
}

function average(size, total){
    return total/size;
}
function add(){
    var inputNumber = window.document.getElementById('startInput').value.trim();
    window.document.getElementById('resDiv').innerHTML = '';
    if(inputNumber === "" || inputNumber < 1 || inputNumber > 100){
        window.alert('Digite um número válido');
    } else {
        var list = window.document.getElementById('inputSelect');
        var inputValue = Number(inputNumber);
        if(numList.indexOf(inputValue) === -1){//indexOf retorna -1 se o número não for encontrado no array
            numList.push(inputValue);
            var option = window.document.createElement('option');
            option.text = `Valor ${inputValue} adicionado`;
            list.appendChild(option);
        } else {
            window.alert('Este número já está na lista');
        }
    }
}

function finalize() {
    var res = window.document.getElementById('resDiv');
    numList.sort((a, b) => a - b)
    var total = somatory(numList);
    var med = average(numList.length, total);

    res.innerHTML +=    `Ao todo temos ${numList.length} elementos cadastrados <br>
                        O maior valor informado foi ${numList[numList.length-1]} <br>
                        O menor valor informado foi ${numList[0]} <br>
                        Somando todos os valores, temos ${total} <br>
                        A média dos valores digitados é ${med}`

}