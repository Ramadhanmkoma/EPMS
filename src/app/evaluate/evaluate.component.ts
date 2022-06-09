import { Component } from "@angular/core";

@Component({
    templateUrl: './evaluate.component.html',
    styleUrls: ['./evaluate.component.css']
})

export class EvaluateEmployee {

    showButton: boolean = true;
    showForm: boolean = false;

    constructor() {}

    displayForm(): void {
        this.showForm = !this.showForm;
        this.showButton = !this.showButton;
    }

    evalForm: any[] = [
        {
            "quality": "Job Knowledge",
            "name": "jobKnowledge"
        },
        {
            "quality": "Working Quality",
            "name": "workQuality"
        },
        {
            "quality": "Attendance/Punctuality",
            "name": "attendance"
        },
        {
            "quality": "Initiative",
            "name": "initiative"
        },
        {
            "quality": "Communication/Listening Skills",
            "name": "communication"
        },
        {
            "quality": "Dependability",
            "name": "dependability"
        }
    ];
}