import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

    constructor() { }
    
    formatData(courses) {
        var eventArray = [];

        for (var i = 0; i < courses.length; i++) {
            var days = this.dayNumber(courses[i].Days.split(" "));
            var startDate = this.convertDate(courses[i].StartDate);
      
            var eventObj = {
                title: courses[i].Name,
                start: courses[i].StartTime,
                End: courses[i].EndTime,
                dow: days
            }
            eventArray.push(eventObj)
        }
        //this.calendarEvent = eventArray;
        return eventArray;
    }

    dayNumber (days) {
        var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var arr = [];
        for (var i =0; i < days.length; i++) {
            arr.push(weekDays.indexOf(days[i]))
        }
        return arr;
    }

    // Converts MMM dd yyyy to yyyy,mm,dd
    convertDate(date) {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        if (date != "") {
            var yearSplit = date.split(",");
            var daySplit = yearSplit[0].split(" ");
            var year = yearSplit[1];
            var day = daySplit[1];
            var month = months.indexOf(daySplit[0]) + 1;
            var finalDate = year+"/"+month+"/"+day;

            return finalDate;
        }
    }

}
