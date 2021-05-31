import { Component, OnInit } from '@angular/core';

import { Title } from '../shared/title.model'

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {
  titles: Title[] = [
    new Title('Escape From New York', 'Action', '1981'),
    new Title('Escape From L.A.', 'Action', '1996'),
    new Title('The Boys From Brazil', 'Drama', '1978')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
