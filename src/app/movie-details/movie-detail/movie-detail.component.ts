import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieDetailService } from 'src/app/shared/movie-detail.service';
import { MovieDetail } from 'src/app/shared/movie-detail.model';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: []
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  private id: number = null
  private movie: MovieDetail
  private unsubscribe$ = new Subject<void>();

  constructor(
    private movieDetailService: MovieDetailService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.listMovie(this.id);
  }

  listMovie(id: number) {
    this.movieDetailService.getById(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(movie => this.movie = movie);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}