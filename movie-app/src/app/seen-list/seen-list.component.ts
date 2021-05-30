import { Component, OnInit } from '@angular/core';

import { Title } from '../shared/title.model'
import { SeenListService } from './seen-list.service';

@Component({
  selector: 'app-seen-list',
  templateUrl: './seen-list.component.html',
  styleUrls: ['./seen-list.component.css']
})
export class SeenListComponent implements OnInit {
  titles: Title[];

  constructor(private slService: SeenListService) { }

  ngOnInit(): void {
    this.titles = this.slService.getTitles();
  }
}
