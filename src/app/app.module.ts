import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailComponent } from './movie-details/movie-detail/movie-detail.component';
import { MovieDetailAddComponent } from './movie-details/movie-detail-add/movie-detail-add.component';
import { MovieDetailEditComponent } from './movie-details/movie-detail-edit/movie-detail-edit.component';
import { MenuComponent } from './shared/layout/menu/menu.component';
import { FooterComponent } from './shared/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    MovieDetailComponent,
    MovieDetailAddComponent,
    MovieDetailEditComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
