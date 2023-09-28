import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListatarefasComponent } from './listatarefas/listatarefas.component';
import { IconeListaModalComponent } from './modal/icone-lista-modal.component';

const routes: Routes = [
  { path: '', component: ListatarefasComponent },  
  { path: 'modal', component: IconeListaModalComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
