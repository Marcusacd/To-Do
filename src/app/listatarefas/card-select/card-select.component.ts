import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemToDo } from 'src/app/models/itemto-do';

@Component({
  selector: 'app-card-select',
  templateUrl: './card-select.component.html',
  styleUrls: ['./card-select.component.scss']
})
export class CardSelectComponent {

  @Input() toDoText?: ItemToDo[]
  @Output() excluirItem =  new EventEmitter<number>()
  @Output() postStatus =  new EventEmitter<ItemToDo>()
  @Output() testeStatus =  new EventEmitter<ItemToDo>()


  excluir(id: number) {
    this.excluirItem.emit(id)
  }

  putTodoByStatus(status: ItemToDo) {
    this.postStatus.emit(status)    
  }

  testandoConcluido(status: ItemToDo) {
    this.testeStatus.emit(status)
  }

}


