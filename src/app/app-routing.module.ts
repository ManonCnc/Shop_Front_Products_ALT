import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './product/products/products.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductAdminComponent } from './product/product-admin/product-admin.component';

const routes: Routes = [
  { 
    path: 'admin/products',
    title:  'Admin Product',  
    component: ProductAdminComponent 
  },
  { path: 'products', 
    title:  'Products',  
    component: ProductsComponent },
  {
    path: '', 
    redirectTo: 'products', 
    pathMatch: 'full'},
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})

export class AppRoutingModule {}
