import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyClassDirective } from './directives/my-class.directive';
import { TimesDirective } from './directives/times.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyClassDirective,
    TimesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
