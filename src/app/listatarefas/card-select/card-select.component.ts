import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListaToDo } from 'src/app/models/listato-do';

@Component({
  selector: 'app-card-select',
  templateUrl: './card-select.component.html',
  styleUrls: ['./card-select.component.scss']
})
export class CardSelectComponent {

  @Input() toDoText?: ListaToDo[]
  @Output() excluirItem =  new EventEmitter<number>()


  excluir(id: number) {
    this.excluirItem.emit(id)
  }
}
