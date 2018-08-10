import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GermanMainExercise } from '../germanexercisemain';
import { GermanTexts } from '../service/germantexts.interface'
import { Observable } from '../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 

  }
  private rawData$;
  getData(nextTextNumber) {
    
    return this.http.get('assets/german-texts.json')
      .pipe(map(function(res:GermanTexts[]){

        let data:any;
        let holder:GermanMainExercise[] = []

        for(let item of res){
          data = {
            version_de: item['version_de'],
            version_en: item['version_en']
          }
          holder.push(new GermanMainExercise(data))
        }
        return holder[nextTextNumber]
      }))
  }    
} 
