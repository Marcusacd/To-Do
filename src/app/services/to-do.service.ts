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

  // getTodoByList(id: number, status: string): Observable<ItemToDo[]> {
  //   const params = new HttpParams().set('idlista', id).set('status', status)
  //   return this.http.get<ItemToDo[]>(`${this.API}/todo`, { params })
  // }

  getTodoByList(id: number): Observable<ItemToDo[]> {
    const params = new HttpParams().set('idlista', id)
    return this.http.get<ItemToDo[]>(`${this.API}/todo`, { params })
  }
  // teste para ver se funciona separar as mensagens abertas das finalizadas
  testandoConcluido(status: string): Observable<ItemToDo[]> {
    const params = new HttpParams().set('status', status)
    return this.http.get<ItemToDo[]>(`${this.API}/todo`, { params })
  }

  PostListaTodo(tarefa: ItemToDo): Observable<ItemToDo> {
    return this.http.post<ItemToDo>(`${this.API}/todo`, tarefa)
  }

  excluir(id: number): Observable<ItemToDo> {
    const url = `${`${this.API}/todo`}/${id}`
    return this.http.delete<ItemToDo>(url)
  }

  putToDobyStatus(item: ItemToDo): Observable<ItemToDo> {    
    return this.http.put<ItemToDo>(`${this.API}/todo/${item.id}`, item )
  }

  nomeLista(): Observable<ListaToDo[]> {
    return this.http.get<ListaToDo[]>(`${this.API}/lista`)
  }

  postNomeLista(nome: ListaToDo): Observable<ListaToDo> {
    return this.http.post<ListaToDo>(`${this.API}/lista`, nome)
  }

  excluirNomeLista(id: number):Observable<ListaToDo> {
    const url = `${`${this.API}/lista`}/${id}`
    return this.http.delete<ListaToDo>(url)
  }

}
