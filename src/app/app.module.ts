import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FacturasModule } from './facturas/facturas.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FacturasModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
