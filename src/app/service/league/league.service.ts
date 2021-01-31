import {Injectable} from '@angular/core';
import {League} from '../../model/league.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {LeagueConverter} from './league.converter';
import {Url} from '../url';
import {Token} from '../token';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private httpClient: HttpClient, private leagueConverter: LeagueConverter) {
  }

  getLeagues(): Observable<League[]> {
    const requestOptions = {headers: new HttpHeaders(Token.AUTH_TOKEN)};
    const ids: number[] = [2021, 2014, 2002, 2019, 2015, 2021, 2003];
    return this.httpClient.get(Url.COMPETITIONS_URL, requestOptions)
      .pipe(
        map((resp: any) => resp.competitions),
        map((comps: any[]) => comps.filter(c => ids.some(value => value === c.id))),
        map((comps: any[]) => comps.map(c => {
          const league = this.leagueConverter.convert(c);
          console.log(league.countryCode + '-' + league.title + '-' + league.id);
          return league;
        })),
        catchError(this.handleError<League[]>('getLeagues'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T): any {
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
