/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	
	var respuesta;
	var nombre;
	var lugar;
	var temporada;
	var cantidadViajantes;
	//Punto A;
	var lugarMasElegido;
	var banderaLugarMasElegido=true;
	//Punto B
	var banderaMasPasajeros=true;
	var titularConMasPasajeros;
	var nombreTitularConMasPasajeros;
	//punto C
	var viajantesInvierno;
	var promedio;
	var acumViajantesInvierno=0;
	var contadorViajantesInvierno=0;



	respuesta=true;

	while(respuesta){
		nombre=prompt("ingrese nombre del titular");
		do{
			lugar=prompt("ingrese el lugar");
		}	while(lugar!="bariloche"&&lugar!="cataratas"&&lugar!="salta");
		do{
			temporada=prompt("ingrese si la temporada es otoño,verano,invierno o primavera");
		}	while(temporada!="otoño"&&temporada!="verano"&&temporada!="invierno"&&temporada!="primavera");
		do{
			cantidadViajantes=prompt("ingrese la cantidad de viajantes");
			cantidadViajantes=parseInt(cantidadViajantes);
			}	while(isNaN(cantidadViajantes));

		//Punto A


			
		
		//Punto B
		if(banderaMasPasajeros=true){
			banderaMasPasajeros=false;
			titularConMasPasajeros=cantidadViajantes;
			nombreTitularConMasPasajeros=nombre;
		}	else{
			if(cantidadViajantes>titularConMasPasajeros){
			titularConMasPasajeros=cantidadViajantes;
			nombreTitularConMasPasajeros=nombre;
			}
		}
		//Punto C
		if(temporada=="invierno"){
			viajantesInvierno=cantidadViajantes;
			acumViajantesInvierno=acumViajantesInvierno+cantidadViajantes;
			contadorViajantesInvierno++;
		}






		respuesta=confirm("Desea continuar?");
	}
	promedio=acumViajantesInvierno/contadorViajantesInvierno;
	console.log("el nombre del titular con mas pasajeros es "+nombreTitularConMasPasajeros);
	console.log("el promedio de personas por viaje en invierno es de "+promedio);

}
