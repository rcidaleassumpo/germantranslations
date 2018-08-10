import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-german-presentation',
  templateUrl: './german-presentation.component.html',
  styleUrls: ['./german-presentation.component.css']
})
export class GermanPresentationComponent implements OnInit {

  constructor(private service: DataService) { }


  currentEnglishSentence;
  currentGermanSentence;
  germanWordsAnswer = []
  germanWords
  nextSentenceNumber = 0
  germanSentencesLength
  rightAnswers = []
  @ViewChild('germansentenceanswer') germansentenceanswer: ElementRef;
  goToTheNextText = 'Go to the next text'
  control:boolean = false;
  ngOnInit() {
    this.getData(0,0)
  }

  ngOnDestroy() {
    

  }


  getData(nextSentenceNumber, nextTextNumber?){
    let _this = this
    _this.service.getData(nextTextNumber)
      .subscribe(function(res){
        _this.germanSentencesLength = res.germanSentences.length 
        _this.germanWordsAnswer = []
        _this.currentEnglishSentence = res.englishSentences[nextSentenceNumber].trim()
        _this.currentGermanSentence = res.germanSentences[nextSentenceNumber].trim()
        _this.germanWords = _this.currentGermanSentence.split(' ')
      })
  }
  sendToContainer(index,arr, arr2){
    let removed = arr.splice(index,1)
    arr2.push(removed)
    this.checkCurrentSentence(arr2.join(' '))
  }

  checkCurrentSentence(content){
    if(this.currentGermanSentence == content){
      if(this.nextSentenceNumber === this.germanSentencesLength-1){
        this.control = true
        //todo => add Animation for something to come from the side of the screen into the screen
        // saying that the particular text was finished, and that you should work on the next text
        this.currentEnglishSentence = []
        this.nextSentenceNumber = 0
        this.germanWordsAnswer = []
        this.rightAnswers.push(content)

        console.log('You should go to the next Text')
      } else {
        console.log('calling next sentence')
        this.getData(this.nextSentenceNumber+1,0)
        this.nextSentenceNumber =  this.nextSentenceNumber + 1
        this.rightAnswers.push(content)
      }
    }
  }
  goToNextText(content){
    if(content === this.currentGermanSentence){
      this.getData(this.nextSentenceNumber,0)
      
    }
  }
}
