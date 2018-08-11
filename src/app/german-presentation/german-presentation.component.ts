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
  currentTextNumber = 0
  germanSentencesLength
  germanTextlength:number;
  rightAnswers = []
  control = false;
  ngOnInit() {
    this.getData(0,this.currentTextNumber)
  }

  ngOnDestroy() {
    

  }


  getData(nextSentenceNumber, nextTextNumber){
    let _this = this
    _this.service.getData(nextTextNumber)
      .subscribe(function(res){
        _this.germanTextlength = res.holderLength
        _this.germanSentencesLength = res.holder.germanSentences.length 
        _this.germanWordsAnswer = []
        _this.currentEnglishSentence = res.holder.englishSentences[nextSentenceNumber].trim()
        _this.currentGermanSentence = res.holder.germanSentences[nextSentenceNumber].trim()
        _this.germanWords = _this.randomOrderArr(_this.currentGermanSentence.split(' '))
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
        this.goToNextText()
        console.log('You should go to the next Text')
        
      } else {
        console.log('calling next sentence')
        this.getData(this.nextSentenceNumber+1,this.currentTextNumber)
        this.nextSentenceNumber =  this.nextSentenceNumber + 1
        this.rightAnswers.push(content)
      }
    }
  }
  randomOrderArr(arr){
    return arr.sort(function() {
      return .5 - Math.random();
    });
  }
  goToNextSentence(){
    if(this.nextSentenceNumber === this.germanSentencesLength-1){
      console.log('no more sentences, going to next text.')
      this.clearData()
      this.goToNextText()
    } else {
      this.getData(this.nextSentenceNumber+1,this.currentTextNumber)
      this.nextSentenceNumber =  this.nextSentenceNumber + 1
    }
    
  }
  goToNextText(){
    //todo => add Animation for something to come from the side of the screen into the screen
    // saying that the particular text was finished, and that you should work on the next text
    console.log(this.currentTextNumber,this.germanTextlength)
    if(this.currentTextNumber === this.germanTextlength - 1){
      this.control = true;
      this.clearData()
      console.log('You have finished all the exercises.')
    } else {
      this.clearData()
      this.nextSentenceNumber = 0
      this.currentTextNumber += 1
      this.getData(this.nextSentenceNumber,this.currentTextNumber)
    }
    
  }
  clearData(){
      this.currentEnglishSentence = []
      this.germanWordsAnswer = []
      this.rightAnswers = []
      this.germanWords = []
  }
}
