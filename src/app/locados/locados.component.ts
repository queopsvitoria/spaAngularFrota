import { Component, OnInit } from '@angular/core';
import { Locados } from '../model/locados';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'spa-locados',
  templateUrl: './locados.component.html',
  styleUrls: ['./locados.component.css']
})
export class LocadosComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  constructor(private _formBuilder: FormBuilder) {}

  // constructor() { }

  exibeTabela:  boolean = true;

  listaLocados: Locados[] = [
    {id: 1, placa:  'QPS0001', modelo:  'Honda',   motorista: 'Queops Vitoria', dtlocacao: '01/01/2020', dtdevolucao: '25/02/2020' }


  ];
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
