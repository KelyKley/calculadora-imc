
	function calcular(){
	var peso = parseInt(prompt("Ingresa tu peso(Kg):", 60));
	var estatura = prompt("Ingresa tu estatura(Mts.):", 1.65);

	var operando = Math.round(peso / (estatura*estatura));
	alert("Tu IMC (indice de masa corporal) es: " + operando );
}
calcular();