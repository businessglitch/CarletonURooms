import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Response } from '../../models/Messages/response.interface';
import { FeedbackForm } from '../../models/Forms/feedback.interface';

@Component({
    selector: 'tab-feedback',
    templateUrl: './tab-feedback.component.html',
    styleUrls: ['./tab-feedback.component.css']
})
export class TabFeedbackComponent implements OnInit {
    response: Response;
    feedback:FeedbackForm;

    constructor(private dataService:DataService) { 
        this.feedback =  {
            firstName: '',
            lastName:  '',
            email: '',
            message: ''
        };

        this.response = {
            data: '',
            message:'',
            status:''
        };
    }

    ngOnInit() {}

    onFormSubmit(feedbackForm: NgForm) {
        $("#Feedback > div").addClass("loading");
        if (feedbackForm.invalid) {
            this.response.data = false;
            this.response.message = "Form is Invalid!"
            this.endLoading();
        } else {
            this.dataService
                .sendMail(this.feedback)
                .subscribe((res) => {
                    this.response = res;
                    this.endLoading();
                },
                err => console.error(err)
                );
        } 
    }

    endLoading() {
        $("#Feedback > div").removeClass("loading");
        $("#feedbackResponse").show();
    }

}
