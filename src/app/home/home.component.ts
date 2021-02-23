import { Component, Input, OnInit } from '@angular/core';
// import { alunos } from '../model/alunos';
import { Carros } from '../model/carros';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  valor: number;

  ngOnInit(): void {
    this.valor = 0;
  }

  mudarValor() {
    this.valor++;
  }
}
