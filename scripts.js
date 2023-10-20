//alert("Hola este es mi Javascript");
//let nom ="Laura";//vatiable qque se modifica
//var nom1 ="Tatiana";
//const nom2 ="Nieto"; //vatiables no modificable

//Mostrar en consola
//console.log(nom);
//console.log(nom1);
//console.log(nom2);

//SELECCIONAR ELEMENTOS
let contTitulo = "LTNP";
let titulo =document.querySelector(".nombre")
titulo.innerHTML = contTitulo;

//CONDICIONALES
let textoT = titulo.innerText;
console.log(textoT);

if(textoT == "LTNP"){
    titulo.innerHTML = "LTatiana";
} else{
    console.log("no cumple");
}

//FUNCIONES
let ciudad = "Bogotá";
let gustos = "Postres";
let hobbie = "Manualidaes";

let parrafo = document.querySelector(".parrafo2");

function cambiotxt(ciudad, gustos, hobbie) {
    let contenido = `Actualmente trabajo en ${ciudad}, mi comida favorita son los ${gustos} y duran mi tiempo libre me dedico a realizar ${hobbie}.`;
    return contenido;
};

parrafo.innerText = cambiotxt(ciudad, gustos,hobbie);


// Interacción para desplegar el menú

//let menu_responsive = document.querySelector(".toggle-menu");
      //menu_responsive.onclick = function () {
        //navBar = document.querySelector(".main-nav");
        //navBar.classList.toggle("active");
//};

//INTERACCIONES MENÚ------------------------------------------------------
const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');

toggleMenuElement.addEventListener('click',()=>{
    mainMenuElement.classList.toggle('main-menu--show');
});


//ALERTAS PARA EL FORMULARIO------------------------------------------------------
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() { //valida la extención del nombre
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});
