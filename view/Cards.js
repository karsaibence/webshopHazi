import Card from "./Card.js"

export default class Cards {
	#list = []
	#divElement
	constructor(list, divElement) {
		this.#list = list
		this.#divElement = divElement
		this.#createCards()
	}
	#createCards() {
		this.#list.forEach((e) => {
			this.#divElement.append(new Card(e, this.#divElement))
		})
	}
}
