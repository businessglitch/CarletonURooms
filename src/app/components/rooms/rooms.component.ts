import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
	buildingID:any;
	rooms:any[];
  selected: string = '';

  @Output() messageEvent;  
  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { 
    this.messageEvent = new EventEmitter<string>();
  }

  sendMessage($event, room) {
    
    this.selected = room.ID;
    this.messageEvent.emit(room.ID);
  }

  ngOnInit() {
  	this.buildingID = this.route.snapshot.params.id;
  	this.dataService.getRooms(this.buildingID).subscribe((tempRoom) => {
      this.rooms = tempRoom.data;
    });
  }

}
