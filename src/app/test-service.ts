import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class TestService {
    constructor(private http: HttpClient) { }

    testGet(): Observable<string> {
        return this.http.get<string>(`http://localhost:8080/testGet`);
    }

    testPost(): Observable<any> {
        return this.http.post<any>(`http://localhost:8080/testPost`, null);
    }
}