import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery'

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  uri     = 'http://172.16.40.187:9047';
  API_KEY = 'YOUR_API_KEY';

  constructor(private http: HttpClient) { }

  public getData(userName, Password) {

  const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Authorization',
        'Access-Control-Allow-Origin': '*'
      })
    }; 

   const payload = {
      "userName" : userName,
      "password" : Password
    };

    $.ajax({
      type: "POST",
      url: "http://172.16.40.187:9047/apiv2/login",
      data: payload,
      jsonp: "$jsonp",
      dataType: "jsonp"
    }).done(function(data) {
      console.log("Request received: " + data);
    });

    // this.http.post(`${this.uri}/apiv2/login`, payload).subscribe((data) => {
    //     console.log(data);
    //   });
  }
}