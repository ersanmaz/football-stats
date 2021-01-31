import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Token} from '../token';
import {Url} from '../url';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {TeamConverter} from './team.converter';
import {Team} from '../../model/team.model';
import {Table} from '../../model/table.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private httpClient: HttpClient,
              private teamConverter: TeamConverter) {
  }

  getTable(id: string): Observable<Table> {
    const url = Url.COMPETITIONS_URL + '/' + id + '/standings';
    const requestOptions = {headers: new HttpHeaders(Token.AUTH_TOKEN)};
    return this.httpClient.get(url, requestOptions)
      .pipe(
        //tap(x => console.log(JSON.stringify(x, null, '\t'))),
        map((resp: any) => this.createTable(resp)),
        //map((standings: any[]) => standings[0]),
        //map((table: any[]) => table.map(tm => this.teamConverter.convert(tm))),
        catchError(this.handleError<Table>('getTable'))
      );
  }

  private createTable(data: any): Table {
    const leagueId: string = data.competition.id;
    const leagueName: string = data.competition.name;
    const logo = `${leagueId}.svg`;
    const table: any[] = data.standings[0].table;
    const teams: Team[] = table.map((tm: any) => this.teamConverter.convert(tm));
    return new Table(leagueId, leagueName, logo, teams);
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
