import { Component, OnInit } from '@angular/core';

import { Title } from '../shared/title.model'

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {
  titles: Title[] = [
    new Title('Escape From New York', 'Action'),
    new Title('Escape From L.A.', 'Action'),
    new Title('The Boys From Brazil', 'Drama')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
