//Capturo la clase .button es un botón elongado en html
const button=document.querySelector(".button")
//Imprimo en consola para confirmar de estar en el sitio correcto
console.log(button);
//Capturo la clase .button-circle es un circulo en html
const toggle=document.querySelector(".button-circle")
//Imprimo en consola para confirmar de estar en el sitio correcto
console.log(toggle);

//Capturo el id h1 es un h1 en html
const h1=document.getElementById("h1")
//Capturo el id body es el body en html
const body=document.getElementById("body")

const toggledp=document.querySelector(".flex-p");

//Creo un evento, al hacer click cambiará caolor con la función cambiarColor que definiré a continuación
toggle.addEventListener("click",cambiarColor);

function cambiarColor(){
    //Al hacer click en el botón verde aparecerá en la consola, funciona. Eso implicará 
    //que está escuchando el evento al hacer click enciama del botón redondo 
    console.log("Funciona")
    //Añado una clase y remuevo la existencia en stylesheet de la clase button-circle pondré una clase 
    //con el nombre cambiarBotón de background-color rosa y con las mismas dimensiones del botón de antes
    //puedo hacerlo con toggle.classList.add("cambiarBotón") y toggle.classListe.remove("button-circle")
    //o con la función toggle de Js
toggle.classList.toggle("cambiarBotón");
toggle.classList.toggle("button-circle");
//esto me permitirá cambiar el color de la escrita de h1
h1.classList.toggle("toggledh1");
//esto me permitirá cambiar el color del body al darle al botón
body.classList.toggle("toggledbody");
toggledp.classList.toggle("toggledp");

};
    

