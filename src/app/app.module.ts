import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { DetailComponent } from './components/detail/detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ConvertDataPipe } from './pipes/convert-data.pipe';
import { ReplaceCharacterPipe } from './pipes/replace-character';
import { TrimDescriptionPipe } from './pipes/trim-description.pipe';
import { ThemeDirective } from './theme.directive';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    PagenotfoundComponent,
    DetailComponent,
    ConvertDataPipe,
    TrimDescriptionPipe,
    ReplaceCharacterPipe,
    ThemeDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
