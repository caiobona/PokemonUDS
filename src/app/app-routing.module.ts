import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DeckCreateComponent } from './pages/deck-create/deck-create.component';
import { DeckDetailComponent } from './pages/deck-detail/deck-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: DeckCreateComponent },
  { path: 'decks', component: DeckDetailComponent },
];

// const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'deck-detail', loadChildren: () => import('./pages/deck-detail/deck.detail.module').then(m => m.DeckDetailModule) },
//   { path: 'deck-create', loadChildren: () => import('./pages/deck-create/deck.create.module').then(m => m.DeckCreateModule) },
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: '**', redirectTo: '/home' } // rota padrão para redirecionar para a página inicial em caso de rota inválida
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
