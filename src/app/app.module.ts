import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WprowadzanieComponent } from './wprowadzanie/wprowadzanie.component';
import { DostawalniaComponent } from './dostawalnia/dostawalnia.component';
import { PosrednikComponent } from './posrednik/posrednik.component';
import { CzyszComponent } from './czysz/czysz.component';
import { NiceBoxComponent } from './nice-box/nice-box.component';

@NgModule({
  declarations: [
    AppComponent,
    WprowadzanieComponent,
    DostawalniaComponent,
    PosrednikComponent,
    CzyszComponent,
    NiceBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
