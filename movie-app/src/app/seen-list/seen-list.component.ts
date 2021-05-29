import { Component, OnInit } from '@angular/core';

import { Title } from '../shared/title.model'

@Component({
  selector: 'app-seen-list',
  templateUrl: './seen-list.component.html',
  styleUrls: ['./seen-list.component.css']
})
export class SeenListComponent implements OnInit {
  titles: Title[] = [
    new Title('Creepozoids', 'Horror/Sci-fi'),
    new Title('The Killer Shrews', 'Sci-fi/Horror'),
    new Title('Night of the Creeps', 'Horror/Comedy')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onTitleAdded(title: Title) {
    this.titles.push(title);
  }

}
