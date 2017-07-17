
function calculadoraIMC() {
	var altura = document.getElementById('altura').value;
	var peso = document.getElementById('peso').value;
  var IMC = peso/(altura*altura);
  var resultado = 'Tu IMC (indice de masa corporal) es: ' + IMC.toFixed(2) + ' Kg/m2';
  var estado;
  if(IMC < 18.5){
    estado = 'Bajo Peso';
  } else if(IMC < 25 && IMC > 18.5){
    estado = 'Peso Normal';
  } else if(IMC >= 25 && IMC < 30){
    estado = 'Sobrepeso';
  } else {
    estado = 'Obesidad';
  }
  document.getElementById('resultado').innerHTML=resultado + '<br>' + 'Tu estado es: ' + estado;
}
//calculadoraIMC();
