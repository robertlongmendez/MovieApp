import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SeenListComponent } from './seen-list/seen-list.component';
import { MoviesComponent } from './movies/movies.component';
import { SeenListEditComponent } from './seen-list/seen-list-edit/seen-list-edit.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieItemComponent } from './movies/movie-list/movie-item/movie-item.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { SeenListService } from './seen-list/seen-list.service';
import { AppRoutingModule } from './app-routing.module';
import { MovieStartComponent } from './movies/movie-start/movie-start.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { MovieFeedComponent } from './movie-feed/movie-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SeenListComponent,
    MoviesComponent,
    SeenListEditComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieDetailComponent,
    MovieFeedComponent,
    DropdownDirective,
    MovieStartComponent,
    MovieEditComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SeenListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
