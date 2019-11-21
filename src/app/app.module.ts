import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailComponent } from './movie-details/movie-detail/movie-detail.component';
import { MovieDetailAddComponent } from './movie-details/movie-detail-add/movie-detail-add.component';
import { MovieDetailEditComponent } from './movie-details/movie-detail-edit/movie-detail-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    MovieDetailComponent,
    MovieDetailAddComponent,
    MovieDetailEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
