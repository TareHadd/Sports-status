import { Component, OnInit } from '@angular/core';
import { CategoryInterface } from '../core/models/category';
import { CompetitionInterface } from '../core/models/competition-interface';
import { CompetitorsInterface } from '../core/models/competitors-interface';
import { PlayerInterface } from '../core/models/player-interface';
import { SportsInterface } from '../core/models/sports-interface';
import { SportsService } from '../core/services/sports.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  sports!:SportsInterface[]
  categories!:CategoryInterface[]
  competitions!:CompetitionInterface[]
  competitors!:CompetitorsInterface[]
  players!:PlayerInterface[]

  categoryId!:any

  spinnerStatus = false


  constructor(private service: SportsService) { }

  ngOnInit(): void {

    this.getAllSports()
    
  }

  getAllSports(){
    this.spinnerStatus = true
    this.service.getAllSports().subscribe(
      resData => {
        this.sports = resData
        this.spinnerStatus = false
        // console.log(resData)
      }
    )
  }

  getCategoryForSport(id:any){
    this.spinnerStatus = true
    if(id){
      // console.log(id)
      this.service.getCategoryForSport(id).subscribe(
        resData => {
          this.categories = resData
          this.spinnerStatus = false
        }
      )
    }
  }

  getCompetitions(id:any){
    // console.log(id)
    this.spinnerStatus = true
    if(id){
      this.spinnerStatus = false
      this.service.getCompetitionsForCategory(id).subscribe(
        resData =>{
          this.competitions = resData
          // console.log(this.competitions)
        }
      )
    }
  }

  getCompetitors(id:any){
    this.spinnerStatus = true
    if(id){
      this.service.getCompetitiorsForCompetition(id).subscribe(
        resData => {
          this.competitors = resData
          this.spinnerStatus = false
        }
      )
    }
  }

  getPlayers(id:any){
    this.spinnerStatus = true
    if(id){
      this.service.getPlayersForCometitor(id).subscribe(
        resData=>{
          this.players = resData
          this.spinnerStatus = false
        }
      )
    }
  }

  getForm(value:any){
    let name = value.value
    let id = value.arrayId
    let type = value.name

    let holder

    if(type === 'sports'){
      this.sports[id].name = name
      console.log(this.sports)
    }

    if(type === 'categories'){
      this.categories[id].name = name
      console.log(this.categories)
    }

    if(type === 'competitions'){
      this.competitions[id].name = name
    }

    if(type === 'competitors'){
      this.competitors[id].name = name
    }

    if(type === 'players'){
      this.players[id].name = name
    }

  }

 

}
