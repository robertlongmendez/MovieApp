import { Injectable } from '@angular/core';

import { SeenListService } from '../seen-list/seen-list.service';
import { Title } from '../shared/title.model';
import { Movie } from './movie.model';

@Injectable({providedIn: 'root'})
export class MovieService {

  private movies: Movie[] = [
    new Movie(
      'Attack of the Killer Tomatoes',
      'Aaargh!...',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrvQEBxBu-xAvpeHP6Srio3VI2iXj26vLC5BnM8qGETOezQ4ergsY60jlpWpn56XI8sTQ&usqp=CAU',
        new Title('Attack of the Killer Tomatoes', 'Horror Comedy', '1978')
      ),
    new Movie(
      'Arcade',
      'The game wants to play with you.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nUdtA3UVAPClm30Jz2TPzNVrijb6wrpiF0ciY5NJ3QEqbwmPcwRma0_xzBTpxIzBOiY&usqp=CAU',
      new Title('Arcarde', 'Sci-fi Horror', '1993')
    ),
    new Movie(
      'The Giant Gila Monster',
      'Pretty Straight Forward',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLsLW26rNqWteyo7fIdRfB7-IuGvzXbLnF1zkQ5S1IcDoDrB2HWgyHedrah7vYHqWsQ8&usqp=CAU',
      new Title('The Giant Gila Monster', 'Sci-fi Horror', '1959')
    )
  ];

  constructor(private slService: SeenListService) {

  }

  getMovies() {
    return this.movies.slice();
  }

  getMovie(index: number) {
    return this.movies[index];
  }

  addMoviesToSeenList(titles: Title) {
    this.slService.addTitle(titles);
  }
}
