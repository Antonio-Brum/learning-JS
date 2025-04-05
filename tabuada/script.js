window.document.getElementById('inputButton').addEventListener('click', makeTable);


function makeTable(){
    var inputNumber = window.document.getElementById("inputNumber").value.trim();
    if(inputNumber === ""){
        window.alert("Por favor, digite um número");
    } else {
        var inputValue = Number(inputNumber);
        var table = window.document.getElementById('tableSelect');

        table.options.length = 0;
        
        for(var i = 1; i<=10; i++){
            var option = window.document.createElement("option");
            option.text = `${inputValue} X ${i} = ${inputValue*i}`;
            table.appendChild(option);
        }
        

    }
}