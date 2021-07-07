import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Poster } from "../shared/poster.model";

@Component({
  selector: 'app-movie-feed',
  templateUrl: './movie-feed.component.html',
  styleUrls: ['./movie-feed.component.css']
})

export class MovieFeedComponent implements OnInit {
  posts: Poster[] = [];

  constructor(private http: HttpClient) {}


   ngOnInit() {
    this.http
      .get<Poster[]>('')
      .subscribe(fetchedPosts => (this.posts = fetchedPosts['results']));

  }
}




