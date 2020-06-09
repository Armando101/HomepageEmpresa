import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-cards-text',
  templateUrl: './text-cards-text.component.html',
  styleUrls: ['./text-cards-text.component.scss']
})
export class TextCardsTextComponent implements OnInit {

	@Input() public id: number;

  constructor() { }

  ngOnInit(): void {
  }

}
