import { SeattleComponent } from './seattle/seattle.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'seattle'
  },
  {
    path: 'seattle',
    pathMatch: 'full',
    component: SeattleComponent,
    children: []
  },
  {
    path: 'burbank',
    pathMatch: 'full',
    component: BurbankComponent,
    children: []
  },
  {
    path: 'chicago',
    pathMatch: 'full',
    component: ChicagoComponent,
    children: []
  },
  {
    path: 'dallas',
    pathMatch: 'full',
    component: DallasComponent,
    children: []
  },
  {
    path: 'dc',
    pathMatch: 'full',
    component: DcComponent,
    children: []
  },
  {
    path: 'sanjose',
    pathMatch: 'full',
    component: SanjoseComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
