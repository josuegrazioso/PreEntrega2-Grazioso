class Carrito {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(nombreProducto, precioProducto) {
      this.productos.push({ id: this.generarId(), nombre: nombreProducto.toLocaleUpperCase(), precio: precioProducto });
      alert("¡Agregaste un Producto!");
    }
  
    eliminarProducto(id) {
      this.productos = this.productos.filter(item => item.id !== id);
      alert("¡Eliminaste un Producto!");
    }
  
    totalProductos() {
      return this.productos.length;
    }
  
    sumaTotal() {
      return this.productos.reduce((total, item) => total + item.precio, 0);
    }
  
    generarId() {
      let max = 0;
  
      this.productos.forEach(item => {
        if (item.id > max) {
          max = item.id;
        }
      });
  
      return max + 1;
    }
  
    listarProductos() {
      let contenido = "Productos agregados:\n\n";
  
      this.productos.forEach(item => {
        contenido += `${item.id} - ${item.nombre} $${item.precio}\n`
      });
  
      return contenido;
    }
  }
  
  let nombre = "";
  const carrito = new Carrito();
  
  // Lista de productos y precios
  const listaProductos = "1- Remera Precio: $5300\n2- Pantalón Precio: $7800\n3- Buzo Precio: $10600";
  alert("Lista de productos y precios:\n\n" + listaProductos);
  
  // Agregamos Productos
  while (nombre.toLocaleUpperCase() !== "SALIR") {
    nombre = prompt("Ingrese el Nombre del Producto: (REMERA, PANTALON, BUZO)\n\n(ESCRIBA SALIR PARA TERMINAR DE SELECCIONAR PRODUCTOS)");
  
    if (nombre.toLocaleUpperCase() === "SALIR") {
      break;
    }
  
    let precio;
    switch (nombre.toLocaleLowerCase()) {
      case "remera":
        precio = 5300;
        break;
      case "pantalon":
        precio = 7800;
        break;
      case "buzo":
        precio = 10600;
        break;
      default:
        alert("Producto no válido. Intente nuevamente.");
        continue;
    }
  
    carrito.agregarProducto(nombre, precio);
  }
  
  // Validar si mi Carrito tiene Productos
  if (carrito.totalProductos() > 0) {
    let id;
  
    // Eliminar Productos
    while (id !== 0) {
      id = parseInt(prompt(carrito.listarProductos() + "\nIngrese el numero del Producto a Eliminar:\n(ESCRIBIR 0 PARA SALIR)"));
  
      if (id > 0) {
        carrito.eliminarProducto(id);
      }
  
      if (carrito.totalProductos() === 0) {
        break;
      }
    }
  
    // Informar el Total de Productos agregados
    alert(`${carrito.listarProductos()}\nTotal a Pagar: $${carrito.sumaTotal()}`);
  } else {
    alert("No se encontraron Productos agregados en el Carrito!");
  }
  