export default class Nav {
	#list = []
	#navElem
	constructor(list, navElem) {
		this.#list = list
		this.#navElem = navElem
		this.#createNav()
	}

	#createNav() {
		const navItems = this.#list.map((e) => this.#createNavItem(e)).join("")
		this.#navElem.append(`
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                ${navItems}
            </ul>
        </div>
        `)
	}

	#createNavItem(e) {
		return `
        <li "nav-item">
            <a class="nav-link active" aria-current="page" href="${e.link}">${e.nev}</a>
        </li>
        `
	}
}
