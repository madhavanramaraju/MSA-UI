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

  public getData() {

    let reqHeader = new HttpHeaders()
    reqHeader.append('Content-Type', 'application/json')
    console.log(reqHeader);
    let payload = {
      "sql": "SELECT * FROM usecase.VendorWiseTaxiSales "
    }
    return this.http.post(`http://localhost:9000/msa_poc/v1/data`, payload, {headers: reqHeader})
  }
}