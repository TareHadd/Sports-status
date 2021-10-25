import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CategoryInterface } from '../models/category';
import { CompetitionInterface } from '../models/competition-interface';
import { CompetitorsInterface } from '../models/competitors-interface';
import { PlayerInterface } from '../models/player-interface';
import { SportsInterface } from '../models/sports-interface';

@Injectable({
  providedIn: 'root',
})
export class SportsService {
  api = 'http://devmeta.multifeedcenter.com';
  sport = 'Sport/all?includeSources=true';

  constructor(private http: HttpClient) {}

  getAllSports() {
    return this.http
      .get<SportsInterface[]>(`${this.api}/Sport/all?includeSources=true`)
      .pipe(
        map((responseData) => {
          let dataArray = [];
          let sorted = [];
          dataArray = responseData

          sorted = dataArray.sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });

          // console.log(sorted);

          return sorted
        })
      );
  }

  getCategoryForSport(id:any) {
    return this.http
      .get<CategoryInterface[]>(
       `${this.api}/Category/sport/${id}?includeSources=true`
      )
      .pipe(
        map((responseData) => {
          // console.log(responseData)
          let dataArray = [];
          let sorted = [];

          dataArray = responseData

          sorted = dataArray.sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });

          // console.log( sorted );

          return sorted
        })
      );
  }

  getCompetitionsForCategory(id:any) {
    return this.http
      .get<CompetitionInterface[]>(`${this.api}/Competition/category/${id}?includeSources=true` )
      // https://meta.multifeedcenter.com/Competition/category/315154?includeSources=true
      .pipe(
        map((responseData) => {
          // console.log(responseData)
          let dataArray = [];
          let sorted = [];

          dataArray = responseData

          sorted = dataArray.sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });

          // console.log( sorted );

          return sorted
        })
      );
  }

  getCompetitiorsForCompetition(id:any){
    return this.http.get<CompetitorsInterface[]>(`${this.api}/Competitor/competition/${id}`)
    .pipe(
      map(
        resData =>{
          let dataArray = [];
          let sorted = [];

          dataArray = resData

          sorted = dataArray.sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });

          // console.log( sorted );

          return sorted
        }
      )
    )
  }

  getPlayersForCometitor(id:any){
    return this.http.get<PlayerInterface[]>(`${this.api}/Player/competitor/${id}?includeSources=true`)
    .pipe(
      map(
        resData => {
          let dataArray = [];
          let sorted = [];

          dataArray = resData

          sorted = dataArray.sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });

          // console.log( sorted );

          return sorted
        }
      )
    )
  }


}
