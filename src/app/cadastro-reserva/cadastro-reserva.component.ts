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
  reservas = [
    {id: 1, quadra: 'Quadra Interna', usuario: 'Robson Natividade', data: '29/05/2024', hora: '13:00', observacao: 'Dupla com outros jogadores'}
  ]
  dataSource = new MatTableDataSource(this.reservas);
  
  constructor(){
    let quadra1 = new Quadra();
    quadra1.id = 1;
    quadra1.nome = 'Quadra Interna';
    let quadra2 = new Quadra();
    quadra2.id = 2;
    quadra2.nome = 'Quadra Extena';
    this.quadras.push(quadra1);
    this.quadras.push(quadra2);
  }

  public agendarReserva(){

  }
}
