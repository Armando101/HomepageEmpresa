import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './components/home/components/cards/cards.component';
import { CardComponent } from './components/home/components/card/card.component';
import { TextCardsComponent } from './components/home/components/text-cards/text-cards.component';
import { TextCardsTextComponent } from './components/home/components/text-cards-text/text-cards-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    HomeComponent,
    CardsComponent,
    CardComponent,
    TextCardsComponent,
    TextCardsTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
