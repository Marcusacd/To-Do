import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaToDo } from '../models/listato-do';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private API = 'http://localhost:3000'  
  
  constructor
    (
      private http: HttpClient
    ) { }

    // listar(): Observable<ItemToDo[]> {
    //   return this.http.get<ItemToDo[]>(`${this.API}/listaTarefas`)
    // }

    // criar(tarefa: ItemToDo): Observable<ItemToDo> {
    //   return this.http.post<ItemToDo>(`${this.API}/listaTarefas`, tarefa)
    // }

    // excluir(id: number): Observable<ItemToDo> {
    //   const url = `${`${this.API}/listaTarefas`}/${id}`
    //   return this.http.delete<ItemToDo>(url)
    // }

    // buscarId(id: number): Observable<ListToDo> {
    //   const url = `${this.API}/${id}`
    //   return this.http.get<ListToDo>(url)
    // }

    getListaTodo(): Observable<ListaToDo[]> {
      return this.http.get<ListaToDo[]>(`${this.API}/todo`)
    }

    PostListaTodo(tarefa: ListaToDo): Observable<ListaToDo> {
      return this.http.post<ListaToDo>(`${this.API}/todo`, tarefa)
    }

    excluir(id: number): Observable<ListaToDo> {
      const url = `${`${this.API}/todo`}/${id}`
      return this.http.delete<ListaToDo>(url)
    }

    nomeLista(): Observable<ListaToDo[]> {
      return this.http.get<ListaToDo[]>(`${this.API}/lista`)
    }

    postNomeLista(nome: ListaToDo): Observable<ListaToDo> {
      return this.http.post<ListaToDo>(`${this.API}/lista`, nome)
    }

}
