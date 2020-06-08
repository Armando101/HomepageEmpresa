import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../../models/card';
import { CardService } from '../../services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

	@Input() cards:Card[];

  constructor(
  	private _cardService: CardService
  ) { }

  ngOnInit(): void {
  	this.cards = this._cardService.getCards();
  }

}
