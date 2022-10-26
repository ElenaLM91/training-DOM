// //let box1 =document.body.firstElementChild.firstElementChild;
// let box1 = document.querySelector("div")
// console.log(box1);
// let box2 = box1.nextElementSibling;
// console.log(box2);
// let box3 = box2.nextElementSibling;
// console.log(box3);

// box1.classList.add("dark");
// box1.classList.remove("dark");
// box2.classList.add("dark");
// console.log(box3.classList.contains("dark"));

// box3.classList.toggle("dark");
// box3.classList.toggle("dark");
// box3.classList.toggle("dark");

let box1 = document.querySelector("div");
console.log(box1);
let box2 = box1.nextElementSibling;
console.log(box2);
let box3 = box2.nextElementSibling;
console.log(box3);

box1.classList.add("dark");
box1.classList.remove("dark");
box2.classList.add("dark");
console.log(box3.classList.contains("light"));

box3.classList.toggle("dark");
box3.classList.toggle("dark");
box3.classList.toggle("dark");

//Atributo dataset
let number = box3.dataset.boxNumber;
console.log(number);
console.log(box3.dataset.month);
// document.body.firstElementChild.innerHTML="<h1>Wow!</h1>";
// //sacamos lo de dentro
// console.log(document.querySelector("section").innerHTML);
// //sacamos desde ese elemento hacia dentro
// console.log(document.querySelector("section").outerHTML);
// //reemplaza desde el propio elemento seleccionado, no su contenido
// document.querySelector("section").outerHTML="<h1>Wow!</h1>";

// //Modify content
// document.body.insertAdjacentHTML("afterbegin", "<nav>navigation</nav>");
// document
//   .querySelector("nav")
//   .insertAdjacentHTML("beforebegin", "<h1>Main Header</h1>");
// document
//   .querySelector("nav")
//   .insertAdjacentHTML("afterend", '<a href="http://www.google.es">Google</a>');
// document
//   .querySelector("nav")
//   .insertAdjacentHTML("afterend", "<p>This is a Paragraph</p>");


//Insertar, borrar, reemplazar nodos en el árbol
//Crear elemento después del contenido (elemento seleccionado)
let header = document.createElement("h1");
header.append("Hello World!");
document.body.append(header);
//crea elemento antes del contenido (elemento seleccionado)
header.prepend("¡");
document.querySelector("h1").firstChild.before("¡¡");
let paragraph = document.createElement("p");
paragraph.textContent= "Writting a paragraph";
document.body.append(paragraph);
// //otro ejemplo, igual que arriba
// document.querySelector("h1").after(paragraph);
document.querySelector("h1").replaceWith(paragraph);
// paragraph.remove();
// document.body.remove();

paragraph.style.textAlign="center";
paragraph.style.textTransform="capitalize";
paragraph.style.backgroundColor="Black";
paragraph.style.color="white";
paragraph.style.padding="2em";
paragraph.setAttribute("class","light");
paragraph.setAttribute("class","main");
console.log(paragraph.getAttribute("class"));
paragraph.classList.add("light");
console.log(paragraph.style.cssText);