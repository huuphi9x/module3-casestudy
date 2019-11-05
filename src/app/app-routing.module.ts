import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NationalComponent} from './national/national.component';
import {CreateNationalComponent} from './create-national/create-national.component';
import {EditNationalComponent} from './edit-national/edit-national.component';
import {TournamentsComponent} from './tournaments/tournaments.component';

const routes: Routes = [
  {
  path: 'national',
  component: NationalComponent
},
  {
    path: 'create-national',
    component: CreateNationalComponent
  },
  {
    path: 'edit-national/:id',
    component: EditNationalComponent
  },
  {
    path: 'tournaments',
    component: TournamentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
