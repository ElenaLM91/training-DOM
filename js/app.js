// console.log("working!");
// //el elemento padre
// document.body.parentNode
// //total de elementos hijos
// document.body.children.length
// document.body.childElementCount
// //primer elemento hijo
// document.body.children[0]
// //primer y último nodos hijos
// document.body.firstElementChild
// document.body.lastElementChild
// //siguiente y anterior hermano
// document.body.nextElementSibling
// document.body.previousElementSibling

//seleccionar elementos desde js
let nav = document.querySelector("nav");
// console.log(nav); //muestra elemento nav por consola

//seleccionar elemento con clase
let active = document.querySelector(".active");
// console.log(active);

//seleccionar multiples elementos con la misma etiqueta
let headersAndParagraphs = document.querySelectorAll("p, h1");
// console.log(headersAndParagraphs[0].innerText); //se accede a un elemento con los corchetes y a su contenido con .innerText

// //Accediendo a los elementos hijos mediante .children[numHijo]
// console.log(nav.children[0].children[0].children[0]);

// .innerHTML: saca el enlace, .innerText: ignora todo lo que no sea texto
// console.log(
//   nav.firstElementChild.firstElementChild.
//   firstElementChild.parentNode.nextElementSibling.
//   firstElementChild.firstChild.parentNode);

// console.log(headersAndParagraphs[2]);
// console.log(headersAndParagraphs[0].nextElementSibling.
//     nextElementSibling.nextElementSibling);
    let main = document.querySelector(`#first`);
// console.log(main);
// console.log(nav.firstElementChild.lastElementChild.
//     firstElementChild.firstChild);
// console.log(nav.firstElementChild.childElementCount);
// console.log(nav.firstElementChild.children.length);
// console.log(nav.firstElementChild.childNodes);
// console.log(nav.firstElementChild.firstChild.nodeValue);

//Nombre del Nodo en mayus
// console.log(nav.firstElementChild.nodeName);
// console.log(nav.firstElementChild.firstChild.nextSibling
//     .nextSibling.previousSibling);