class EventBrits {
	constructor() {
		this.token_auth = 'ABYW7E45LRWZU6VLE63P';
		this.ordenar = 'date';
	}

	async obtenerEventos(evento, categoria) {
		const respuestaEvento = await fetch(
			`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this
				.ordenar}&categories=${categoria}&token=${this.token_auth}`
		);
		// Esperar la respuesta del evento y devolverlo como JSON
		const eventos = await respuestaEvento.json();

		return {
			eventos
		};
    }
    
	// Obteniendo las categorias en init();
	async obtenerCategorias() {
		// Consultar la categorias a la Rest api de evento brits
		const respuestaCategorias = await fetch(
			`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`
		);
		// Esperar las respuesta de las categorias y devolver un json
		const categorias = await respuestaCategorias.json();
		// devolvemos los resultados
		return {
			categorias
		};
	}
}
