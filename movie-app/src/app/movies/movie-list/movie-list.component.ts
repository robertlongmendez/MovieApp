import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MovieService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
this.movies = this.movieService.getMovies();
  }

  onNewMovie() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
