import { ElementRef, EventEmitter, AfterViewInit } from '@angular/core';
import 'fullcalendar';
import { Options } from "fullcalendar";
export declare class CalendarComponent implements AfterViewInit {
    private element;
    options: Options;
    initialized: EventEmitter<boolean>;
    text: string;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    fullCalendar(...args: any[]): void;
}
