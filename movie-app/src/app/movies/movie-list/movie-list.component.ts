import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Output() movieWasSelected = new EventEmitter<Movie>();
  movies: Movie[] = [
    new Movie('A Test Movie', 'This is definitely the end of the world type movie', 'https://townsquare.media/site/442/files/2016/06/action-posters-featured.jpg?w=980&q=75'),
    new Movie('A Test Movie', 'This is definitely the end of the world type movie', 'https://townsquare.media/site/442/files/2016/06/action-posters-featured.jpg?w=980&q=75'),
    new Movie('A Test Movie', 'This is definitely the end of the world type movie', 'https://townsquare.media/site/442/files/2016/06/action-posters-featured.jpg?w=980&q=75')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onMovieSelected(movie: Movie) {
    this.movieWasSelected.emit(movie);
  }
}
