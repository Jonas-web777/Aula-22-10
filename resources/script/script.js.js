function calcularMedia (a, b, c) {
    return a + b + c / 3

}
let nota = Number(prompt("Digite a primeira nota:"))
let nota2 = Number(prompt("Digite a segunda nota:"))
let nota3 = Number(prompt("Digite a terceira nota:"))
let resultado = verificarMedia(nota,nota2,nota3)

console.log(resultado)

function verificarMedia(resultado) {
    if(resultado >= 7){
        return "Aprovado/a"
    }
    else if(resultado >= 5 && resultado <7){
        return "Recuperação"
    }
    else{
        return "Reprovado/a"
    }
}