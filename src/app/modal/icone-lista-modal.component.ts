import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { ListaToDo } from '../models/listato-do';

@Component({
  selector: 'app-icone-lista-modal',
  templateUrl: './icone-lista-modal.component.html',
  styleUrls: ['./icone-lista-modal.component.scss']
})
export class IconeListaModalComponent implements OnInit {

constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.selectRootElement("#nomeLista").focus()
  }

  valorInput: string = ''
  nomeLista: string = ''


  @Input() listaToDo?: ListaToDo[]
  @Output() closeModal = new EventEmitter<boolean>()
  @Output() addNomeIcone = new EventEmitter<ListaToDo>()
  


  fecharModal() {
    this.closeModal.emit()
  }

  salvar(id: number, nome: string, icon: string) {
    this.addNomeIcone.emit(new ListaToDo(id, nome, icon))
  }

}
