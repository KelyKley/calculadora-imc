var altura = Number(prompt('Tu altura actual es (en cm):'))/100;
var peso = Number(prompt('Tu peso es (en kg):'));
function calculadoraIMC() {
  var IMC = peso/(altura*altura);
  alert('Tu IMC es: ' + IMC.toFixed(2) + ' Kg/m2');
}
calculadoraIMC();
