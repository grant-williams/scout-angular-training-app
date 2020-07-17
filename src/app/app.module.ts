import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { HighlightCardComponent } from './highlight-card/highlight-card.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    FooterComponent,
    RequirementsComponent,
    HighlightCardComponent,
    HomeComponent,
    NotFoundComponent,
    DashboardComponent,
    FormComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
