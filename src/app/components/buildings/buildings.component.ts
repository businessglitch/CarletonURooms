import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {
	buildings:any[];
  rooms: any[];
  constructor(private dataService:DataService, public router: Router) {
  	this.dataService.getBuildings().subscribe((tempBuildings) => {
      this.buildings = tempBuildings.data;
    });
  }
  getRooms(id) {
    this.router.navigate(['/rooms/'+id,  {buildingID: id}]);
  }

  ngOnInit() {
  }

}
