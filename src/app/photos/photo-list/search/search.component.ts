import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'hp-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {
  /** Evento onTyping criado para possibilitar a comunicação entre os componentes html search e photo-list */
  @Output() onTyping = new EventEmitter<string>();

  @Input() value: string = '';//inbound property que limpará o campo search quando não houver mais fotos para carregar com o filtro
  /** Propriedade que atrasa em x milissegundos o início da busca do keyup, ao invés de buscar por cada caracter digitado */
  debounce: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.onTyping.emit(filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
  /** Criei este método para resolver o problema de na tag html o target não conseguir obter o value */
  onKeyUp(evento: KeyboardEvent) {
    this.debounce.next((<HTMLInputElement>evento.target).value);
  }
}


