import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parent-view',
  templateUrl: './parent-view.component.html',
  styleUrls: ['./parent-view.component.css']
})
export class ParentViewComponent implements OnInit {

	calendarEvent: any[];

  constructor() { }

  ngOnInit() {
  	
  }

  recieveMessage($event) {
  	console.log($event);
  	this.calendarEvent =  [
  			{
            	title: 'RepeatingEvent',
            	start: '10:00',
            	End: '15:00',
            	dow: [1,4]
          	}
         ];
  }
}
