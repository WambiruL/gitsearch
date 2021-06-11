import { RepositoriesComponent } from './repositories/repositories.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'/users', component:UserComponent},
  {path:'/repos', component:RepositoriesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
