import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CounterModule } from './components/counter.module';
import { VoughtModule } from './vought/vought.module';
import { StarWarsModule } from './starwars/starwars.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    StarWarsModule,
    //VoughtModule,
    CounterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
