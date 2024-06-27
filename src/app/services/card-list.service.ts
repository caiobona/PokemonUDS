import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardListService {

  constructor(private http: HttpClient) { }

  local = "http://localhost:3000/decks";
  urlApiPokemon = "https://api.pokemontcg.io/v2/";
  pageSize = 20;

  getAll(): Observable<any>{
    return this.http.get<any>(`${this.urlApiPokemon}cards?pageSize=${this.pageSize}`);
  }
  getCardByName(name: string): Observable<any>{
    return this.http.get<any>(`https://api.pokemontcg.io/v2/cards?q=name:${name}`);
  }
  getCardByPage(page: any): Observable<any>{
    return this.http.get<any>(`${this.urlApiPokemon}cards?pageSize=${this.pageSize}&page=${page}`);
  }
  getDecks(): Observable<any>{
    return this.http.get<any>(`${this.local}`);
  }
  createDeck(deck: any): Observable<any>{
    return this.http.post<any>(`${this.local}`, deck);
  }
  deleteDeck(id: any): Observable<any>{
    return this.http.delete<any>(`${this.local}/${id}`);
  }

}
