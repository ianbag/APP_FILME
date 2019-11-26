import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MovieDetailService } from 'src/app/shared/movie-detail.service';
import { MovieDetail } from 'src/app/shared/movie-detail.model';


@Component({
  selector: 'app-movie-detail-edit',
  templateUrl: './movie-detail-edit.component.html',
  styleUrls: []
})
export class MovieDetailEditComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  private movieForm: FormGroup;
  private movie: any;

  constructor(
    private movieDetailService: MovieDetailService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private subscription = Subscription
  ) { }

  ngOnInit(): void {
    this.getMovieById();
    this.movieForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      genero: ['', [Validators.required]],
      dataLancamento: ['', [Validators.required]]
    });
  }

  getMovieById() {
    this.movieDetailService.getById(this.route.snapshot.params.id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.movie = res
        this.movie.dataLancamento = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.movieForm.patchValue(res);
      })
  }

  onSubmit(movieData: MovieDetail) {
    movieData.MVId = Number(this.route.snapshot.params.id)
    this.movieDetailService.put(movieData, this.route.snapshot.params.id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
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

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
