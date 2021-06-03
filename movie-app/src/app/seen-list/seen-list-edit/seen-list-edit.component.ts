import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Title } from 'src/app/shared/title.model';
import { SeenListService } from '../seen-list.service';

@Component({
  selector: 'app-seen-list-edit',
  templateUrl: './seen-list-edit.component.html',
  styleUrls: ['./seen-list-edit.component.css']
})
export class SeenListEditComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Title;


  constructor(private slService: SeenListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
    .subscribe(
    (index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.slService.getTitle(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        genre: this.editedItem.genre,
        filmYear: this.editedItem.filmYear
      })
    }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value
    const newTitle = new Title(value.name, value.genre, value.filmYear);
    if (this.editMode) {
      this.slService.updateTitle(this.editedItemIndex, newTitle);
    } else {
      this.slService.addTitle(newTitle);
      }
      this.editMode = false;
      form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteTitle(this.editedItemIndex);
    this.onClear();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
