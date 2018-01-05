import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {

  questions:Question[];

  constructor() {
    this.questions = [];
    /*this.questions = [
      {
        text:'What is your name',
        answer: 'My name is Isuru',
        hide: true,
      },
      {
        text:'What is your fav color',
        answer: 'Red',
        hide: true,
      },
      {
        text:'What is your favorite language',
        answer: 'Javascript',
        hide: true,
      }
    ];*/
  }

  getQuestions(){
    if(localStorage.getItem('questions') === null){
      this.questions = [];
    }
    else{
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }

    return this.questions;
  }

  addQuestion(question:Question){
    this.questions.unshift(question);

    let lsQuestions;
    //Init local vars
    if(localStorage.getItem('questions') === null){
      lsQuestions = [];
    }
    else{
      lsQuestions = JSON.parse(localStorage.getItem('questions'));
      //console.log(this.questions);
    }
    lsQuestions.unshift(question);
    //console.log(question);
    localStorage.setItem('questions', JSON.stringify(lsQuestions));
  }
  
  removeQuestion(question:Question){
    for(let i = 0; i < this.questions.length; i++){
      if(question == this.questions[i]){
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }
}
