import WebshopModell from "../modell/WebshopModell.js"
import Nav from "../view/Nav.js"
import {nav} from "../navItems.js"
import Cards from "../view/Cards.js"
import {termekek} from "../termekek.js"
import kosarElemek from "../view/kosarElemek.js"
import KosarModell from "../modell/KosarModell.js"
import KosarSum from "../view/KosarSum.js"

export default class WebshopController {
	constructor() {
		this.webModell = new WebshopModell(termekek)
		this.kosarMod = new KosarModell()
		this.navDiv = $("nav")
		this.nav = new Nav(nav, this.navDiv)
		this.cardsElem = $(".kartyak")
		this.cards = new Cards(termekek, this.cardsElem)
		this.kosarTable = $(".kosar")
		this.kosarOsszegzes = $(".sum-price")
		this.renderKosar()
		this.setItemEventListener()
	}
	setItemEventListener() {
		$(window).on("kivalaszt", (event) => {
			this.kosarMod.addKosar(event.detail)
			this.renderKosar()
		})
	}
	renderKosar() {
		this.kosarMod.loadKosar() 
		const kosarItems = this.kosarMod.getKosar()
		this.itemsTable = new kosarElemek(kosarItems, this.kosarTable)
		this.sumPrice = new KosarSum(this.kosarMod.getSumPrice(kosarItems), this.kosarOsszegzes)
	}
}
