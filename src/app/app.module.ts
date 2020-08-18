import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { CalendarComponent } from './calendar/calendar.component';
import { DateAdapter } from '@angular/material';
import { CustomDateAdapter } from './adapter/custom-date-adapter';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent
  ],
  imports: [
    CustomMaterialModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: DateAdapter, useClass: CustomDateAdapter },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
