import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { MovieDetailService } from 'src/app/shared/movie-detail.service';
import { MovieDetail } from 'src/app/shared/movie-detail.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-movie-detail-add',
  templateUrl: './movie-detail-add.component.html',
  styleUrls: []
})
export class MovieDetailAddComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  private movieForm: FormGroup;

  constructor(
    private movieDetailService: MovieDetailService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      genero: ['', [Validators.required]],
      dataLancamento: ['', [Validators.required]]
    });
  }

  onSubmit(movieData: MovieDetail) {
    this.movieDetailService.post(movieData)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        res => {
          this.toastr.success(`Filme ${res.nome} adicionado!`, 'Sucesso');
          this.movieForm.reset();
          this.router.navigate(['/movie']);
        },
        error => {
          this.toastr.error(`Houve algum problema ao adicionar`, 'Erro');
          console.warn('error', error);
        }
      )
  }

  get nome() { return this.movieForm.get('nome') }

  get genero() { return this.movieForm.get('genero') }

  get dataLancamento() { return this.movieForm.get('dataLancamento') }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
