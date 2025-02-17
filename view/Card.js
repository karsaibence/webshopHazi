export default class Card {
	#item
	#itemElement
	constructor(item, itemElement) {
		this.#item = item
		this.#itemElement = itemElement
		this.#createCard()
		this.selected = $(".kivalaszt:last")
		this.#clickEvent()
	}
	#createCard() {
		this.#itemElement.append(
			`
                <div class="col">
                    <div class="card h-100">
                        <img src="./images/${this.#item.url}" class="card-img-top" alt="${this.#item.name}"></img>
                        <div class="card-body">
                            <h5 class="card-title">${this.#item.name}</h5>
                            <p class="card-text">${this.#item.leiras}</p>
                            <div class="card-footer">
                                <button class="btn kivalaszt btn-primary btn-sm">Vásárlás</button>
                                <h6>Ár: <b>${this.#item.price}</b>Ft</h6>
                            </div>
                        </div>
                    </div>
                </div>
            `
		)
	}
	#clickEvent() {
		this.selected.on("click", (event) => {
			const e = new CustomEvent("kivalaszt", {detail: this.#item})
			window.dispatchEvent(e)
		})
	}
}
