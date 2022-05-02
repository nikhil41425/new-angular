import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { GroceriesComponent } from './groceries/groceries.component';

const routes: Routes = [
 
  {path:"electronices",component:ElectronicsComponent},
  {path:"books",component:BooksComponent},
  {path:"groceries",component:GroceriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
