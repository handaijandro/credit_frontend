import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { LessonsService } from '../../services/lessons.service';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent implements OnInit {

  faSearch = faSearch;
  constructor(private lessonService: LessonsService) { }

  ngOnInit(): void {
    
  }

}
