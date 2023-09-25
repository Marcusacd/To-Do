import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemToDo } from 'src/app/models/itemto-do';
import { ListaToDo } from 'src/app/models/listato-do';

@Component({
  selector: 'app-card-select',
  templateUrl: './card-select.component.html',
  styleUrls: ['./card-select.component.scss']
})
export class CardSelectComponent {

  listaConcluido: boolean = false

  @Input() toDoText?: ItemToDo[]
  @Input() listaToDo?: ListaToDo[]
  @Input() tabAtiva?: number
  @Input() itemToDoFinalizado!: ItemToDo[]
  @Output() excluirItem =  new EventEmitter<number>()
  @Output() postStatus =  new EventEmitter<ItemToDo>()
  @Output() testeStatus =  new EventEmitter<ItemToDo>()


  excluir(id: number) {
    this.excluirItem.emit(id)
  }

  putTodoByStatus(status: ItemToDo) {
    this.postStatus.emit(status)    
  }

  getTodoStatusCompleted(status: ItemToDo) {
    this.testeStatus.emit(status)
  }

  listaConcluidos() {
    if(this.listaConcluido === false) {
      this.listaConcluido = true
    }else {
      this.listaConcluido = false
    }
  }

}


