import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CashmereModule } from './cashmere.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CashmereModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
