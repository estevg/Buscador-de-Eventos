class Interfaz {
	constructor() {
		// Inicializa la app al instaciar
		this.init();
		// Leer los resultados
		this.listado = document.getElementById('resultado-eventos');
	}
	// Metodo para inicializar la app
	init() {
		// Llamamos para imprimir categorias de una rest api
		this.imprimirCategorias();
	}

	// Imprimir categorias
	imprimirCategorias() {
		const listaCategoria = eventbrite.obtenerCategorias().then((categorias) => {
			const cats = categorias.categorias.categories;

			const selectCategorias = document.getElementById('listado-categorias');

			cats.forEach((cat) => {
				// console.log(cat);
				const option = document.createElement('option');
				option.value = cat.id;
				option.appendChild(document.createTextNode(cat.name_localized));
				selectCategorias.appendChild(option);
			});
		});
    }
    

    // Lee la respuesta de la api e imprime los resultados
    mostrarEventos(eventos){
        // lee los eventos y agregarlos a una variable
        const listaEventos = eventos.events;
        console.log(listaEventos);
        this.listado.innerHTML = '';
        // recorrer los eventos y crear su template
        listaEventos.forEach(evento => {
            this.listado.innerHTML += `
            <div class="col-md-4 mb-4">
                            <img class="img-fluid mb-2" src="${evento.logo !== null ? evento.logo.url : ''}">
                    <div class="card-body">
                        <div class="card-text">
                            <h2 class="text-center">${evento.name.text}</h2>
                            <p class="lead text-info">Informacion del evento</p>
                            <p>${evento.description.text.substring(0, 100)}...</p>

                            <span class="badge badge-primary">Capacidad: ${evento.capacity}</span>
                            <span class="badge badge-secondary">Fecha y hora: ${evento.start.local}</span>
                            <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos</a>
                        </div>
                    </div>
            </div>
            `;
        })
    }

    limpiarResultados(){
        this.listado.innerHTML = '';
    }

	// Metodo para imprimir: 2 parametros, mensaje y clases
	mostrarMensaje(mensaje, clases) {
		const div = document.createElement('div');
		div.classList = clases;
		// agregar texto
		div.appendChild(document.createTextNode(mensaje));
		// buscador padre
		const buscadorDiv = document.querySelector('#buscador');
		buscadorDiv.appendChild(div);
		// Quitar el alert despues de 3 segundos
		setTimeout(() => {
			this.limpiarMensaje();
		}, 3000);
	}

	// Desaparece el mensaje
	limpiarMensaje() {
		const alert = document.querySelector('.alert');
		if (alert) {
			alert.remove();
		}
	}
}
