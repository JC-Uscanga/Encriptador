let input = document.querySelector(".cuadroTexto");
let button = document.querySelector(".boton1");
let button2 = document.querySelector(".boton2");
let botoncopiar = document.querySelector(".boton3");
let botonborrar = document.querySelector(".boton4")
let contenidoFinal = document.querySelector(".resultado");



button.onclick = encriptar;
button2.onclick = desencriptar;
botoncopiar.onclick = bcopiar;
botonborrar.onclick = borrarContenidocopy;

function clearContenido(){
    document.getElementById("lol").style.display = "none";
    document.getElementById("noEncontrado").style.display = "none";
    resett.reset();
    
}

function borrarContenidocopy(){

    document.getElementById("copyText").value = "";
    document.getElementById("lol").style.display = "block";
    document.getElementById("noEncontrado").style.display = "block";
    document.getElementById("botoncopiar").style.display = "none";
    document.getElementById("botonborrar").style.display = "none";


}

function mostrarContenido(){
    document.getElementById("botoncopiar").style.display = "block";
}

function encriptar() {
    textoMayusculas(input.value);
    textoMinusculas(input.value);
}

function desencriptar(){
    desencriptarText(input.value);
    document.getElementById("botonborrar").style.display = "block";
    clearContenido();
}

function esMayuscula(letra){
    //return letra === letra.toUpperCase();
    return !!letra && letra != letra.toLocaleLowerCase();

}

function esMinuscula(letra)
{
    return letra === letra.toLowerCase();
} 

function encriptartext(frase){
    frase = frase.split('');

        for (let i = 0; i < frase.length; ++i) {
            switch (frase[i]) {

                case 'e':
                    frase[i] = 'enter';
                    break;

                case 'i':
                    frase[i] = 'imes';
                    break;
              
                case 'a':
                    frase[i] = 'ai';
                    break;
                    
                case 'o':
                    frase[i] = 'ober';
                    break;

                case 'u':
                    frase[i] = 'ufat';
                    break;
                default:

            }
        }

        return frase.join('');
}

function desencriptarText(fraseDes){

        var descripto = fraseDes;
        var msjDesencriptado = "";
    
        for(var i = 0; i < descripto.length; i++){
            
            if(descripto[i] == "a"){
                msjDesencriptado = msjDesencriptado + "a";
                i=i+1;
    
            }
            else if(descripto[i] == "e"){
                msjDesencriptado = msjDesencriptado + "e";
                i=i+4;
    
            }
            else if(descripto[i] == "o"){
                msjDesencriptado = msjDesencriptado + "o";
                i=i+3;
    
            }
            else if(descripto[i] == "u"){
                msjDesencriptado = msjDesencriptado + "u";
                i=i+3;
    
            }
            else if(descripto[i] == "i"){
                msjDesencriptado = msjDesencriptado + "i";
                i=i+3;
    
            }
            else {
                msjDesencriptado = msjDesencriptado + descripto[i];
            }
    
        }
        return contenidoFinal.textContent=msjDesencriptado;
    
}

function textoMayusculas(letra){

    let tipodeLetra = letra;
    
    for(let i = 0; i < tipodeLetra.length; i++){

        let letraActual = tipodeLetra.charAt(i);

        if(esMayuscula(letraActual)){
            alert("Error Texto Contiene Mayusculas");
            clearContenido();
            borrarContenidocopy() 
            resett.reset();
            break;
        }
      
    }
}

function textoMinusculas(letra1){

    let tipodeLetra1=letra1;

    for(let e = 0; e < tipodeLetra1.length; e++){

        let letraActual1 = tipodeLetra1.charAt(e);

        if(esMinuscula(letraActual1)){
            
            console.log(encriptartext(input.value));
            contenidoFinal.textContent = encriptartext(input.value);
            clearContenido();
            mostrarContenido();
            break;
        }
       
    }
}

function bcopiar(){

    let areatextcopy = document.getElementById("copyText");
    navigator.clipboard.writeText(areatextcopy.value).then(() => { borrarContenidocopy() })
}

    







