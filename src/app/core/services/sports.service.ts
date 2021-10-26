import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
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

          return responseData.sort((a,b) => a.name.localeCompare(b.name));

        }),

        catchError(errorResponse => {
          console.log(errorResponse.message);
          return throwError(errorResponse.message);
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

          return responseData.sort((a,b) => a.name.localeCompare(b.name));

        }),

        catchError(errorResponse => {
          console.log(errorResponse.message);
          return throwError(errorResponse.message);
        })
        
      );
  }

  getCompetitionsForCategory(id:any) {
    return this.http
      .get<CompetitionInterface[]>(`${this.api}/Competition/category/${id}?includeSources=true` )
      // https://meta.multifeedcenter.com/Competition/category/315154?includeSources=true
      .pipe(
        map((responseData) => {

          return responseData.sort((a,b) => a.name.localeCompare(b.name));

        }),

        catchError(errorResponse => {
          console.log(errorResponse.message);
          return throwError(errorResponse.message);
        })
        
      );
  }

  getCompetitiorsForCompetition(id:any){
    return this.http.get<CompetitorsInterface[]>(`${this.api}/Competitor/competition/${id}`)
    .pipe(
      map((responseData) => {

        return responseData.sort((a,b) => a.name.localeCompare(b.name));

      }),

      catchError(errorResponse => {
        console.log(errorResponse.message);
        return throwError(errorResponse.message);
      })
    );
  }

  getPlayersForCometitor(id:any){
    return this.http.get<PlayerInterface[]>(`${this.api}/Player/competitor/${id}?includeSources=true`)
    .pipe(
      map((responseData) => {

        return responseData.sort((a,b) => a.name.localeCompare(b.name));

      }),
      
      catchError(errorResponse => {
        console.log(errorResponse.message);
        return throwError(errorResponse.message);
      })
      
    );
  }

  


}
