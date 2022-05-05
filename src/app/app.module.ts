import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ElectronicsComponent } from './electronics/electronics.component';
import { BooksComponent } from './books/books.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpmethodsComponent } from './httpmethods/httpmethods.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ElectronicsComponent,
    BooksComponent,
    GroceriesComponent,
    HttpmethodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
