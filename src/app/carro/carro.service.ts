import { Injectable } from '@angular/core';
import { Carros } from '../model/carros';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
    providedIn: 'root' //
})

export class CarroService {

    private carroUrl: string = 'Http://localhost:3100/api/carros';

    constructor(private httpClient: HttpClient) {

    }

    retrieveAll(): Observable<Carros[]> {
        return this.httpClient.get<Carros[]>(this.carroUrl);
    }

    retrieveById(id: number): Observable<Carros> {
    return this.httpClient.get<Carros>(`${this.carroUrl}/${id}`);
    }

    // save(Carro: Carros): Observable<Carros> {
    //     if(carro.id) {

    //         if (carro.id) {
    //             return this.httpClient.put<Carros>(`${this.carroUrl}/${carro.id}`,carro);
    //         } else {
    //             return this.httpClient.post<Carros>(`${this.carroUrl}`,carro); 
    //         }
           
    //     }
    // }

    deleteById(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.carroUrl}/${id}`);
    }  
}


// var CARROS: Carros[] = [

//         {id: 1, placa:'QOS0001', modelo: 'Gol',marca: 'Wokswagem', imageUrl : '/assets/images/carros/car1.jpg' },
//         {id: 2, placa:'QOS0002', modelo: 'Uno',marca: 'Fiat', imageUrl : '/assets/images/carros/car2.jpg' },
//         {id: 3, placa:'QOS0003', modelo: 'Monsa',marca: 'Chevrolet', imageUrl : '/assets/images/carros/car3.jpg' },
//         {id: 4, placa:'QOS0004', modelo: 'Chevette',marca: 'Chevrolet', imageUrl : '/assets/images/carros/car4.jpg' },
//         {id: 5, placa:'QOS0005', modelo: '208',marca: 'Peugeot', imageUrl : '/assets/images/carros/car5.jpg' },
    
 
// ]