const eventbrite = new EventBrits();
const ui = new Interfaz();

document.getElementById('buscarBtn').addEventListener('click', (e) => {
	e.preventDefault();

	// leer el texto del input buscar
	const textoBuscar = document.getElementById('evento').value;

	// leer el select
	const categorias = document.getElementById('listado-categorias');
	const categoriasSeleccionada = categorias.options[categorias.selectedIndex].value;

	// Revisar que haya algo escrito en el buscador
	if (textoBuscar !== '') {
		// cuando si hay una busqueda
        eventbrite.obtenerEventos(textoBuscar, categoriasSeleccionada)
        .then((eventos) => {
			if(eventos.eventos.events.length > 0){
                // Si hay eventos, mostrar el resultado
                ui.limpiarResultados();
                ui.mostrarEventos(eventos.eventos);
            } else {
                // No hay eventos enviar una alerta 
                ui.mostrarMensaje('No hay resultados', 'alert alert-danger mt-4');
            }
		});
	} else {
		ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4');
	}
});
