import { Component, OnInit } from '@angular/core';
import { MovieDetailService } from 'src/app/shared/movie-detail.service';
import { MovieDetail } from 'src/app/shared/movie-detail.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: []
})
export class MovieDetailComponent implements OnInit {

  private id: number = null
  private movie: MovieDetail

  constructor(
    private movieDetailService: MovieDetailService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id
    this.listMovie(this.id);
  }

  listMovie(id: number){
    this.movieDetailService.getById(id).subscribe(movie => this.movie = movie)
  }

}