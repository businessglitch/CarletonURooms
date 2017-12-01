import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-form-page',
  templateUrl: './feedback-form-page.component.html',
  styleUrls: ['./feedback-form-page.component.css']
})
export class FeedbackFormPageComponent implements OnInit {
    currentTab: string;
    constructor() { }

    ngOnInit() {
        this.currentTab = "Feedback";
    }

}
