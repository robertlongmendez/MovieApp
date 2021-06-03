import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Title } from 'src/app/shared/title.model';
import { SeenListService } from '../seen-list.service';

@Component({
  selector: 'app-seen-list-edit',
  templateUrl: './seen-list-edit.component.html',
  styleUrls: ['./seen-list-edit.component.css']
})
export class SeenListEditComponent implements OnInit {



  constructor(private slService: SeenListService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    const value = form.value
    const newTitle = new Title(value.name, value.genre, value.filmYear);
    this.slService.addTitle(newTitle);
  }

}
