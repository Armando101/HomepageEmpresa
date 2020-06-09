import { Component, OnInit } from '@angular/core';

import { TextCards } from '../../models/textCards';
import { TextCardsService } from '../../services/text-cards.service';

@Component({
  selector: 'app-text-cards',
  templateUrl: './text-cards.component.html',
  styleUrls: ['./text-cards.component.scss']
})
export class TextCardsComponent implements OnInit {

	public textCards: TextCards[];

  constructor(
  	private _textCardsService: TextCardsService
  ) { }

  ngOnInit(): void {
  	this.textCards = this._textCardsService.getTextCards();
  }

}
