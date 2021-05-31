import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Title } from 'src/app/shared/title.model';
import { SeenListService } from '../seen-list.service';

@Component({
  selector: 'app-seen-list-edit',
  templateUrl: './seen-list-edit.component.html',
  styleUrls: ['./seen-list-edit.component.css']
})
export class SeenListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('genreInput') genreInputRef: ElementRef;
  @ViewChild('filmYearInput') filmYearInputRef: ElementRef;


  constructor(private slService: SeenListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const movName = this.nameInputRef.nativeElement.value;
    const movGenre = this.genreInputRef.nativeElement.value;
    const movFilmYear = this.filmYearInputRef.nativeElement.value;
    const newTitle = new Title(movName, movGenre, movFilmYear);
    this.slService.addTitle(newTitle);
  }

}
