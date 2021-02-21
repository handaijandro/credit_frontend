import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Lesson } from '../models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private httpClient:  HttpClient ) { }

  getLessons() {
    return this.httpClient.get('') as Observable<Lesson[]>;
  }
}
