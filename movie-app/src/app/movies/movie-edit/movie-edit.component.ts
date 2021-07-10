import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
id: number;
editMode = false;
movieForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private movieService: MovieService,
              private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  onSubmit() {
    console.log(this.movieForm);
    if (this.editMode) {
      this.movieService.updateMovie(this.id, this.movieForm.value);
    } else {
      this.movieService.addMovie(this.movieForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let movieName = '';
    let movieImagePath = '';
    let movieDescription = '';
    let movieDate: '';

    if (this.editMode) {
          const movie = this.movieService.getMovie(this.id);
          movieName = movie.name;
          movieImagePath = movie.imagePath;
          movieDescription = movie.description;

    }

        this.movieForm = new FormGroup({
    'name': new FormControl(movieName, Validators.required),
    'imagePath': new FormControl(movieImagePath, Validators.required),
    'description': new FormControl(movieDescription, Validators.required),
    'date': new FormControl(movieDate, Validators.required)
        });
      }
}
