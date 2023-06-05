// Crear una lista de productos con sus precios
var productos = {
    'producto1': 10,
    'producto2': 20,
    'producto3': 30,
    'producto4': 40,
    'producto5': 50
  };
  
  // Mostrar la lista de productos al usuario
  var mensaje = 'Seleccione un producto ingresando su número:\n\n';
  var i = 1;
  
  for (var producto in productos) {
    mensaje += i + '. ' + producto + '\n';
    i++;
  }
  
  // Pedir al usuario que seleccione un producto
  var seleccion = parseInt(prompt(mensaje));
  
  // Validar la selección del usuario
  if (seleccion > 0 && seleccion <= Object.keys(productos).length) {
    var indice = seleccion - 1;
    var productoSeleccionado = Object.keys(productos)[indice];
    var precioProducto = productos[productoSeleccionado];
  
    // Calcular el costo final
    var cantidad = parseInt(prompt('Ingrese la cantidad deseada para ' + productoSeleccionado + ':'));
    var costoFinal = precioProducto * cantidad;
  
    // Mostrar el resultado al usuario
    alert('Producto seleccionado: ' + productoSeleccionado + '\nCantidad: ' + cantidad + '\nCosto Final: ' + costoFinal);
  } else {
    alert('Selección inválida. Por favor, vuelva a intentarlo.');
  }
  