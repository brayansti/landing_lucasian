import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { HelpsectionComponent } from './components/helpsection/helpsection.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HelpsectionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
