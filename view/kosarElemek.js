export default class kosarElemek {
	#termekek = []
	#itemDiv
	constructor(termekek, itemDiv) {
		this.#termekek = Array.isArray(termekek) ? termekek : []
		this.#itemDiv = itemDiv
		this.kiir()
	}
	kiir() {
		const kosarItems = this.#termekek.map((e) => this.#tableBodyItem(e)).join("")
		this.#itemDiv.append(
			`
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">név</th>
                        <th scope="col">ár</th>
                        <th scope="col">Mennyiség</th>
                    </tr>
                </thead>
                <tbody>
                    ${kosarItems}
                </tbody>
            </table>
            `
		)
	}
	#tableBodyItem(item) {
		return `
            <tr>
                <th scope="row">${item.id}</th>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td><button>-</button>${item.mennyiseg}<button>+</button></td>
            </tr>
        `
    }
}
