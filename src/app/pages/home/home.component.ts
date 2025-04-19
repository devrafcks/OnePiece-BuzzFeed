import { Component } from '@angular/core';
import { QuizzComponent } from "../../components/quiz/quiz.component";

@Component({
  selector: 'app-home',
  imports: [QuizzComponent],
  standalone: true,
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
