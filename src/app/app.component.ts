import {Component, Input, OnInit} from '@angular/core';
import { RestService } from './services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private _title: string;


  /**
   * @description This is just the constructor
   * User this only for injection. If you want to set values to an inital, use the ngOnInit method.
   * @param {string} title
   */
  constructor(private rest: RestService) {

  }

  /**
   * @description use this method for everything that has to be done when creating this object/component
   */
  ngOnInit(): void {
    this._title = "Penis";
    this.rest.get('http://localhost:4200', (data) => {
      this._title = data;
    })
  }


  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
}
