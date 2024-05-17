import { Component } from '@angular/core';
import { Questions } from 'src/quizes/questions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  quizes = Questions;
  currentQuestionIndex = 0;
  quizStarted = false;
  score = 0;
  answerSubmitted = false;
  isClicked=false
  selectedAnswer: string | null = null;
  selectedAnswerIndex: number | null = null;

  startQuiz() {
    this.quizStarted = true;
  }
  restartQuiz(){
    this.quizStarted = true;
    this.currentQuestionIndex=0
  }
  nextQuestion() {
    if (this.answerSubmitted || this.selectedAnswer) {
      this.answerSubmitted = false;
      this.selectedAnswer = null;
      this.currentQuestionIndex++;
      this.selectedAnswerIndex=null
    }

  }

  checkAnswer(answer: string,index:number): string | undefined {
    this.selectedAnswerIndex = index;
     if (!this.answerSubmitted && !this.selectedAnswer) {
      this.selectedAnswer = answer;
        if (answer === this.quizes[this.currentQuestionIndex].correct_answer) {
        this.score++;
        return 'correct';
      } else {
        return 'incorrect';
      }

    }
    return undefined;
  }

  get currentQuestion() {
    return this.quizes[this.currentQuestionIndex];
  }

  constructor() {}
}
