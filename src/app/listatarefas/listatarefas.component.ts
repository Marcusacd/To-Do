import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListaToDo } from '../models/listato-do';
import { ToDoService } from '../services/to-do.service';
import { ItemToDo } from '../models/itemto-do';
import { Statustodo } from '../enum/status-todo.enum';




@Component({
  selector: 'app-listatarefas',
  templateUrl: './listatarefas.component.html',
  styleUrls: ['./listatarefas.component.scss']
})
export class ListatarefasComponent implements OnInit {


  toDoText: ItemToDo[] = []
  formToDo!: FormGroup
  tabAtiva?: number
  listaToDo: ListaToDo[] = []
  formListaNome!: FormGroup
  selectedList?: ListaToDo
  itemToDoFinalizado: ItemToDo[] = []
  showNome: boolean = false
  showModal: boolean = false




  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private listToDoService: ToDoService,

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

    this.nomeLista()

  }

  enterCriarTarefa(event: Event) {
    event.preventDefault(); // Impede o comportamento padrão da tecla Enter
    event.stopPropagation(); // Impede a propagação do evento para outros elementos 
    this.addToDo()
  }

  enterListaNome(evento: Event) {
    evento.preventDefault(); // Impede o comportamento padrão da tecla Enter
    evento.stopPropagation(); // Impede a propagação do evento para outros elementos 
    // this.addNomeLista()    
    this.showModal = true
  }

  buscarToDo(lista: ListaToDo) {
    this.listToDoService.getTodoByList(lista.id!, Statustodo.aberto).subscribe((data) => {
      // this.listToDoService.getTodoByList(lista.id!).subscribe((data) => {
      // console.log('buscarToDo', data)
      this.tabAtiva = lista.id
      this.getListaTodo(lista)
      this.getTodoStatusCompleted(lista, Statustodo.finalizar)
      this.selectedList = lista
    })
  }

  getListaTodo(lista: ListaToDo) {
    this.listToDoService.getTodoByList(lista.id!, Statustodo.aberto).subscribe((data) => {
      // this.listToDoService.getTodoByList(lista.id!).subscribe((data) => {
      this.toDoText = data
    })
  }

  getListById(id: number) {
    this.listToDoService.getTodoByList(id, Statustodo.aberto).subscribe((data) => {
      // this.listToDoService.getTodoByList(id).subscribe((data) => {
      this.toDoText = data
    });
  }

  addToDo() {
    const item: ItemToDo = new ItemToDo
    item.descricao = this.formToDo.value.inputToDo
    item.idlista = this.selectedList!.id
    item.status = Statustodo.aberto
    console.log("idlista", item.idlista)
    if (this.formToDo.valid === true) {
      this.toDoText.push(item)
      this.listToDoService.PostListaTodo(item).subscribe()
      this.formToDo.reset()
      this.getListaTodo(this.selectedList!)
    }
  }

  excluir(id: number) {
    this.listToDoService.excluir(id).subscribe((data) => {
      console.log('excluir', data)
    })
    this.getListaTodo(this.selectedList!)
    this.getTodoStatusCompleted(this.selectedList!, Statustodo.finalizar)
  }

  excluirNomeLista(id: number) {
    if (this.toDoText.length === 0) {
      this.listToDoService.excluirNomeLista(id).subscribe((data) => {
        console.log('excluirNomeLista', data)
        this.nomeLista()
      })
    } else {
      window.alert('A lista não esta vazia. Não é possivel excluir a lista')
    }
  }

  nomeLista() {
    this.listToDoService.nomeLista().subscribe((data) => {
      data.forEach(item => {
        this.listaToDo.push(new ListaToDo(item.id!, item.nome!, item.icone))
      })
      console.log("listaToDo", this.listaToDo)
      console.log("data", data)
      if (this.listaToDo.length > 0) {
        this.buscarToDo(this.listaToDo[0])
      }
    })
  }

  // addNomeLista(nome: string, icone: string) {
  //   const item: ListaToDo = new ListaToDo(0, nome, icone)
  //   // item.nome = this.formListaNome.value.inputNomeLista
  //   if (this.formListaNome.valid === true) {
  //     this.listToDoService.postNomeLista(item).subscribe((data) => {
  //       if (data) {
  //         this.listaToDo.push(item)
  //         this.formListaNome.reset()
  //       }
  //     })
  //   }
  // }

  addNomeLista(lista: ListaToDo) {
    const item: ListaToDo = new ListaToDo(lista.id!, lista.nome!, lista.icone)    
    // item.nome = this.formListaNome.value.inputNomeLista
    console.log('id da lista', lista.id)    
    this.listToDoService.postNomeLista(item).subscribe((data) => {
      if (data) {
        this.listaToDo.push(item)
        this.formListaNome.reset()
      }
    })
    this.closeModal()
    this.getListaTodo(this.selectedList!)
  }

  putTodoByStatus(item: ItemToDo) {
    if (item.status === Statustodo.aberto) {
      item.status = Statustodo.finalizar
      this.listToDoService.putToDobyStatus(item).subscribe(data => {
        console.log("putTodoByStatus123", data)
        this.getListaTodo(this.selectedList!)
        this.getTodoStatusCompleted(this.selectedList!, Statustodo.finalizar)
      })
    } else {
      item.status = Statustodo.aberto
      this.listToDoService.putToDobyStatus(item).subscribe(data => {
        console.log("putTodoByStatus123", data)
        this.getListaTodo(this.selectedList!)
        this.getTodoStatusCompleted(this.selectedList!, Statustodo.finalizar)
      })
    }
  }

  // putTodoByStatus(item: ItemToDo) { 
  //   item.status = Statustodo.finalizar
  //   this.listToDoService.putToDobyStatus(item).subscribe(data => {
  //     console.log("putTodoByStatus123", data)
  //     // this.getListaTodo(this.selectedList!)
  //     if (data) { 
  //       item.status = Statustodo.finalizar
  //     } 
  //     // risca a lista             
  //   }, (error) => {
  //     item.status = Statustodo.aberto
  //   }
  //   )
  // }


  getTodoStatusCompleted(lista: ListaToDo, status: string) {
    if (status === Statustodo.finalizar) {
      // status.idlista = this.selectedList?.id
      this.listToDoService.getTodoStatusCompleted(lista.id!, Statustodo.finalizar).subscribe((data) => {
        console.log("testandoConcluido", data)
        this.itemToDoFinalizado = data
      })
    }
  }

  toggleList() {
    this.showNome = !this.showNome
    // console.log("displayNome", this.showNome)
  }

  openModal() {
    this.showModal = true
  }

  closeModal() {
    this.showModal = false
  }

}
