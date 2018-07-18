import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TodoComponent } from './todo/todo.component';
import { HeroComponent } from './hero/hero.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'todo', component: TodoComponent},
  { path: 'hero', component: HeroComponent}
];

@NgModule({
 imports: [
   RouterModule.forRoot(routes)
 ],
 exports: [ RouterModule ]
})
export class AppRoutingModule { }
