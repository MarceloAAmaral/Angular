import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Marcelo Alves';
  idade: number = 46;
  profissao: string = "Analista de sistemas";
  hobbies: string[] = ["correr","estudar","viajar"]
  constructor() {}
  ngOnInit(): void {}
}
