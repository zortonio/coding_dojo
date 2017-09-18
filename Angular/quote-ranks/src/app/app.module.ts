import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteAddComponent } from './quote-add/quote-add.component';
import { QuoteListComponent } from './quote-list/quote-list.component';

import { FormsModule } from '@Angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuoteAddComponent,
    QuoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
