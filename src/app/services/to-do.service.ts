import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaToDo } from '../models/listato-do';
import { ItemToDo } from '../models/itemto-do';

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

  getTodoByList(id: number): Observable<ItemToDo[]> {
    const params = new HttpParams().set('idlista', id)
    return this.http.get<ItemToDo[]>(`${this.API}/todo`, { params })
  }

  PostListaTodo(tarefa: ItemToDo): Observable<ItemToDo> {
    return this.http.post<ItemToDo>(`${this.API}/todo`, tarefa)
  }

  excluir(id: number): Observable<ItemToDo> {
    const url = `${`${this.API}/todo`}/${id}`
    return this.http.delete<ItemToDo>(url)
  }

  nomeLista(): Observable<ListaToDo[]> {
    return this.http.get<ListaToDo[]>(`${this.API}/lista`)
  }

  postNomeLista(nome: ListaToDo): Observable<ListaToDo> {
    return this.http.post<ListaToDo>(`${this.API}/lista`, nome)
  }

}
