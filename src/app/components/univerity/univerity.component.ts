import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { UNIVERSITIES_LIST } from '../../mocks/universities/universities';
import { University } from '../../models/University/university.interface';
import { DataService } from '../../services/data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-univerity',
  templateUrl: './univerity.component.html',
  styleUrls: ['./univerity.component.css']
})
export class UniverityComponent implements OnInit {
    universitiesList: University[];
    currentTab: string;
    constructor(private dataService:DataService, public router: Router) { 
    }

    getBuildings(enabled) {
        if(enabled) this.router.navigate(['/buildings']);
    }

    ngOnInit() {
        this.universitiesList = UNIVERSITIES_LIST;
        this.currentTab = "Universities";
    }
}
