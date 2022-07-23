import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { PersonlistComponent } from './components/personlist/personlist.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonlistComponent,
    LifecycleComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
