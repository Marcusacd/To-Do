import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListaToDo } from '../models/listato-do';

@Component({
  selector: 'app-icone-lista-modal',
  templateUrl: './icone-lista-modal.component.html',
  styleUrls: ['./icone-lista-modal.component.scss']
})
export class IconeListaModalComponent {

  valorInput: string = ''

  @Output() closeModal = new EventEmitter<boolean>()
  @Output() changeIcon = new EventEmitter<ListaToDo>()


  fecharModal() {
    this.closeModal.emit()
  }

  salvar(id: number, nome: string, icon: string) {
    this.changeIcon.emit(new ListaToDo(0, nome, icon))
  }

}
