import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Title } from 'src/app/shared/title.model';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  id: number;

  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router) {

     }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.movie = this.movieService.getMovie(this.id);
      }
    )
  }

  onRateMovie() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onAddToSeenList() {
    this.movieService.addMoviesToSeenList(this.movie.title);
  }

  onDeleteRecipe() {
    this.movieService.deleteMovie(this.id);
        this.router.navigate(['/movies']);


  }
}
