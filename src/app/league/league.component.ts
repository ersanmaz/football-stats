import {Component, OnInit} from '@angular/core';
import {League} from '../model/league.model';
import {LeagueService} from '../service/league/league.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {

  leagues: League[] = [];

  constructor(private leagueService: LeagueService) {
  }

  ngOnInit(): void {
    this.leagueService.getLeagues()
      .subscribe(fetchedLeagues => this.leagues = fetchedLeagues);
  }
}
