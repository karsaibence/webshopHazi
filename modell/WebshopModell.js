export default class WebshopModell {
	#termekList = []

	constructor(list) {
		this.#termekList = list
	}

	getTermekList() {
		const lista = this.#termekList
		return lista
	}
	addTermek(item) {
		this.#termekList.push(item)
	}
}
