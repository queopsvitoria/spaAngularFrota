import { Component, OnInit, Input } from '@angular/core';
import { Carros } from '../model/carros';
import { CarroService } from './carro.service';

@Component({
  selector: 'spa-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})


export class CarroComponent implements OnInit {
  
  listaCarros: Carros[] = []; //filteredCourses

  _carros: Carros[] = [];

  constructor(private carroService: CarroService) {
  }


  // constructor() { }

  // @Input() carrosInicial: number = 100;

  valor: number;
  exibeTabela:  boolean = true;

  // listaCarros: Carros[] = [
  //   {id: 1, placa:'QOS0001', modelo: 'Gol',marca: 'Wokswagem', imageUrl : '/assets/images/carros/car1.jpg' },
  //   {id: 2, placa:'QOS0002', modelo: 'Uno',marca: 'Fiat', imageUrl : '/assets/images/carros/car2.jpg' },
  //   {id: 3, placa:'QOS0003', modelo: 'Monsa',marca: 'Chevrolet', imageUrl : '/assets/images/carros/car3.jpg' },
  //   {id: 4, placa:'QOS0004', modelo: 'Chevette',marca: 'Chevrolet', imageUrl : '/assets/images/carros/car4.jpg' },
  //   {id: 5, placa:'QOS0005', modelo: '208',marca: 'Peugeot', imageUrl : '/assets/images/carros/car5.jpg' },

  // ];

  displayedColumns: string[] = ['Placa', 'Modelo', 'Marca','imageUrl'];

  ngOnInit(): void {
  
    this.retrieveAll();
  }

  @Input() carrosInicial: number = 0;

  retrieveAll(): void {
    this.carroService.retrieveAll().subscribe({
        next: carros => {
            this._carros = carros;
            this.listaCarros = this._carros;  
        },
        error: err => console.log('Error ',err)
    });
  }

  deleteById(carroId: number): void {
      console.log(carroId);
      this.carroService.deleteById(carroId).subscribe({
          next: ()=> {
              console.log('Apagado com sucesso'),
              this.retrieveAll();
          },
          error: err => console.log('Error ', err)
      })
  }


}
