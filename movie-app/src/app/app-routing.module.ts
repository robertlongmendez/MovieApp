import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieDetailComponent } from "./movies/movie-detail/movie-detail.component";
import { MovieStartComponent } from "./movies/movie-start/movie-start.component";
import { MoviesComponent } from "./movies/movies.component";
import { SeenListComponent } from "./seen-list/seen-list.component";
import { WatchListComponent } from "./watch-list/watch-list.component";

const appRoutes: Routes = [

  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent, children: [
    {path: '', component: MovieStartComponent },
    { path: ':id', component: MovieDetailComponent}
  ] },
  { path: 'seen-list', component: SeenListComponent },
  { path: 'watch-list', component: WatchListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
