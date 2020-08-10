/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var contador=0;
	var nombre;
	var temperatura;
	var sexo;
	var edad;
	//Punto A
	var contadorHombres=0;
	var contadorMujeres=0;
	//Punto B
	var promedioEdad;
	var acumEdad=0;
	var contadorEdad=0;
	//Punto C
	var banderaMujerMasTemperatura=true;
	var mujerMasTemperatura;
	var temperaturaMax;
	var nombreMujerMasTemperatura;

	while(contador<5){
		contador++;

		nombre=prompt("Ingrese nombre");

		do{
			temperatura=prompt("Ingrese temperatura");
			temperatura=parseInt(temperatura);
		}	while(isNaN(temperatura));

		do{
			sexo=prompt("Ingrese F si su sexo es femenino o M si su sexo es masculino");
		}	while(sexo!="F"&&sexo!="M");

		do{
			edad=prompt("Ingrese edad");
			edad=parseInt(edad);
		}	while(isNaN(edad));

		//PUNTO A
		if(sexo=="M"){
			contadorHombres++;			
		} else{
			if(sexo=="F"){
				contadorMujeres++;
			}
		}
		//PUNTO B
		if(sexo=="F"&&sexo=="M"){
			contadorEdad++;
			acumEdad=acumEdad+edad;
		}
		//PUNTO C
		if(banderaMujerMasTemperatura=true&&sexo=="F"){
			banderaMujerMasTemperatura=false;
			temperaturaMax=temperatura;
			mujerMasTemperatura=temperaturaMax;
			nombreMujerMasTemperatura=nombre;
		}	else{
			if(temperatura>temperaturaMax&&sexo=="F"){
			temperaturaMax=temperatura;
			mujerMasTemperatura=temperaturaMax;
			nombreMujerMasTemperatura=nombre;
			} else{
				if(sexo!="F"){
					temperaturaMax="0 porque no hay mujeres";
				}

			}
		}	
		





		











	}

	promedioEdad=acumEdad/contadorEdad;
	console.log("Hay "+contadorHombres+" cantidad de hombres y "+contadorMujeres+" cantidad de mujeres");
	console.log("La edad promedio en total es "+promedioEdad);
	console.log("la mujer con mas temperatura es "+nombreMujerMasTemperatura);

}
