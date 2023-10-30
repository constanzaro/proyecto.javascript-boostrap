//TRAER TODAS LAS CATEGORIAS.
const obtenerCategorias= () => fetch('https://fakestoreapi.com/products/categories')
.then(res=>res.json())
.then(json=>json);

//TRAER TODOS LOS PRODUCTOS 
const obtenerProductos=() => fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>json);


//TRAER LOS PRODUCTOS DE CADA CATEGORIA.
const obtenerProductosPorCategoria = (categoria) => fetch(`https://fakestoreapi.com/products/category/${categoria}`) 
.then(res=>res.json())

//LAS FUNCIONES SE SUELEN DECLARAR AFUERA DE LA FUNCION MAIN PARA QUE PUEDAN SER REUTILIZADAS.


// ACA COMIENZA EN MAIN--------------------------------------------------------------------------
const main =async () =>{

//TRAER TODAS LAS CATEGORIAS
const categorias = await obtenerCategorias ();

//MOSTRAR CADA CATEGORIA  Y UBICAR EN CADA UNO DE LAS CARDS (4 CARDS Y 4 CATEGORIAS).
const textoCategorias = Array.from (document.getElementsByClassName('card-category-text'));
console.log (textoCategorias)
//textoCategorias [0].innerHTML =categorias[0] .PARA EVITAR TRAER UNO POR UNO CADA CATEGORIA Y CAMBIAR USAMOS UN METODO DE ARAY. FOR EACH
textoCategorias. forEach ((elemento, index) => elemento.innerHTML =categorias [index])

//TRAER LAS IMAGEN DE LOS PRODUCTOS DE CADA CATEGORIA
// console.log (await obtenerProductosPorCategoria('electronics')) -------FORMA DE HACERLO POR CADA CATEGORIA ---------------------
//BUSCAMOS UNA FORMA DE HACERLO MAS CORTA. POR ESO BUSCAMOS LOS DATOS DE CADA CATEGORIA Y LO TRAEMOS.
const cardsCategorias = Array.from (document.getElementsByClassName('card-category-image'))
categorias.forEach (async (categoria, index) =>{
    const productosCategoria = await obtenerProductosPorCategoria(categoria)
    cardsCategorias [index].setAttribute ('src', productosCategoria[0].image)
})

//MOSTRAR LA IMAGEN DEL PRODUCTO QUE SE OBTUVO DE LA API.
const productos = await  obtenerProductos()

//creamos un arreglo de todos los productos
const cardsProductos = [];
//por cada producto que me trae la API voy agregando al arreglo vacio de la  "const cardsProductos" un elemento
productos.forEach(producto => {
  cardsProductos.push(`
    <div class="card" style="width: 18rem;">
        <img id="imagenProducto" src="${producto.image}" class="card-img-top" alt="${producto.category}" style="width: 50%;">
        <div class="card-body">
          <h4 id="tituloProducto" class="card-text">${producto.title}</h4>
        </div>
      </div>
  `);
})
// le asignamos a ese arreglo que contiene cada producto al div del HTML que contiene la card productos 
const div  = document.getElementById('productos')
div.innerHTML = cardsProductos. join(' ')



}
main ()
  

