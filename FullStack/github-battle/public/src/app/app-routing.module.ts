import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from './battle/battle.component';
import { ResultComponent } from './result/result.component';
import { RankingsComponent } from './rankings/rankings.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BattleComponent
  },
  {
    path: 'results',
    component: ResultComponent
  },
  {
    path: 'rankings',
    component: RankingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
