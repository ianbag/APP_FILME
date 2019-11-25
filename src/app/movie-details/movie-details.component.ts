import { Component, OnInit } from '@angular/core';
import { MovieDetail } from '../shared/movie-detail.model';
import { MovieDetailService } from '../shared/movie-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: []
})
export class MovieDetailsComponent implements OnInit {

  movies: MovieDetail[] = null

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
    this.movieDetailService.delete(id).subscribe(
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

}
