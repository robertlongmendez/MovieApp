import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seen-list',
  templateUrl: './seen-list.component.html',
  styleUrls: ['./seen-list.component.css']
})
export class SeenListComponent implements OnInit {
  titles = [];

  constructor() { }

  ngOnInit(): void {
  }

}
