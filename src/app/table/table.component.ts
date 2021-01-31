import {Component, OnInit} from '@angular/core';
import {TableService} from '../service/table/table.service';
import {ActivatedRoute} from '@angular/router';
import {Table} from '../model/table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  columnHeaders: string[] = ['no', 'logo', 'name', 'playedGames', 'points', 'won', 'draw', 'lost', 'gf', 'ga', 'gd', 'form'];
  table: Table = new Table('', '', '', []);

  constructor(private tableService: TableService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initTable();
  }

  initTable(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      console.log(`ID: ${id}`);
      this.tableService.getTable(id).subscribe(table => this.table = table);
    }
  }
}
