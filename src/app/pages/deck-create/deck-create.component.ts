import { Component, OnInit, ViewChild, signal, Signal, WritableSignal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { CardComponent } from 'src/app/components/shared/card/card.component';
import { Deck } from 'src/app/models/deck';
import { CardListService } from 'src/app/services/card-list.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deck-create',
  templateUrl: './deck-create.component.html',
  styleUrls: ['./deck-create.component.scss']
})
export class DeckCreateComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild('myVideo') myVideo: any;

  deckCards: WritableSignal<any[]> = signal([]);
  paginatorOFF: WritableSignal<boolean> = signal(true);
  uniqueCard: WritableSignal<any[]> = signal([]);
  nameDeck: WritableSignal<string> = signal('');
  userInput: WritableSignal<string> = signal('');
  spinner: WritableSignal<boolean> = signal(true);
  Decks: WritableSignal<Deck[]> = signal([]);
  Cards: WritableSignal<any[]> = signal([]);
  contadorCards: WritableSignal<number> = signal(0);
  contadorPage = 1;
  exibeFiltro: WritableSignal<boolean> = signal(true);
  exibe_title: WritableSignal<boolean> = signal(true);

  constructor(private cardService: CardListService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.paginatorOFF.set(false);
    this.exibeFiltro.set(true);
    this.cardService.getAll().subscribe((res) => {
      this.spinner.set(false);
      this.deckCards.set(res.data);
      this.exibe_title.set(false);
      this.exibeFiltro.set(true);
    });
  }

  validateDeckName(): boolean {
    return this.nameDeck() !== '';
  }

  getCardByName(): void {
    this.exibeFiltro.set(true);
    this.spinner.set(true);
    if (this.userInput() !== '' && this.userInput() !== undefined) {
      this.paginatorOFF.set(true);
      this.cardService.getCardByName(this.userInput()).subscribe((res) => {
        this.spinner.set(false);
        this.deckCards.set(res.data);
      });
    } else {
      this.cardService.getAll().subscribe((res) => {
        this.paginatorOFF.set(false);
        this.spinner.set(false);
        this.deckCards.set(res.data);
        this.exibe_title.set(false);
      });
    }
  }

  addCard(card: any): void {
    const dialogRef = this.dialog.open(CardComponent, {
      data: { img: card.images?.large },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'add') {
        const cardWithSameName = this.Cards().filter((c) => c.name === card.name);

        if (cardWithSameName.length <= 3) {
          this.Cards.set([...this.Cards(), card]);
          this.contadorCards.set(this.contadorCards() + 1);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Você já atingiu o limite de 4 cartas com o mesmo nome neste deck!',
            timer: 1500,
            showConfirmButton: false,
          });
        }
      }
    });
  }

  createDeck(): void {
    if (this.Cards().length >= 24 && this.Cards().length <= 60 && this.validateDeckName()) {
      let handlerDeck: Deck = {
        name: this.nameDeck(),
        cards: this.Cards(),
      };
      this.cardService.createDeck(handlerDeck).subscribe();
      Swal.fire({
        icon: 'success',
        title: 'Deck criado com sucesso!',
        showConfirmButton: true,
        confirmButtonColor: '#004a94',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['decks']);
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'O Deck deve possuir um nome e ter de 24 á 60 cartas!',
        confirmButtonColor: '#004a94',
      });
    }
  }

  goHome(): void {
    this.router.navigate(['']);
  }

  onNextPage(): void {
    this.contadorPage++;

    this.cardService.getCardByPage(this.contadorPage).subscribe((res)=>{
      this.spinner.set(false);
      this.deckCards.set(res.data);
    });
  }

  onBeforePage(): void {
    if (this.contadorPage === 1) {
      return;
    } else {
      this.spinner.set(true);
      this.contadorPage--
      this.cardService.getCardByPage(this.contadorPage).subscribe((res)=>{
        this.spinner.set(false);
        this.deckCards.set(res.data);
      });
    }
  }
}
