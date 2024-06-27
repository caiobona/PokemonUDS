import { Injectable } from '@angular/core';
import { Deck } from '../models/deck';

@Injectable({
  providedIn: 'root'
})
export class GlobalContextService {

  constructor() { }

  Decks: Array<Deck> = [];
  cards: Array<any> = [];

  returnDecks(): any {
    let deckComplete = {
      name: '',
      cards: [],
    }
    let contador = 0;
    for (let deck of this.Decks) {
      deckComplete.name = deck.name;
      this.cards[contador].push()
      this.cards.push(deck.cards)
      contador++;
    }
    let deckInteiro = {
      name: deckComplete.name,
      cards: this.cards,
    }

    return deckInteiro;
  }
}
