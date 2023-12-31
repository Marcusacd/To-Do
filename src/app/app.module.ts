import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListatarefasComponent } from './listatarefas/listatarefas.component';
import { CardSelectComponent } from './listatarefas/card-select/card-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { IconeListaModalComponent } from './modal/icone-lista-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    ListatarefasComponent,
    CardSelectComponent,
    IconeListaModalComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
