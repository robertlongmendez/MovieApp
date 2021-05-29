import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { Title } from 'src/app/shared/title.model';

@Component({
  selector: 'app-seen-list-edit',
  templateUrl: './seen-list-edit.component.html',
  styleUrls: ['./seen-list-edit.component.css']
})
export class SeenListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('genreInput') genreInputRef: ElementRef;
  @Output() titleAdded = new EventEmitter<Title>();


  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const movName = this.nameInputRef.nativeElement.value;
    const movGenre = this.genreInputRef.nativeElement.value;
    const newTitle = new Title(movName, movGenre);
    this.titleAdded.emit(newTitle);
  }

}
