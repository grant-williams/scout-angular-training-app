import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { HighlightCardComponent } from './highlight-card/highlight-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    RequirementsComponent,
    HighlightCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
