import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { MovieDetailService } from 'src/app/shared/movie-detail.service';
import { MovieDetail } from 'src/app/shared/movie-detail.model';

@Component({
  selector: 'app-movie-detail-add',
  templateUrl: './movie-detail-add.component.html',
  styleUrls: []
})
export class MovieDetailAddComponent implements OnInit {

  movieForm: FormGroup;

  constructor(
    private movieDetailService: MovieDetailService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.movieForm = this.formBuilder.group({
      nome: ['', Validators.required, Validators.maxLength],
      genero: ['', Validators.required],
      dataLancamento: ['', Validators.required]
    });
  }

  onSubmit(movieData: MovieDetail) {
    this.movieDetailService.post(movieData).subscribe(
      res => {
        this.toastr.success(`Movie ${movieData.Nome} added!`, 'Success')
        this.movieForm.reset();
        console.warn('movie success add', res)
      },
      error => {
        this.toastr.error(`Ops... there was an error`, 'Error')
        console.warn('error', error)
      }
    )
  }


}
