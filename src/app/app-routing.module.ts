import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BakeryComponent} from "./bakery/bakery.component";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'bakery',
  },
  {path: 'bakery', component: BakeryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
