//Codigo JavaScript como archivo Externo

//Definir variables

var vNumAhorcado = 0; //Armar la figura del ahorcado
var vNumAceptados = 0; //Conocer cuantas letras se han adivinado

var vPalabraActual = "";
var arrayPalabraJugar = new Array(); //Saber con que palabra se está jugando dentro del turno, y ayuda a separar la palabra por letras
var arrayPalabras = new Array("PARIS","TURIN","VIENA","BERNA","MILAN","PRAGA","SOCHI","MOSCU","IBIZA");

var vCantidad = 8; //Definir la cantidad de palabras dentro del juego

var arrayAlfabeto = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z");

var perdidos=0; //Puntos cada vez que pierde el juego
var ganados=0; //Puntos cada vez que gana el juego

//Codigo Principal
funInicioJuego()

//Definir funciones

function funInicioJuego(){
    //Inicializa valores
    vPalabraActual = "";
    vNumAceptados = 0;
    vNumAhorcado = 0;

    //Limpia cajas en pantalla
    document.getElementById("txtletra1").innerText = "";
    document.getElementById("txtletra2").innerText = "";
    document.getElementById("txtletra3").innerText = "";
    document.getElementById("txtletra4").innerText = "";
    document.getElementById("txtletra5").innerText = "";

    //Limpiar recuadro resultado del juego
    document.getElementById("txtPalabra").innerText = "";

    //Ocultar figura del monigote
    document.getElementById("ahorcado_img").innerHTML = "";

    //Inicializar puntos ganados y perdidos
    document.getElementById("marcador1").innerHTML = ganados;
    document.getElementById("marcador2").innerHTML = perdidos;

    //Habilitar los botones del juego
    funHabilitarBotones();
    //Buscar una palabra nueva para el turno actual
    funBuscarPalabra();

}//fin function

function funAhorcado(vLetraPresionada){
    document.getElementById(vLetraPresionada).style.pointerEvents = "none";
    document.getElementById(vLetraPresionada).style.backgroundColor = "rgb(29, 26, 7)";
    document.getElementById(vLetraPresionada).style.color = "#fff";

    //Validar la letra
    funValidaLetra(vLetraPresionada);
}//fin function

function funHabilitarBotones(){
    //Habilitar uso de click y restablece color de fondo
    for(i=0; i<arrayAlfabeto.length; i++){
        document.getElementById(arrayAlfabeto[i]).style.pointerEvents = "auto";
        document.getElementById(arrayAlfabeto[i]).style.backgroundColor = "rgb(242, 255, 184)";
        document.getElementById(arrayAlfabeto[i]).style.color = "rgb(29, 26, 7)";
    }    
}//fin function

function funBuscarPalabra(){
    //Variables Locales
    var vNumAzar=0;

    //Limpiar arreglo
    arrayPalabraJugar = new Array();
    //Buscar un número al azar
    vNumAzar = Math.round(Math.random() * vCantidad);
    //Busca de la colección de palabras, la palabra a jugar
    vPalabraActual = arrayPalabras[vNumAzar];

    //Dividir la palabra en letras y guardarlo en una posición del arreglo
    arrayPalabraJugar[0] = vPalabraActual.substring(0,1);
    arrayPalabraJugar[1] = vPalabraActual.substring(1,2); 
    arrayPalabraJugar[2] = vPalabraActual.substring(2,3); 
    arrayPalabraJugar[3] = vPalabraActual.substring(3,4); 
    arrayPalabraJugar[4] = vPalabraActual.substring(4);  
    // substring -> devolver todas las letras que estén dentro de un rango

}//fin function

function funValidaLetra(vLetraEscogida){
    //Variable Local
    var vBanderaFigura = false; //Sirve para armar la figura de ahorcado

    //Recorre el arreglo que contiene la palabra a jugar en el turno
    for(var i=0; i<5; i++){
        //Comparar letra que se presionó con las letras del arreglo
        if(arrayPalabraJugar[i] == vLetraEscogida){
            //Adivino la letra
            vBanderaFigura = true; //Si encuentra la letra, no dibuja la figura de ahorcado
            vNumAceptados++; //Contador para saber si adivina todas las letras correctamente
            switch(i){
                case 0:
                    document.getElementById("txtletra1").innerText = vLetraEscogida;
                    break;
                case 1:
                    document.getElementById("txtletra2").innerText = vLetraEscogida;
                    break;
                case 2:
                    document.getElementById("txtletra3").innerText = vLetraEscogida;
                    break;
                case 3:
                    document.getElementById("txtletra4").innerText = vLetraEscogida;
                    break;
                case 4:
                    document.getElementById("txtletra5").innerText = vLetraEscogida;
                    break;
            }//fin switch
        }//fin if
    }//fin for

    //Letra no está en el arreglo
    if(vBanderaFigura==false){
        vNumAhorcado++;

        //Mostrar mensaje que indique perdió el juego
        if(vNumAhorcado == 6){
            document.getElementById("txtPalabra").innerText = "¡Perdiste!, no adivinaste la ciudad: "+vPalabraActual;
            document.getElementById("txtPalabra").style.color="rgb(90, 22, 22)";
            //Aumentar puntos si pierde el juego
            perdidos++;
            document.getElementById("marcador2").innerHTML=perdidos;
            //Desactivar todos los botones si pierde
            funDesactivaBotones();
        }

        //Construir la figura del ahorcado
        switch(vNumAhorcado){
            case 1:
                //Mostrar primera imagen
                document.getElementById("ahorcado_img").innerHTML = ("<img src='img/figura1.png' alt='Ahorcado'>");
                break;
            case 2:
                //Ocultar primera imagen
                document.getElementById("ahorcado_img").innerHTML = ("<img src='img/figura1.png' alt='Ahorcado'>");
                document.getElementById("ahorcado_img").style.display = "none";
                //Mostrar segunda imagen
                document.getElementById("ahorcado_img").innerHTML = ("<img src='img/figura2.png' alt='Ahorcado'>");
                document.getElementById("ahorcado_img").style.display = "block";
                break;
            case 3:
                //Ocultar segunda imagen
                document.getElementById("ahorcado_img").innerHTML = ("<img src='img/figura2.png' alt='Ahorcado'>");
                document.getElementById("ahorcado_img").style.display = "none";
                //Mostrar tercera imagen
                document.getElementById("ahorcado_img").innerHTML = ("<img src='img/figura3.png' alt='Ahorcado'>");
                document.getElementById("ahorcado_img").style.display = "block";
                break;
            case 4:
                //Ocultar tercera imagen
                document.getElementById("ahorcado_img").innerHTML = ("<img src='img/figura3.png' alt='Ahorcado'>");
                document.getElementById("ahorcado_img").style.display = "none";
                //Mostrar cuarta imagen
                document.getElementById("ahorcado_img").innerHTML = ("<img src='img/figura4.png' alt='Ahorcado'>");
                document.getElementById("ahorcado_img").style.display = "block";
                break;
            case 5:
                //Ocultar cuarta imagen
                document.getElementById("ahorcado_img").innerHTML = ("<img src='img/figura4.png' alt='Ahorcado'>");
                document.getElementById("ahorcado_img").style.display = "none";
                //Mostrar quinta imagen
                document.getElementById("ahorcado_img").innerHTML = ("<img src='img/figura5.png' alt='Ahorcado'>");
                document.getElementById("ahorcado_img").style.display = "block";
                break;
            case 6:
                //Ocultar quinta imagen
                document.getElementById("ahorcado_img").innerHTML = ("<img src='img/figura5.png' alt='Ahorcado'>");
                document.getElementById("ahorcado_img").style.display = "none";
                //Mostrar sexta imagen
                document.getElementById("ahorcado_img").innerHTML = ("<img src='img/figura6.png' alt='Ahorcado'>");
                document.getElementById("ahorcado_img").style.display = "block";
                break;
        }//fin switch
    }//fin if

    //Usuario gana la partida, adivina todas las letras
    if(vNumAceptados == 5){
        document.getElementById("txtPalabra").innerText = "¡Felicidades! has adivinado la ciudad: "+vPalabraActual;
        document.getElementById("txtPalabra").style.color="rgb(20, 98, 143)";
        //Aumentar puntos si gana el juego
        ganados++;
        document.getElementById("marcador1").innerHTML=ganados;
        //Desactivar todos los botones si gana
        funDesactivaBotones();
    }

}//fin function

function funDesactivaBotones(){
    //Desactiva el puntero
    for(i=0; i<arrayAlfabeto.length; i++){
        document.getElementById(arrayAlfabeto[i]).style.pointerEvents = "none";
    }
}//fin function