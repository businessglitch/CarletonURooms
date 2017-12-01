import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    activateTab($event,num) {
        $("a").removeClass("active");
        $event.target.classList.add('active');

        switch(num) {
            case 1:
                $('#About').hide();
                $('#Feedback').show();
                break;
            case 2:
                $('#Feedback').hide();
                $('#About').css("display", "inline-flex"); 
                break;
        }
    }
}
