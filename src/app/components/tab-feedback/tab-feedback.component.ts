import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'tab-feedback',
  templateUrl: './tab-feedback.component.html',
  styleUrls: ['./tab-feedback.component.css']
})
export class TabFeedbackComponent implements OnInit {
	feedback = {
    	firstName: '',
    	lastName:  '',
    	email: '',
    	message: ''
	};
  	constructor() { }

	ngOnInit() {
	}

	onFormSubmit(feedbackForm: NgForm) {
	  	$("#Feedback > div").addClass("loading");
	}

}
