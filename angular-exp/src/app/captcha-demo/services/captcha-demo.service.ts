import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CaptchaDemoService {
  constructor(private http: HttpClient) {}

  send(data: Object): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      }),
    };

    return this.http.post(
      'https://localhost:44351/captcha',
      data,
      options
    );
  }
}
