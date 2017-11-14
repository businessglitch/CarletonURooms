/* MODULES*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from "ap-angular2-fullcalendar";
/*COMPONENTS */
import { AppComponent } from './app.component';
import { UniverityComponent } from './components/univerity/univerity.component';
import { BuildingsComponent } from './components/buildings/buildings.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import {  } from "ap-angular2-fullcalendar";
import { CalenderDisplayComponent } from './components/calender-display/calender-display.component';
/*SERVICES*/
import { DataService } from './services/data.service';
import { HelperService } from './services/helper.service';
import { ParentViewComponent } from './components/parent-view/parent-view.component';



const appRoutes: Routes = [
  {path:'', component:UniverityComponent},
  {path:'buildings', component:BuildingsComponent},
  {path:'rooms/:id', component:ParentViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UniverityComponent,
    BuildingsComponent,
    RoomsComponent,
    CalenderDisplayComponent,
    ParentViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CalendarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService, HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
