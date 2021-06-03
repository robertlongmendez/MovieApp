import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Title } from '../shared/title.model'
import { SeenListService } from './seen-list.service';

@Component({
  selector: 'app-seen-list',
  templateUrl: './seen-list.component.html',
  styleUrls: ['./seen-list.component.css']
})
export class SeenListComponent implements OnInit, OnDestroy {
  titles: Title[];
  private tiChangeSub: Subscription;

  constructor(private slService: SeenListService) { }

  ngOnInit(): void {
    this.titles = this.slService.getTitles();
    this.tiChangeSub = this.slService.titlesChanged
      .subscribe(
        (titles: Title[]) => {
          this.titles = titles;
        }
      )
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.tiChangeSub.unsubscribe();
  }
}
