//funciones numeros//
function loadPage(){
    document.getElementById("n1").addEventListener("click",()=>nx(1))
    document.getElementById("n2").addEventListener("click",()=>nx(2))
    document.getElementById("n3").addEventListener("click",()=>nx(3))
    document.getElementById("n4").addEventListener("click",()=>nx(4))
    document.getElementById("n5").addEventListener("click",()=>nx(5))
    document.getElementById("n6").addEventListener("click",()=>nx(6))
    document.getElementById("n7").addEventListener("click",()=>nx(7))
    document.getElementById("n8").addEventListener("click",()=>nx(8))
    document.getElementById("n9").addEventListener("click",()=>nx(9))
    document.getElementById("n0").addEventListener("click",()=>nx(0))
    document.getElementById("sr").addEventListener("click",showresult)

    document.getElementById("s").addEventListener("click",sumar)
    document.getElementById("r").addEventListener("click",restar)
    document.getElementById("m").addEventListener("click",multiplicar)
    document.getElementById("d").addEventListener("click",dividir)
//numeros//
}

function nx(numero) {
    let actual = document.getElementById("resultado").innerHTML
   let sumado = document.getElementById("n" + numero).innerHTML
    document.getElementById("resultado").innerHTML = actual +""+ sumado +""
}

//operaciones//
function sumar() {
    let actual = document.getElementById("resultado").innerHTML
   let sumado = document.getElementById("s").innerHTML
    document.getElementById("resultado").innerHTML = actual + sumado
}

function restar( ){
    let actual = document.getElementById("resultado").innerHTML
   let sumado = document.getElementById("r").innerHTML
    document.getElementById("resultado").innerHTML = actual - sumado
}
function multiplicar () {
    let actual = document.getElementById("resultado").innerHTML
   let sumado = document.getElementById("m").innerHTML
    document.getElementById("resultado").innerHTML = actual * sumado
}
function dividir( ) {
    let actual = document.getElementById("resultado").innerHTML
   let sumado = document.getElementById("d").innerHTML
    document.getElementById("resultado").innerHTML = actual / sumado
}
//funciones y condiciones //
function showresult ( ) {
    let actual= document.getElementById("resultado").innerHTML
    let sumar = document.getElementById("s").innerHTML
    let estoySumando = actual.indexOf("+")
    let estoyRestando= actual.indexOf("-")
    if (estoySumando>0) {
       const a = actual.substring(0,actual.indexOf('+'));
       const b = actual.substring(actual.indexOf('+')+1);
       let resultado = parseInt (a) + parseInt (b)
       document.getElementById("resultado").innerHTML = resultado; 

    }

}
