import { DostawalniaComponent } from './dostawalnia/dostawalnia.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WprowadzanieComponent } from './wprowadzanie/wprowadzanie.component';

const routes: Routes = [
  { path: 'wpis', component: WprowadzanieComponent },
  { path: 'odpis', component: DostawalniaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
