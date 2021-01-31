import {Component, OnInit} from '@angular/core';
import {TableService} from '../service/table/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private tableService: TableService) {
  }

  ngOnInit(): void {
  }

  table(id: string): any {
    this.tableService.getTable(id)
      .subscribe(value => value);
  }
}
