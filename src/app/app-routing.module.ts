import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
