let result = document.querySelector("#result");
let btn = document.querySelector("#btn");

let a = btn.addEventListener("click", ()=>{
    let randomNumber = parseInt(Math.random()*100);
    console.log(randomNumber);

    let yourName = document.querySelector("#your-name").value;
    let partnerName = document.querySelector("#partner-name").value;

    document.querySelector("#your-name").value = '';
    document.querySelector("#partner-name").value = '';
    

    if(yourName === ''){
        alert("Por favor..!! Ingrese un su nombre");
    }
    else if(partnerName === ''){
        alert("Por favor..!! Ingrese el nombre de su pareja");
    }
    else{
        result.innerHTML = yourName + " y " + partnerName + " porcentaje de amor es: " + randomNumber + " %";

        setTimeout(function() {
            result.innerHTML = 'Resultado';
        }, 3000);
       
    }
    
}

)

