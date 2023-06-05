// Definición de los productos iniciales
var productos = [
    { nombre: "Remera", precio: 5700 },
    { nombre: "Pantalón", precio: 7200 },
    { nombre: "Buzo", precio: 9500}
  ];
  
  // Función para mostrar los productos disponibles
  function mostrarProductos() {
    console.log("Productos disponibles:");
    for (var i = 0; i < productos.length; i++) {
      console.log(i + 1 + ". " + productos[i].nombre + " - Precio: $" + productos[i].precio);
    }
  }
  
  // Función para agregar un producto al carrito
  function agregarProducto(carrito, indice) {
    var producto = productos[indice];
    carrito.push(producto);
    console.log(producto.nombre + " agregado al carrito.");
  }
  
  // Creación del carrito vacío
  var carrito = [];
  
  // Mostrar los productos disponibles inicialmente
  mostrarProductos();
  
  // Agregar productos al carrito
  agregarProducto(carrito, 0); // Agregar el Producto 1
  agregarProducto(carrito, 2); // Agregar el Producto 3
  
  // Mostrar los productos en el carrito
  console.log("Productos en el carrito:");
  for (var i = 0; i < carrito.length; i++) {
    console.log(i + 1 + ". " + carrito[i].nombre + " - Precio: $" + carrito[i].precio);
  }
  