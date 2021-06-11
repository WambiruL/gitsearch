import { NotfoundComponent } from './notfound/notfound.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'/users', component:UserComponent},
  {path:'/repos', component:RepositoriesComponent},
  { path:'**', component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
