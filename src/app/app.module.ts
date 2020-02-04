import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { HelpsectionComponent } from './components/helpsection/helpsection.component';
import { Angular2UsefulSwiperModule } from "angular2-useful-swiper";
import { SlidersComponent } from './components/sliders/sliders.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HelpsectionComponent,
    SlidersComponent,
  ],
  imports: [
    BrowserModule,
    Angular2UsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
