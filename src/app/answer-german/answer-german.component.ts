import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer-german',
  templateUrl: './answer-german.component.html',
  styleUrls: ['./answer-german.component.css']
})
export class AnswerGermanComponent implements OnInit {

  @Input() sendData:string[]

  constructor() { }

  ngOnInit() {
  }

}
