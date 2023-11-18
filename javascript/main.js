const carrito = []

const productosDeportivos = [{codigo: 1, nombre: 'Zapatos para correr', precio: 150}
                             [{codigo: 2, nombre: 'Zapatos para jugar futbol', precio: 50}]
                             [{codigo: 3, nombre: 'Pelota de futbol', precio: 70}]
                             [{codigo: 4, nombre:'Pelota de beisbol', precio: 20}]]

 function buscarproductosDeportivos(codigo) {
    let productoElegido = productosDeportivos.find((productosDeportivos)=> productosDeportivos.codigo === codigo )
    return productoElegido
}


function comprar() {
    let codigo = prompt("Ingrese el codigo del producto deportivo a comprar, por favor")
    let productoElegido = buscarProductoDeportivo(parseInt(codigo))

    if (productoElegido !== undefined) {
        
        carrito.push(productoElegido)    
        alert(productoElegido.nombre + " se agrego al carrito.")
        let respuesta = confirm("¿Deseas elegir otro producto deportivo?")
        if (respuesta === true) {
            comprar()                
        } else {                       
            console.clear()             
            const shop = new Compra(carrito)
            let subtotal = shop.obtenerSubtotal()
            console.table(carrito)
            console.log("El costo de tu compra es: $")
        }

    } else {
        alert("Error en el codigo del producto ingresado. Por favor, ingrese el codigo correcto.")
    }
}

