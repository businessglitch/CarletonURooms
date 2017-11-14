import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter, SimpleChange  } from '@angular/core';
import {CalendarComponent} from "ap-angular2-fullcalendar";
import { DataService } from '../../services/data.service';
import { HelperService } from '../../services/helper.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-calender-display',
  templateUrl: './calender-display.component.html',
  styleUrls: ['./calender-display.component.css']
})


export class CalenderDisplayComponent implements OnInit {
    @Input() newEvent: any[];
  
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
        events: this.newEvent
    };
 
    constructor(private dataService: DataService, public helper: HelperService) { 
            
    }
    ngOnInit() {  
    }

    ngOnChanges(changes: SimpleChanges) {
        $('#myCalendar').fullCalendar('removeEvents');  
        if(changes.newEvent != undefined) {
            this.calendarOptions.events = changes.newEvent.currentValue;
            $('#myCalendar').fullCalendar('renderEvents', this.calendarOptions.events, false);  
        }     
    }   

}
