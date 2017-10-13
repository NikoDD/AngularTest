import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RestService{

  constructor(private http: HttpClient) {

  }

  /**
   * tries to send an http request to the given source
   * @param {string} url
   */
  get(url: string, callback: (n: any) => any){
    return this.http.get(url).subscribe(callback);
  }

}
