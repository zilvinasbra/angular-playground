import {Component, OnInit} from '@angular/core';
import {IamusDateService} from 'iamus-date';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'modularAppV1';

  constructor(private iamusDateService: IamusDateService) {

  }

  ngOnInit(): void {
   // this.iamusDateService
  }

}
