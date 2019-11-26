import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieDetail } from '../shared/movie-detail.model';
import { MovieDetailService } from '../shared/movie-detail.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: []
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  private movies: MovieDetail[] = null;

  constructor(
    private movieDetailService: MovieDetailService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.listMovies()
  }

  listMovies() {
    this.movieDetailService.get().subscribe(movies => this.movies = movies)
  }

  deleteMovie(id: number) {
    this.movieDetailService.delete(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        res => {
          this.toastr.success(`Filme ${res.nome} deletado!`, 'Sucesso');
          this.listMovies();
        },
        error => {
          this.toastr.error(`Houve um problema ao deletar.`, 'Erro');
          console.warn('error ao deletar filme: ', error);
        }
      )
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
