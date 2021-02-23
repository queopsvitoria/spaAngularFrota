import { Component, OnInit } from '@angular/core';
import { Motoristas } from '../model/motoristas';

@Component({
  selector: 'spa-motorista',
  templateUrl: './motorista.component.html',
  styleUrls: ['./motorista.component.css']
})
export class MotoristaComponent implements OnInit {

  constructor() { }

  exibeTabela:  boolean = true;

  listaMotorista: Motoristas[] = [
    {id: 1, cpf:'001.002.003-04', nome: 'Queops Vitoria', imageUrl : '/assets/images/aleatoria/img2.jpg' }

  ];

  ngOnInit(): void {
  }

}
