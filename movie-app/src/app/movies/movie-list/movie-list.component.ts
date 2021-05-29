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
    new Movie('Attack of the Killer Tomatoes', 'Aaargh!...', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrvQEBxBu-xAvpeHP6Srio3VI2iXj26vLC5BnM8qGETOezQ4ergsY60jlpWpn56XI8sTQ&usqp=CAU'),
    new Movie('Arcade', 'The game wants to play with you.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nUdtA3UVAPClm30Jz2TPzNVrijb6wrpiF0ciY5NJ3QEqbwmPcwRma0_xzBTpxIzBOiY&usqp=CAU'),
    new Movie('The Giant Gila Monster', 'Pretty Straight Forward', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLsLW26rNqWteyo7fIdRfB7-IuGvzXbLnF1zkQ5S1IcDoDrB2HWgyHedrah7vYHqWsQ8&usqp=CAU')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onMovieSelected(movie: Movie) {
    this.movieWasSelected.emit(movie);
  }
}
