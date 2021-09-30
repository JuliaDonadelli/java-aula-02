/*
console.log("JAVA2")

console.log(399*5)
console.log("Conversor")

function EscreverFrases(text){
    console.log(text)
}

EscreverFrases("TUDO SEI NADA SEI")
EscreverFrases("sozinho vou rapido")
*/

function Converter(){

    let valorEmDolar = document.querySelector("#valor").value  

    let valorEmDolarNumerico = parseFloat(valorEmDolar) 
    
    let cotacaoDoDolar = 5
    let valorEmReal = valorEmDolarNumerico * cotacaoDoDolar
    


/**INSERIR O RESULTADO NA TELA */
document.querySelector("#valorConvertido").innerHTML = "O resultado em real é R$" + valorEmReal.toFixed(2)


}