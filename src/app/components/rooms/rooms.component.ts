import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
    @Input() tempRooms: any[];
    selected: string = '';

    @Output() messageEvent;  
    constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { 
        this.messageEvent = new EventEmitter<string>();
    }

    sendMessage($event, room) {  
        this.selected = room.ID;
        this.messageEvent.emit(room.ID);
    }
    ngOnChanges(changes: SimpleChanges) {
       if(changes.tempRooms.currentValue != undefined) this.selected = changes.tempRooms.currentValue[0].ID   
    }

    ngOnInit() {
    }
}
