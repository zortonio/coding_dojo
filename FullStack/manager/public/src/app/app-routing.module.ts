import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerAddComponent } from './player/player-add/player-add.component';
import { StatusComponent } from './status/status.component';
import { GameComponent } from './status/game/game.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/players/list'
  },
  {
    path: 'players',
    component: PlayerComponent,
    children:[
      {path: 'list', component: PlayerListComponent},
      {path: 'addplayer', component: PlayerAddComponent}
    ]
  },
  {
    path: 'status',
    component: StatusComponent,
    children:[
      {path: 'game/:id', component: GameComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
