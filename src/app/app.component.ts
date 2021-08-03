import {Component, OnInit} from '@angular/core';
import {IamusDateService, TestInterface} from 'iamus-date';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'modularAppV1';

  prop: TestInterface = {
    style: {
      "color": "white",
    },
    date: "currentDatetime"
  }

  constructor(private iamusDateService: IamusDateService) {

  }

  ngOnInit(): void {
   // this.iamusDateService
  }

}
