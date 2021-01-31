import {Converter} from '../converter';
import {League} from '../../model/league.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeagueConverter implements Converter<League> {
  convert(data: any): League {
    return new League(data.id, data.name, data.area.name, data.area.countryCode, data.area.ensignUrl);
  }
}
