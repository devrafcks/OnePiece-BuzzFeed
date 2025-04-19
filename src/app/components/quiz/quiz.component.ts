import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit{
  title: string = ""

  questions:any
  questionSelected:any
  ngOnInit(): void {
    
  }

}
