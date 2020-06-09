import { Injectable } from '@angular/core';

import { TextCards } from '../models/textCards';

@Injectable({
  providedIn: 'root'
})
export class TextCardsService {

	public textCards: TextCards[];

  constructor() {
  	this.textCards = [
  		new TextCards(1, '¡Bienvenido!'),
  		new TextCards(2, 'Noticias Recientes'),
  		new TextCards(3, 'Nuestros servicios'),
  	];
  }

  getTextCards(): TextCards[] {
  	return this.textCards;
  }
}
