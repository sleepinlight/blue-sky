import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { CoreModule } from '@src/app/core/core.module';
import { HourlyItemComponent } from '@src/app/hourly/hourly-item/hourly-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HourlyItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
