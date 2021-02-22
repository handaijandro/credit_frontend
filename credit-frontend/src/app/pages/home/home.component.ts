import { Component, OnInit } from '@angular/core';
import { Lesson } from '../../models/lesson.model';
import { LessonsService } from '../../services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lessons: Lesson[];

  constructor(private lessonService: LessonsService) { }

  ngOnInit(): void {
    this.lessonService.getLessons().subscribe((lessons) => this.lessons = lessons);
  }

}
