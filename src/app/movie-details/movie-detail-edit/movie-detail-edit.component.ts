import { Component, OnInit } from '@angular/core';
import { MovieDetailService } from 'src/app/shared/movie-detail.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieDetail } from 'src/app/shared/movie-detail.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-movie-detail-edit',
  templateUrl: './movie-detail-edit.component.html',
  styleUrls: []
})
export class MovieDetailEditComponent implements OnInit {

  movieForm: FormGroup;
  movie: any

  constructor(
    private movieDetailService: MovieDetailService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.getMovieById();
    this.movieForm = this.formBuilder.group({
      nome: ['teste', [Validators.required, Validators.minLength(3)]],
      genero: ['', [Validators.required]],
      dataLancamento: ['', [Validators.required]]
    });
  }

  getMovieById() {
    this.movieDetailService.getById(this.route.snapshot.params.id)
      .subscribe(async res => {
        this.movie = await res
        this.movie.dataLancamento = await this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.movieForm.patchValue(res);
      })
  }

  async onSubmit(movieData: MovieDetail) {
    movieData.MVId = await Number(this.route.snapshot.params.id)
    this.movieDetailService.put(movieData, this.route.snapshot.params.id).subscribe(
      res => {
        this.toastr.success(`Filme ${movieData['nome']} editado!`, 'Sucesso');
        this.movieForm.reset();
        this.router.navigate(['/movie']);
      },
      error => {
        this.toastr.error(`Houve algum problema ao editar`, 'Erro');
        console.warn('error', error);
      }
    )
  }

  get nome() { return this.movieForm.get('nome') }

  get genero() { return this.movieForm.get('genero') }

  get dataLancamento() { return this.movieForm.get('dataLancamento') }

}
