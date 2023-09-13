import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListatarefasComponent } from './listatarefas/listatarefas.component';

const routes: Routes = [
  { path: 'listatarefas', component: ListatarefasComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
