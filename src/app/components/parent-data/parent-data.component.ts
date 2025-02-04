import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data', // define a tag HTML do componente
  imports: [],
  templateUrl: './parent-data.component.html', // arquivo template
  styleUrls: ['./parent-data.component.css'] // estilos
})
export class ParentDataComponent implements OnInit{
  @Input() name:string = ''; // variavel recebida do componente pai
  constructor(){}
  ngOnInit(): void{} // metodo do ciclo de vida que executa ao iniciar
}
