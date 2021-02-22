import { Component, OnInit } from '@angular/core';
import { Lesson } from '../models/lesson.model';
import { LessonsService } from '../services/lessons.service';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.scss']
})
export class ClassCardComponent implements OnInit {
  lessons: Lesson[];
  selectedLesson?: Lesson;

  constructor(private lessonService: LessonsService) { }

  ngOnInit(): void {
    this.lessonService.getLessons().subscribe((lessons) => this.lessons = lessons);
  }

  onSelect(lesson: Lesson):void {
    this.selectedLesson = lesson;
  }

}
