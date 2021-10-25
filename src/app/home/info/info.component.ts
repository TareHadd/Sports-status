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
    return Source[id]
  }

  getColor(id:any){
    return Source[id]==="RUNNINGBALL"?'blue':
    Source[id]==="BETRADAR"?'lightblue':
    Source[id]==="BETGENIUS"?'green':
    Source[id]==="SPORTRADAR"?'purple':
    Source[id]==="OPTA"?'red':
    Source[id]==="MANUAL"?'neonblue':
    Source[id]==="LSPORTS"?'orange':
    Source[id]==="LS_BET365"?'lightgreen':
    Source[id]==="LS_BWIN"?'bg-dark':'bg-primary'

  }




}
