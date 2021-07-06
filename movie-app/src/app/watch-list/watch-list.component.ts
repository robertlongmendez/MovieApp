import { Component, OnInit } from '@angular/core';

import { Facts } from '../shared/facts.model'

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {
  facts: Facts[] = [
    new Facts('Escape From New York', 'Action', '1981'),
    new Facts('Escape From L.A.', 'Action', '1996'),
    new Facts('The Boys From Brazil', 'Drama', '1978')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
