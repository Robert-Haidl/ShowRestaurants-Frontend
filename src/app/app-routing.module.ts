import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsTableComponent } from './components/restaurants-table/restaurants-table.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'restaurants' },
  { path: 'restaurants', component: RestaurantsTableComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'restaurants' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
