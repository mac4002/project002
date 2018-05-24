import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { HomeComponent } from './home/home.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { Error404Component } from './errors/error404/error404.component';

const routes: Routes = [
  {path: 'Produits', component: ListProductComponent},
  {path: '', component: HomeComponent},
  {path: 'EditProduits', component: ProductEditComponent},
  {path: 'ShowProduit', component: ProductShowComponent},
  {path: 'ErrorPage', component: Error404Component},
  {path: 'not-found', component: Error404Component},
  {path: 'ErrordPage', component: Error404Component},
  {path: 'ShowProduit/:id', component: ProductShowComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes, {
        // enableTracing: true
      }
    )
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
