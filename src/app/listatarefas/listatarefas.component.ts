import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ListaToDo } from '../models/listato-do';
import { ToDoService } from '../services/to-do.service';

@Component({
  selector: 'app-listatarefas',
  templateUrl: './listatarefas.component.html',
  styleUrls: ['./listatarefas.component.scss']
})
export class ListatarefasComponent implements OnInit {


  toDoText: ListaToDo[] = []
  formToDo!: FormGroup
  tabAtiva?: string = 'tab1'
  listaToDo: ListaToDo[] = []
  formListaNome!: FormGroup



  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private listToDoService: ToDoService,
    private route: ActivatedRoute
  ) {
    this.formToDo = this.formBuilder.group({
      inputToDo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])]
    })
    this.formListaNome = this.formBuilder.group({
      inputNomeLista: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.renderer.selectRootElement("#texto").focus()
    // this.listar()
    // this.getListaTodo()
    this.nomeLista()
   
  }

  teclaEnter(event: Event) {
    event.preventDefault(); // Impede o comportamento padrão da tecla Enter
    event.stopPropagation(); // Impede a propagação do evento para outros elementos 
    // this.addToDo()
  }

  // addToDo() {
  //   const item: ItemToDo = new ItemToDo
  //   item.descricao = this.formToDo.value.inputToDo
  //   if (this.formToDo.valid === true) {
  //     this.toDoText.push(item)
  //     this.listToDoService.criar(item).subscribe()
  //     this.formToDo.reset()
  //     this.listar()
  //   }
  // }

  // listar() {
  //   this.listToDoService.listar().subscribe((data) => {
  //     this.toDoText = data
  //   })
  // }

  // criar() {
  //   this.listToDoService.criar(this.formToDo.value.inputToDo).subscribe()
  // }

  // excluir(id: number) {
  //   this.listToDoService.excluir(id).subscribe((data) => {
  //     console.log('passei pelo excluir', data)
  //   })
  //   this.listar()
  // }

  getListaTodo() {
    this.listToDoService.getListaTodo().subscribe((data) => {
      this.toDoText = data
    })
  }

  addToDo() {
    const item: ListaToDo = new ListaToDo
    // item.itens = this.formToDo.value.inputToDo
    if (this.formToDo.valid === true) {
      this.toDoText.push(item)
      this.listToDoService.PostListaTodo(item).subscribe()
      this.formToDo.reset()
      this.getListaTodo()
    }
  }

  excluir(id: number) {
    this.listToDoService.excluir(id).subscribe((data) => {
      console.log('excluir', data)
    })
    this.getListaTodo()
  }

  nomeLista() {
    this.listToDoService.nomeLista().subscribe((data) => {
      this.listaToDo = data
    })
  }

  addNomeLista() {
    const item: ListaToDo = new ListaToDo
    item.nome = this.formListaNome.value.inputNomeLista
    if (this.formListaNome.valid === true) {
      this.listaToDo.push(item)
      this.listToDoService.postNomeLista(item).subscribe()
      this.formListaNome.reset()
      this.nomeLista()
    }
  }
}
