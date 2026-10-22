function somar (a, b) {
    return a + b
}

function subtrair (a, b) {
    return a - b
}

function multiplicar (a, b) {
    return a * b
}

function dividir (a, b) {
    return a / b
}

function validar(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert("Erro! Digite apenas números valídps seu animal.");
        return false;
     }

    return true;
}

let ask = Number(prompt("Digite uma soma"))
let ask2 = Number(prompt("Digite uma soma"))

let resultado = somar (ask, ask2)
alert(resultado)

let ask3 = Number(prompt("Digite uma subtração"))
let ask4 = Number(prompt("Digite uma subtração"))

let resultado2 = subtrair (ask3, ask4)
alert(resultado2)

let ask5 = Number(prompt("Digite uma multiplicação"))
let ask6 = Number(prompt("Digite uma multiplicação"))

let resultado3 = multiplicar (ask5, ask6)
alert(resultado3)

let ask7 = Number(prompt("Digite uma divisão"))
let ask8 = Number(prompt("Digite uma divisão"))

let resultado4 = dividir (ask7, ask8)
alert(resultado4)
