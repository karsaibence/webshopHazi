export default class KosarModell {
	#kosarList = []

	constructor() {
		this.loadKosar()
	}

	addKosar(item) {
		const existingItem = this.#kosarList.find((i) => i.name === item.name)
		if (existingItem) {
			existingItem.mennyiseg++ // Növeljük a mennyiséget, ha már létezik
			existingItem.price = existingItem.mennyiseg * item.price
		} else {
			item.mennyiseg = 1 // Kezdő mennyiség 1
			this.#kosarList.push(item)
		}
		this.saveKosar()
	}

	saveKosar() {
		sessionStorage.setItem("kosar", JSON.stringify(this.#kosarList))
	}

	loadKosar() {
		const kosarData = sessionStorage.getItem("kosar")
		if (kosarData) {
			this.#kosarList = JSON.parse(kosarData)
		}
	}
	getKosar() {
		const lista = this.#kosarList
		return lista
	}
	clearKosar() {
		this.#kosarList.splice(0, this.#kosarList.length)
	}
	removeItemFromKosar(item) {
		const i = 0
		while (item.id != this.#kosarList.id && i < this.#kosarList.length) {
			i++
		}
		if (i < this.#kosarList.length) {
			W
			this.#kosarList.splice(i, 1)
		}
	}
	getSumPrice(list) {
		return list.reduce((sum, e) => sum + e.price, 0)
	}
}
