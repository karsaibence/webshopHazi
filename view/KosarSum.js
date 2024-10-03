export default class KosarSum {
	#fullprice
	#itemDiv
	constructor(fullprice, itemDiv) {
		this.#fullprice = fullprice
		this.#kiir
		this.#itemDiv = itemDiv
		this.#kiir()
	}
	#kiir() {
		this.#itemDiv.append(
			`
            <div>
                <h5>Összesen: ${this.#fullprice}Ft</h5>
            </div>
            `
		)
	}
}
