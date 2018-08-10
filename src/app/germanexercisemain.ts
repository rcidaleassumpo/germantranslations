export class GermanMainExercise  {

    englishSentences:string[];
    germanSentences:string[];


    constructor(obj:any){
        this.englishSentences = this.clearArr(obj.version_en.split('.'))
        this.germanSentences = this.clearArr(obj.version_de.split('.'))
    }

    clearArr(arr){
        let newArray = [] 
        arr.forEach(element => {
            if(element != ''){
                newArray.push(element)
            }
        });
        return newArray
    }

}