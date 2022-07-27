import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './_pipes/filter.pipe';
import { ColorsDirective } from './_directivs/colors.directive';





@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    ColorsDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
