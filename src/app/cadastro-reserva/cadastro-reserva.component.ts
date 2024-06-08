import { Component } from '@angular/core';
import { Quadra } from '../model/quadra';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cadastro-reserva',
  templateUrl: './cadastro-reserva.component.html',
  styleUrls: ['./cadastro-reserva.component.css']
})
export class CadastroReservaComponent {

  displayedColumns?: string[] = ['hora', 'usuario', 'observacao'];
  quadras: Quadra[] = [];
  selectedQuadra?: any;

  reservas = [
    {id: 1, quadra: 'Quadra Interna', usuario: 'Robson Natividade', data: '29/05/2024', hora: '13:00', observacao: 'Dupla com outros jogadores'}
  ]
  dataSource = new MatTableDataSource(this.reservas);
  
  constructor(){
    let quadrasStorage = localStorage.getItem("quadras");
    if(quadrasStorage){
      this.quadras = JSON.parse(quadrasStorage);
    }
  }

  public agendarReserva(){
    console.log(this.selectedQuadra);
  }
}
