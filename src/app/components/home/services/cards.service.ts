import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable({
	providedIn: 'root'
})

export class CardService {
	public cards: Card[];


	constructor() {
		this.cards = [
			new Card('/assets/img/consultoria.jpg', 'Consultoría', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, at!', '#2f78c6'),
			new Card('/assets/img/formacion.jpg', 'Formación', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, at!', '#63a7f0'),
			new Card('/assets/img/analisis.jpg', 'Análisis', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, at!', '#cec43e'),
			new Card('/assets/img/investigacion.jpg', 'Investigación', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, at!', '#ce3e3e'),
		];
	}

	getCards() {
		return this.cards;
	}
}