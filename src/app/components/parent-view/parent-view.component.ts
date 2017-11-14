import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-parent-view',
  templateUrl: './parent-view.component.html',
  styleUrls: ['./parent-view.component.css']
})
export class ParentViewComponent implements OnInit {
    rooms: any[];
    calendarEvent: any[];

    constructor(private dataService: DataService, private route: ActivatedRoute, public helper: HelperService) {
    }

    ngOnInit() {
        
    }
    ngAfterViewInit() {
        var buildingID = this.route.snapshot.params.id;

        this.dataService.getRooms(buildingID).subscribe((tempRoom) => {
            this.rooms = tempRoom.data;
            this.recieveMessage(this.rooms[0].ID);
        });
    }

    recieveMessage($event) {
        var courses = [];

        this.dataService.getCourses($event).subscribe((tempCourses) => {
            courses = tempCourses.data;
            this.calendarEvent = this.helper.formatData(courses);
        }); 
    }
}

