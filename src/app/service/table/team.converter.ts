import {Injectable} from '@angular/core';
import {Converter} from '../converter';
import {Team} from '../../model/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamConverter implements Converter<Team> {
  convert(data: any): Team {
    return new Team(
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
