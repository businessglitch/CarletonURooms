import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'tab-feedback',
  templateUrl: './tab-feedback.component.html',
  styleUrls: ['./tab-feedback.component.css']
})
export class TabFeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  submitForm($event) {
  	$("#Feedback > div").addClass("loading");
  }

}
