import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {
  selectedMovie: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.movieSelected
      .subscribe(
        (movie: Movie) => {
          this.selectedMovie = movie;
        }
      )
  }

}
