import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Lesson } from '../models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  private baseUrl = 'http://localhost:8000/lesson'
  constructor(private httpClient:  HttpClient ) { }

  getLessons(): Observable<Lesson[]> {
    return this.httpClient.get<any>(this.baseUrl);
  }

  get(id: string): Observable<Lesson> {
    return this.httpClient.get<any>(this.baseUrl + '/' + id);
  }
}
