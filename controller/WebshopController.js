import WebshopModell from "../modell/WebshopModell.js"
import Nav from "../view/Nav.js"
import {nav} from "../navItems.js"
import Cards from "../view/Cards.js"
import {termekek} from "../termekek.js"

export default class WebshopController {
	constructor() {
		this.webModell = new WebshopModell()
		this.navDiv = $("nav")
		this.nav = new Nav(nav, this.navDiv)
		this.cardsElem = $(".kartyak")
		this.cards = new Cards(termekek, this.cardsElem)
	}
}
