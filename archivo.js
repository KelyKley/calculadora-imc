
function calculadoraIMC() {
	var altura = Number(prompt("Ingresa tu estatura(Mts.):", 1.65));
	var peso = Number(prompt("Ingresa tu peso(Kg):", 60));
  	var IMC = peso/(altura*altura);
  	alert('Tu IMC (indice de masa corporal) es: ' + IMC.toFixed(2) + ' Kg/m2');
}
calculadoraIMC();
