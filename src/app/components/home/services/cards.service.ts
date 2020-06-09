import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable({
	providedIn: 'root'
})

export class CardService {
	public cards: Card[];


	constructor() {
		this.cards = [
			new Card('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'Consultoría', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, at!', '#2f78c6'),
			new Card('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'Formación', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, at!', '#63a7f0'),
			new Card('https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'Análisis', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, at!', '#cec43e'),
			new Card('https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'Investigación', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, at!', '#ce3e3e'),
		];
	}

	getCards() {
		return this.cards;
	}
}