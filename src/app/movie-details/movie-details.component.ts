import { Component, OnInit } from '@angular/core';
import { MovieDetail } from '../shared/movie-detail.model';
import { MovieDetailService } from '../shared/movie-detail.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: []
})
export class MovieDetailsComponent implements OnInit {

  movies: MovieDetail[] = null

  constructor(
    private movieDetailService: MovieDetailService
  ) { }

  ngOnInit() {
    this.listMovies()
  }

  listMovies(){
    this.movieDetailService.get().subscribe(movies => 
      this.movies = movies
    )
  }
}
