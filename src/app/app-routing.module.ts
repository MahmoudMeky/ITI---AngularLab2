import { UserdetailsComponent } from './Routes/userdetails/userdetails.component';
import { UsersComponent } from './Routes/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './Routes/product-details/product-details.component';
import { ProductListComponent } from './Routes/product-list/product-list.component';

const routes: Routes = [{ path: 'product/:id', component: ProductDetailsComponent },
{ path: 'users', component: UsersComponent },
{ path: 'users/:id', component: UserdetailsComponent },
{ path: 'productlist', component: ProductListComponent },
{ path: "", redirectTo: "productlist", pathMatch: "full" },
{ path: '**', component: ProductListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
