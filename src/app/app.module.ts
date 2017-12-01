/* MODULES*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TabAboutComponent } from './components/tab-about/tab-about.component';
import { TabFeedbackComponent } from './components/tab-feedback/tab-feedback.component';
import { FeedbackFormPageComponent } from './feedback-form-page/feedback-form-page.component';



const appRoutes: Routes = [
  {path:'', component:UniverityComponent},
  {path:'buildings', component:BuildingsComponent},
  {path:'rooms/:id', component:ParentViewComponent},
  {path:'feedback', component:FeedbackFormPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UniverityComponent,
    BuildingsComponent,
    RoomsComponent,
    CalenderDisplayComponent,
    ParentViewComponent,
    HeaderComponent,
    FooterComponent,
    TabAboutComponent,
    TabFeedbackComponent,
    FeedbackFormPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CalendarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService, HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
