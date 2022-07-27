import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SlicerPipe } from './_pipes/slicer.pipe';
import { FilterPipe } from './_pipes/filter.pipe';
import { HighlightDirective } from './_directives/highlight.directive';
import { RepeatDirective } from './_directives/repeat.directive';




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    CartComponent,
    FavoriteComponent,
    SlicerPipe,
    FilterPipe,
    HighlightDirective,
    RepeatDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
