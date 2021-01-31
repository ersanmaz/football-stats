import {Injectable} from '@angular/core';
import {Converter} from '../converter';
import {Table} from '../../model/table.model';

@Injectable({
  providedIn: 'root'
})
export class TableConverter implements Converter<Table> {
  convert(data: any): Table {
    return new Table(
      data.team.id,
      data.team.name,
      data.team.crestUrl,
      data.position,
      data.playedGames,
      data.form,
      data.won,
      data.draw,
      data.lost,
      data.points,
      data.goalsFor,
      data.goalsAgainst,
      data.goalDifference);
  }
}
