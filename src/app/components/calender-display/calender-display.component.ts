import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import {CalendarComponent} from "ap-angular2-fullcalendar";
import * as $ from 'jquery';

@Component({
  selector: 'app-calender-display',
  templateUrl: './calender-display.component.html',
  styleUrls: ['./calender-display.component.css']
})
export class CalenderDisplayComponent implements OnInit {
    @Input() newEvent: any[];

    someEvent: any[];
      calendarOptions = {
        header: {
            left: '',
            center: 'title',
            right: ''
        },
        height: '1500',
        nowIndicator: true,
        default: 'bootstrap3',
        defaultView: 'agendaWeek',
        allDaySlot: false,
        fixedWeekCount : false,
        editable: false,
        eventLimit: true, // allow "more" link when too many events
        events:[]
    };

    constructor() { 

    }

    ngOnChanges(changes: SimpleChanges) {
        $('#myCalendar').fullCalendar('removeEvents', this.calendarOptions.events);  
        $('#myCalendar').fullCalendar('renderEvents', changes.newEvent.currentValue, false);  
    }

    ngOnInit() {   
        this.calendarOptions.events = this.newEvent;     
    }
}
