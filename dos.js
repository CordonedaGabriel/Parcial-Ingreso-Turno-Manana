/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  var respuesta;
  var marca;
  var precio;
  var peso;
  var tipo;
  //punto A
  var contadorPeso=0;
  var acumPeso=0;
  var pesoTotal;
  //punto B
  var banderaLiquidoMasCaro=true;
  var liquidoMasCaro;
  var marcaLiquidoMasCaro;
  //punto C
  var banderaSolidoMasLiviano;
  var solidoMasLiviano;
  var marcaSolidoLiviano;




  respuesta=true;

  while(respuesta){

    marca=prompt("ingrese marca");
    
    do{
      precio=prompt("ingrese precio");
      precio=parseInt(precio);
    } while(isNaN(precio));

    do{
      peso=prompt("ingrese peso en kilogramos");
      peso=parseInt(peso);
    } while(isNaN(peso));

    do{
      tipo=prompt("ingrese si el producto es sólido o líquido");
    } while(tipo!="sólido"&&tipo!="líquido");

    //punto A
    acumPeso=acumPeso+peso
    contadorPeso++;
    pesoTotal=acumPeso

    //punto B
    if(banderaLiquidoMasCaro=true&&tipo=="líquido"){
      banderaLiquidoMasCaro=false;
      liquidoMasCaro=precio;
      marcaLiquidoMasCaro=marca;
    } else{
      if(precio>liquidoMasCaro){
        liquidoMasCaro=precio;
        marcaLiquidoMasCaro=marca;
      }
    }

    //Punto C
    if(banderaSolidoMasLiviano=true&&tipo=="sólido"){
      banderaSolidoMasLiviano=false;
      solidoMasLiviano=peso;
      marcaSolidoLiviano=marca;
    } else{
      if(peso>solidoMasLiviano){
        solidoMasLiviano=precio;
        marcaSolidoLiviano=marca;
      }
    }

  

    respuesta=confirm("Desea continuar?");
  }
  console.log("el peso total es de "+pesoTotal);
  console.log("la marca del mas caro de los liquidos es "+marcaLiquidoMasCaro);
  console.log("la marca del mas liviano de los solidos es "+marcaSolidoLiviano);
}
