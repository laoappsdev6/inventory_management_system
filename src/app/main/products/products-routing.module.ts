import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'products-list' },
  { path:'products-list', component: ProductsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ProductsRoutingModule { }
