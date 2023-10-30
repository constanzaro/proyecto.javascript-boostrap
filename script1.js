const obtenerCategorias= () => fetch('https://fakestoreapi.com/products/categories')
.then(res=>res.json())
.then(json=>json);

//TRAER UN SOLO PRODUCTO 
const obtenerUnProducto=() => fetch('https://fakestoreapi.com/products/1')
.then(res=>res.json())
.then(json=>json)

// TRAER TODAS LAS CATEGORIAS Y MOSTRAR POR CONSOLA
const main =async () =>{
const categorias = await obtenerCategorias ();
console.log (categorias);

//MOSTRAR CADA CATEGORIA  Y UBICAR EN CADA UNO DE LAS CARDS (4 CARDS Y 4 CATEGORIAS).
const textoCategorias = Array.from (document.getElementsByClassName('card-category-text'));
console.log (textoCategorias)
//textoCategorias [0].innerHTML =categorias[0] .PARA EVITAR TRAER UNO POR UNO CADA CATEGORIA Y CAMBIAR USAMOS UN METODO DE ARAY. FOR EACH
textoCategorias. forEach ((elemento, index) => elemento.innerHTML =categorias [index])

//MOSTRAR LA IMAGEN DEL PRODUCTO QUE SE OBTUVO DE LA API.(SOLO UN PRODUCTO, EL PRODUCTO [0])
const producto = await  obtenerUnProducto()
const imagen =document.getElementById ('imagenProducto')
imagen.setAttribute ('src', producto.image)

//MOSTRAR EL TITULO DEL PRODUCTO QUE SE OBTUVO DE LA API. (SOLO UN PRODUCTO [0])
const titulodelP= document.getElementById('tituloProducto')
titulodelP.innerText = producto.title;


//COMO TRAER TODOS LOS PRODUCTOS Y CREAR SUS CARDS CON JS.
// const containerProducts = document.getElementsByClassName('container row gap-3 my-5')
//     const cardProductos = []
//     products.forEach(prod => cardProductos.push(`<div class="card" style="width: 18rem;">
//         <img src="${prod.image}" class="card-img-top img-fluid p-3" alt="foto producto" style="height: 250px;">
//         <div class="card-body">
//             <h5 class="card-text">${prod.title}</h5>
//         </div>
//     </div>`))
//     containerProducts[1].innerHTML = cardProductos.join(' ')
}


main ()