# carritoComponent
Componentes de Carrito de compras para ecommerce de Lidertech.



Para crear la funcionalidad de carrito completa y óptima, se necesitan tres componentes principales.

Cada uno de ellos tendrá una responsabilidad específica y se comunicará directamente con el ControladorService para gestionar el estado del carrito.


# 1. Componente de Producto
Este componente, que puede ser una tarjeta (card) en una galería o la página de detalles de un producto, es el punto de inicio. Su única responsabilidad es permitir que el usuario añada un artículo al carrito.

Lógica: Inyecta el ControladorService y, al hacer clic en el botón de "añadir", llama al método agregarItem() para pasarle el objeto del producto.


# 2. Componente de Vista del Carrito
Este es el componente principal que muestra el contenido del carrito. Generalmente se accede a él a través de una ruta o una ventana modal. Su función es gestionar y mostrar todos los elementos que el usuario ha añadido.

Lógica: Inyecta el ControladorService y accede a la signal coleccion para listar los productos. También utiliza la signal total para mostrar el costo total. Desde aquí, el usuario puede eliminarItem() o guardarColeccion() para finalizar la compra.


# 3. Componente de Resumen del Carrito
Este componente es opcional, pero es clave para una buena experiencia de usuario. Suele ser un ícono o un pequeño resumen en el encabezado de la aplicación que muestra la cantidad de artículos en el carrito.

Lógica: Inyecta el ControladorService y lee la signal totalItems para mostrar la cantidad de artículos, dándole al usuario una vista rápida de su carrito en todo momento.
