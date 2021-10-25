import { Injectable } from '@angular/core';
import { filter, findIndex } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  extractData(array:any[], filterWhat:any){
    for(let d of array.filter(t => t.id === filterWhat)){
      return d
    }
  }

  extractSource(data:any[]){

    let array = []

    for(let d of data){
      array.push(d)
    }

    return array
  }

  findIndexById(array:any[], id:any){
    let index = array.findIndex((t => t.id === id))
    return index
  }
}
