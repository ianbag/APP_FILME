import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailAddComponent } from './movie-details/movie-detail-add/movie-detail-add.component';
import { MovieDetailEditComponent } from './movie-details/movie-detail-edit/movie-detail-edit.component';
import { MovieDetailComponent } from './movie-details/movie-detail/movie-detail.component';


const routes: Routes = [
  {path: 'movie', component: MovieDetailsComponent},
  {path: 'movie/add', component: MovieDetailAddComponent},
  {path: 'movie/edit/:id', component: MovieDetailEditComponent},
  {path: 'movie/show/:id', component: MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
