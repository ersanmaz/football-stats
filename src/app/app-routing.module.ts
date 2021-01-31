import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TableComponent} from './table/table.component';
import {LeagueComponent} from './league/league.component';

const routes: Routes = [
  {path: '', component: LeagueComponent},
  {path: 'table/:id', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
