import {Injectable} from '@angular/core';
import {League} from '../model/league.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, filter, map} from 'rxjs/operators';
import {LeagueConverter} from './league.converter';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  private competitionUrl = 'http://api.football-data.org/v2/competitions';

  constructor(private httpClient: HttpClient, private leagueConverter: LeagueConverter) {
  }

  /*et leagues(): Observable<League[]> {
    return of([
      this.getLeague(2021),
      this.getLeague(2014),
      this.getLeague(2002),
      this.getLeague(2019),
      this.getLeague(2015),
      this.getLeague(2021),
    ]);
    if (ids.some(value => value === c.id)) {
              console.log(c);
              selectedLeagues.push(LeagueService.createLeague(c));
            }
  }*/

  getLeagues(): Observable<League[]> {
    const headerDict = {
      'X-Auth-Token': 'ae553acb4f6f4f448d842bbbdf3e494f'
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    const ids: number[] = [2021, 2014, 2002, 2019, 2015, 2021, 2003];
    return this.httpClient.get(this.competitionUrl, requestOptions)
      .pipe(
        map((resp: any) => resp.competitions),
        map((comps: any[]) => comps.filter(c => ids.some(value => value === c.id))),
        map((comps: any[]) => comps.map(c => {
          const league = this.leagueConverter.convert(c);
          console.log(league);
          return league;
        })),
        catchError(this.handleError<League[]>('getLeagues'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
