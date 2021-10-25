import { Injectable } from '@angular/core';
import { filter, findIndex } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  extractData(array:any[], filterWhat:any){

    return array.find(t => t.id === filterWhat)
    
  }

  findIndexById(array:any[], id:any){
    let index = array.findIndex((t => t.id === id))
    return index
  }
}
