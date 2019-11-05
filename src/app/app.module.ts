import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NationalComponent } from './national/national.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CreateNationalComponent} from './create-national/create-national.component';
import { EditNationalComponent } from './edit-national/edit-national.component';
import { TournamentsComponent } from './tournaments/tournaments.component';

@NgModule({
  declarations: [
    AppComponent,
    NationalComponent,
    CreateNationalComponent,
    EditNationalComponent,
    TournamentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
