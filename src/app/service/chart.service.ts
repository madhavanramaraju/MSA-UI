import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery'

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  uri     = 'http://172.16.16.133:9047';
  API_KEY = 'YOUR_API_KEY';

  constructor(private http: HttpClient) { }

  public getData(userName, Password) {

  const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': '_dremiokj98g5h9bh6hnmecss9apr4r5q'        
      })
    }; 

   const payload = {
      "userName" : 'MSA',
      "password" : 'Password@123'
    };

    // $.ajax({
    //   type: "POST",
    //   url: "http://172.16.40.187:9047/apiv2/login",
    //   data: payload,
    //   jsonp: "$jsonp",
     
    // }).done(function(data) {
    //   console.log("Request received: " + data);
    // });

    this.http.get('http://172.16.16.133:9047/api/v3/job/2276376b-0f43-04c7-afd7-dc923abd3000/results', httpOptions).subscribe((data) => {
        console.log('-----------------------' + data);
    });
  }
}