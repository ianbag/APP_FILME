import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailComponent } from './movie-details/movie-detail/movie-detail.component';
import { MovieDetailAddComponent } from './movie-details/movie-detail-add/movie-detail-add.component';
import { MovieDetailEditComponent } from './movie-details/movie-detail-edit/movie-detail-edit.component';
import { MenuComponent } from './shared/layout/menu/menu.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { InputComponent } from './shared/input/input.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    MovieDetailComponent,
    MovieDetailAddComponent,
    MovieDetailEditComponent,
    MenuComponent,
    FooterComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot()
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
