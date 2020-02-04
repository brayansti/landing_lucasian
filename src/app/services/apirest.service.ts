import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  constructor(
    private http: HttpClient,
  ) { }
  
  private dataApi = {
    url: 'https://jsonplaceholder.typicode.com/users'
  }

  
  getData(): Observable<any>{
    return this.http.get(this.dataApi.url);
  }
}
