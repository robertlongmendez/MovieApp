import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { SeenListComponent } from './seen-list/seen-list.component';
import { MoviesComponent } from './movies/movies.component';
import { WatchListEditComponent } from './watch-list/watch-list-edit/watch-list-edit.component';
import { SeenListEditComponent } from './seen-list/seen-list-edit/seen-list-edit.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieItemComponent } from './movies/movie-list/movie-item/movie-item.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WatchListComponent,
    SeenListComponent,
    MoviesComponent,
    WatchListEditComponent,
    SeenListEditComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
