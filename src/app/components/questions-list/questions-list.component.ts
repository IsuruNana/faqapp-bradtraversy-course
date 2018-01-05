import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Question } from '../../models/Question';



@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  questions:Question[];

  constructor(public dataService:DataService) {
    
  }

  ngOnInit() {
    this.questions = this.dataService.getQuestions();
  }

  addQuestion(question:Question){
    this.dataService.addQuestion(question);
  }

}
