import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsserviceService {

  constructor(private http: HttpClient) { }


  get() {

    return this.http.get('https://api.first.org/data/v1/news');
  }
}
