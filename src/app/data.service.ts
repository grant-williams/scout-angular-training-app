import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoveRequest } from './models/loveRequest';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private LOVE_REQUEST_ENDPOINT =
    'https://love-calculator.p.rapidapi.com/getPercentage';

  constructor(private httpClient: HttpClient) {}

  public sendGetRequest(loveRequest: LoveRequest) {
    const headers = {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
      'x-rapidapi-key': 'd8e023d898msh4120b30eacd178cp1a0006jsnf39db72ea17f',
      'useQueryString': 'true',
    };
    const params = {
      fname: loveRequest.fname,
      sname: loveRequest.sname,
    };

    return this.httpClient.get(this.LOVE_REQUEST_ENDPOINT, { headers, params });
  }
}
