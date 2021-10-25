import { Component, Input, OnInit } from '@angular/core';
import { Source } from 'src/app/core/models/source';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() data!:any
  @Input() dataName!:any

  constructor() { }

  ngOnInit(): void {

  }

  returnEnumData(id:any){
    console.log(1)
    return Source[id]
  }





}
